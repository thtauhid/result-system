const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

// MongoDB Connection
const uri = process.env.ATLAS_URI
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true })

const connection = mongoose.connection
connection.once('open', () => {
    console.log('MongoDB Connected!')
})

// Routers
const studentRouter = require('./routes/student')
const resultRouter = require('./routes/result')

// Adding to server
app.use('/student', studentRouter)
app.use('/result', resultRouter)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})