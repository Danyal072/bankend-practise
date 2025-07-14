import { response } from "express"
import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { User } from "../models/user.models.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js"
import { upload } from "../middlewares/multer.middleware.js"
import {ApiResponse} from "../utils/ApiResponse.js"



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

    const existedUser = User.find({
        $or: [{userName}, {email}]
    })
    console.log(existedUser);
    

    if(existedUser){
        throw new ApiError(409, "User with email and username already exists.")
    }

    const avatarLocalPath = req.files?.avatar[0]?.path;
    const coverImageLocalPath = req.files?.coverImage[0]?.path;

    if (!avatarLocalPath) {
        throw new ApiError(400, "Avatar Image is Required.")
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath)
    const coverImage = await uploadOnCloudinary(coverImageLocalPath)

    if (!avatar) {
         throw new ApiError(400, "Avatar Image is Required.")
    }


   const user = await  User.create({
        fullName,
        avatar: avatar.url,
        coverImage : coverImage?.url || "",
        email,
        password,
        userName : userName.toLowerCase()
    })
    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if (!createdUser) {
        throw new ApiError(500, "Something Wrong While Creating User.");        
    }

    
    return res.status(201).json(
        new ApiError(200, createdUser, "User Registered Successfully")
    )

})

export {
    registerUser,
}
