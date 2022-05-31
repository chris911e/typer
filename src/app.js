import * as dotenv from "dotenv/config"

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import express from "express"
import * as path from "path"
const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/public/views/index.html'))
})

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`)
})