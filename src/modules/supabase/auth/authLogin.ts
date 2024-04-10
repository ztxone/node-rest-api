import { supabaseCli } from "@/modules/supabase/init.js"

export const authLogin = async (email, password) => {
  try {
    const { data, error} = await supabaseCli.auth.signInWithPassword({
      email, password
    })
    if (error) throw error

    return data

  } catch (error) {
    console.error("Error login in", error.message)
    throw error
  }
}