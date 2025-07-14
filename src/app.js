//App.js is for Express Function (for my mind)

import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"


const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))


app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


// Routes Import

import userRouter from './routes/user.routes.js'


//routes decleration

// We had seperate the Routes therefore we will use app.use (Which is middleware)
app.use("/api/v1/users", userRouter)




export { app }