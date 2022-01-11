const mongoose=require('mongoose');
const multer=require('multer');
const path=require('path');
const PATH=path.join('/Uploads/Files');


const fileSchema=new mongoose.Schema({
    Name:{
        type:String
    },
    File:{
        type:Array
    }
    
},{
    timestamps:true
});

const storage = multer.memoryStorage();

//Static methods
fileSchema.statics.uploadedFiles=multer({storage:storage}).single('file');
fileSchema.statics.avatarPath=PATH;

const File=mongoose.model('File',fileSchema);
module.exports=File;