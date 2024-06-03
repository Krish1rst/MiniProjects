const cloudinary = require('cloudinary').v2;
const fs = require('fs');
cloudinary.config({ 
    cloud_name: "File_upload", 
    api_key: "212832983129935", 
    api_secret: "OP4S3At-91uuhHgKvgtfoDpwO2c" 
       
});

// const uploadOnCloudinary= async(localFilePath)=>{
//   try {
//     if(!localFilePath)return null;
//     const uploadResult = await cloudinary.uploader.upload
//     (localFilePath, {
//         resource_type:"auto",
//     })
//     //file uploaded successfully
//     console.log('file uploaded successfully',uploadResult.url);
//     return uploadResult;
//   } catch (error) {
//     fs.unlinkSync(localFilePath);
//     //removes the locally saved files as the upload operation get failed
//     return null;
//   }
// }
module.exports=cloudinary;