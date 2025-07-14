import { response } from "express"
import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { User } from "../models/user.models.js"

const registerUser = asyncHandler( async(req, res)=>{
    
    //1. Take Field Details from front end.
    //2. Validation
    //3. check if user exists: username and email
    //4. check for images, check for avatar
    //5. upload them to cloudinary, avatar,
    //6. create a userObject - create entry in db
    //7. remove password and refrest token field from response
    //8. check for user creation
    //9. return response

    const {fullName, userName, email, password} = req.body
    console.log("Email ", email);
    
    if (
        [fullName, userName, password, email].some((field)=> field?.trim() === "")
    ) {
        throw new ApiError(400, "All Field Are Complusary/ Required.")
    }


})

export {
    registerUser,
}
