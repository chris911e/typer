require("dotenv/config")

const express = require("express")
const path = require("path")
const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/public/views/index.html'))
})

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`)
})