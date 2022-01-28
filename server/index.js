import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import 'dotenv/config'

import dashboard from './routes/dashboard.js'

// local declaration
const app = express()

const port = process.env.PORT || 5000
const db = process.env.DB_URL

// middleware
app.use(cors())
app.use('/dashboard', dashboard)

// connect to db then server
mongoose.connect(db, () => app.listen(port, () => console.log(`Server running at port ${port}`)))