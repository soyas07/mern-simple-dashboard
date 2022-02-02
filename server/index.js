import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import 'dotenv/config'

import dashboard from './routes/dashboard.js'
import user from './routes/user.js'

// local declaration
const app = express()

const port = process.env.PORT || 5000
const db = process.env.DB_URL

// middleware
app.use(express.json())
app.use(cors())

// routes
app.use('/dashboard', dashboard)
app.use('/user', user)

// connect to db then server
mongoose.connect(db, () => app.listen(port, () => console.log(`Server running at port ${port}`)))