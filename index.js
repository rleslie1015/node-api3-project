// code away!
const express = require('express')
const app = require('./server')
// const cors = require('cors')
const port = 8000

// app.use(cors)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})