import { createAuthUser } from "@/modules/supabase/auth/createAuthUser.js"
import { createDbUser } from "@/modules/supabase/database/user/createDbUser.js"

export const post_signup = async (req, res) => {

  let {email, password, username} = req.body
  
try {
  
  // Insert a new user into SB auth
  let authId = await createAuthUser(email, password)

  // Insert a new user into SB table "user"
  await createDbUser({auth_id: authId, email, username})

  res.status(200).send("Successfully signed up")
} catch (error) {
  res.status(400).send("Failed to sign up", error)
}
}
