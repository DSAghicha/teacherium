require('dotenv').config({path: './config.env'})

const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const app = express()
const PORT = process.env.PORT || 2022

app.use(express.json())

app.use(cors())
app.use(cookieParser())

const server = app.listen(PORT, () => console.log(`Server is running at ${PORT}`))

process.on('unhandledRejection', (err) => {
    console.error(`Error Raise:\n${err}`)
    server.close(() => process.exit(1))
})
