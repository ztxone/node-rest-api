import express from "express"
// create an instance of the Supabase client
// @ts-ignore
import { createClient } from '@supabase/supabase-js'
// @ts-ignore
import { Database } from './database.types'
import { log } from "console"

const supabase = createClient<Database>(
  process.env.SUPA_URL,
  process.env.SUPA_APIKEY
)
console.log("SupaDB is connected")

const router = express.Router()

router.get('/', async (req, res) => {
//   const { data, error } = await supabase


})

router.post('/', async (req, res) => {
  let { data, error } = await supabase.auth.signUp({
    email: req.body.email,
    password: req.body.password
  })
  console.log(res);
  
  // res.send("Add new user")
})

router.get('/:id', (req, res) => {
  res.send("Add new user")
})
  

export default router