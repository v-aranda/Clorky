const express = require('express')

const loginRoute = require("./routes/login.js")

const HOST = "localhost"
const PORT = 3000

const server = express()

server.use(express.json())
server.use("/login", loginRoute)

server.get("/",(req,res)=>{
    res.send("conexão bem sucedida")
})

server.listen(PORT,()=>{
    console.log(`server rodadando em http://${HOST}:${PORT}`)
})