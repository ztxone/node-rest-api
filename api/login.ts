// @ts-ignore
import supabase from "./database.ts"


try {
  const { user, error } = await supabase.auth.signUp({
    email: 'user@example.com',
    password: 'password'
  })
  console.log("You successfully singed up")
  
} catch (error) {
  console.log("SingUp unsuccesfull")
  
}
