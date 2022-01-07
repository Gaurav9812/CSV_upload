const File=require('../Models/files');
const csv=require('csv-parser');
const fs=require('fs');
const path=require('path');
var results=[];

//home 
module.exports.home=async function(req,res){
    let Files=await File.find({});

    res.render('home.ejs',{
        Files:Files
    });
}

//To create a file and save 
module.exports.create=function(req,res)
{

    File.uploadedFiles(req,res,function(err){
        if(err)
        {
            console.log(`MULTER ERROR${err}`)
            return;
        }
        
        //if file is csv then only
        if(  req.file && req.file.mimetype=="application/vnd.ms-excel")
        {
            File.create({
                Name:req.file.originalname,
                File:File.avatarPath+'/'+req.file.filename
            },function(err,file){
            
                return res.redirect('back');
            })

        }
        //else redirect back
        else{
        return res.redirect('back');
        }
    })
    
 
}

//to view csv file 
module.exports.View=async function(req,res){
  try{
    results=[];
    
    let f=await File.findOne({File:req.query.filePath});
    
    fs.createReadStream(path.join(__dirname,'../',req.query.filePath))
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
        
        return res.render('table',{results:results,name:f.Name});
        
    });
    }catch(err)
    {
        //back to home
        return res.redirect('back');
    }
    

}

//to delete the UPLOADED csv file 
module.exports.delete=async function(req,res){
    try{

        if(fs.existsSync(path.join(__dirname,'../',req.query.filePath))){
            fs.unlinkSync(path.join(__dirname,'../',req.query.filePath));
        }
        let f=await File.findOneAndDelete({File:req.query.filePath});
        
        res.redirect('back');
    }
    catch(err){
 
        return res.redirect('back');
    }
}