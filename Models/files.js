const mongoose=require('mongoose');
const multer=require('multer');
const path=require('path');
const PATH=path.join('/Uploads/Files');


const fileSchema=new mongoose.Schema({
    Name:{
        type:String
    },
    File:{
        type:String
    }
    
},{
    timestamps:true
});


let storage= multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname,'../',PATH));
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now();
        cb(null, file.fieldname + '-' + uniqueSuffix+'.csv');
    }
});

//Static methods
fileSchema.statics.uploadedFiles=multer({storage:storage}).single('file');
fileSchema.statics.avatarPath=PATH;

const File=mongoose.model('File',fileSchema);
module.exports=File;