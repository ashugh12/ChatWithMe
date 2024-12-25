import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/authroutes.js'
import connectToMongoDB from './db/connectToMongoDB.js'
import { sendMessage } from './controllers/messageController.js'
import messageRoutes from "./routes/messageroutes.js"
const app=express()


dotenv.config()

const PORT=process.env.PORT || 5000

app.get("/", (req, res)=>{
    res.send("hello")
})
app.use(express.json())
//To parse the incoming request with the JSON payloads (from req.body)

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.listen(PORT, ()=>{
    connectToMongoDB()
    console.log(`server is running on port ${PORT}`)})