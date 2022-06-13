import dotenv from 'dotenv/config'

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import * as path from "path"

import express from 'express';
const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/public/views/index.html'))
})

app.get("/result", (req, res) => {
    res.sendFile(path.join(__dirname, '/public/views/result.html'))
})

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`)
})