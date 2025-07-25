import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';


cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
});
 
const uploadOnCloudinary = async (localFilePath) =>{
    try {
        if (!localFilePath) return null
        // Upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",
        })
        //file has been uploaded Successfull
        console.log("File is uploaded on Cloudinary ", response.url);
        return response
    } catch(error){
        fs.unlinkSync(localFilePath) // remove the file which is locally saved temporary as upload operation failed
        return null
    }
}

export {uploadOnCloudinary}
    