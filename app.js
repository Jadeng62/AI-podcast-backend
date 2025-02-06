const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json())



app.post("/generate", (req, res) => {
    res.send("Generation endpoint test")
})

app.get("/", (req, res) => {
    res.send("Welcome to Ai-generator backend")
})

module.exports = app;