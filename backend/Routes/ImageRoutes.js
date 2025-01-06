const { uploadMultiple } = require('../Middleware/ImageUploader');
const ImageModel = require('../Models/ImageModel');

const Routes = require('express').Router();


Routes.get('/',async (req,res)=>{
    try {
        const data = await ImageModel.find();
        res.status(200).json({
            message: "all images",
            data : data,
            success:true
        })
          
     } catch (err) {
        res.status(500).json({
            message:"internal server error",
           err: err,
            success:false
    })}
  
});

Routes.get('/:id',async (req,res)=>{
    try {
        const {id} = req.params;
        const data = await ImageModel.findOne({ _id:id });
        res.status(200).json({
            message: "images detail",
            data : data,
            success:true
        })
          
     } catch (err) {
        res.status(500).json({
            message:"internal server error",
           err: err,
            success:false
    })}
  
});

Routes.post('/upload-images', uploadMultiple, async(req,res)=>{
    console.log('---upload files----', req.files);
    try {
        const images = req.files.map((file) => (
            {
            mimeType: file.mimetype,
            originalName: file.originalname,
            size: file.size,
            imageURL: file.path
        }));
        await ImageModel.insertMany(images);
   
        res.status(200).json({
            message:"file uploaded successfully",
            data: req.files,
            success:true
        })
    } catch (err) {
        res.status(500).json({
            message:"internal server error",
           err: err,
            success:false
    })}
  

});

module.exports = Routes;