import { updateUserByAuthId } from "@/modules/supabase/database/user/updateUserByAuthId.js"

export const put_user = async (req, res) => {
  let { username } = req.body
  
  try {
    let authId = req.user.auth_id
    
    await updateUserByAuthId(authId, { username })

    res.status(200).send("Successfully updated user")

  } catch (error) {
    console.error(error)
    res.status(400).send("Failed to update user")    
  }
}