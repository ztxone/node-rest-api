// Add .env vars
require('dotenv').config()

import express from "express"
import http from "http"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import compression from "compression"
import cors from "cors"
// @ts-ignore
import indexRouter from './routes/index.ts'


// create an instance of the Supabase client
// @ts-ignore
import { createClient } from '@supabase/supabase-js'
// @ts-ignore
import { Database } from './database.types'

const supabase = createClient<Database>(
  process.env.SUPA_URL,
  process.env.SUPA_APIKEY
)
console.log("SupaDB is connected")

// Initialize express server  
const app = express()
// Enable CORS for all routes
app.use(cors({
  credentials: true
}))   
// Middleware to parse JSON bodies
app.use(compression())
app.use(cookieParser())
app.use(bodyParser.json())

const server = http.createServer(app)
const port = process.env.PORT || 3003

app.use('/', indexRouter)

server.listen(port, () => {

  console.log("Server is up on http://localhost:3003")
  
})