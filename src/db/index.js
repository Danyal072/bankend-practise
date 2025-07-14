import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

// We Use async because the Database is not at same origin.
const connectDB = async ()=>{
    try {
       const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
       console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
       
       
    } catch (error) {
        console.error("MONGODB connection error ", error)
        process.exit(1)
    }
}

export default connectDB