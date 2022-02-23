const StatusCodes = require("http-status-codes");
const BadRequestError = require("../errors/bad-request");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");


const uploadImage = async(req,res) => {
    if(!req.files){
        throw new BadRequestError("no file");
    }
    const tempUrl = req.files.image.tempFilePath;
    const result = await cloudinary.uploader.upload(tempUrl);
    fs.unlinkSync(req.files.image.tempFilePath);
    res.status(StatusCodes.CREATED).json({ image: 
        { 
            src: result.secure_url
        }
    });
}


module.exports = {
    uploadImage
}