const express = require('express')
const path = require('path')

const app = express()

const port  = process.env.PORT || 3000;

const publicDirectory = path.join(__dirname, '../public')

app.use(express.static(publicDirectory))

app.listen(3000, () => {
    console.log('Server is running on ' + port)
})