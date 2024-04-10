import { supabaseCli } from "@/modules/supabase/init.js"
import { getUserByAuthId } from "../database/user/getUserByAuthId.js"

export const supabaseAuthMiddleware = async (req, res, next) => {
  let authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  const token = authHeader.split(' ')[1]

  let { data, error } = await supabaseCli.auth.getUser(token)

  if (error) {
    // console.error("Failed to get supabase auth user:", error)
    return res.status(401).json({ message: 'Unauthorized' })
  }

  let authId = data.user.id
  let user = await getUserByAuthId(authId)

  req.user = user

  return next()
}