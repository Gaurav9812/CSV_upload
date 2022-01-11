
   
const File=require('../Models/files');
const Papa=require('papaparse');
//home 
module.exports.home=async function(req,res){
    let Files=await File.find({});

    res.render('home.ejs',{
        Files:Files
    });
}

//To create a file and save 
module.exports.create= function(req,res)
{

    File.uploadedFiles(req,res,async function(err){
        try{
            //if file has same name then don't add the file
        let file=await File.findOne({Name:req.file.originalname});
        if(file)
        {
            return res.redirect('back');
        }
        let conversedtext=Papa.parse(req.file.buffer.toString(),{
            delimiter: ';',
            escapeChar: '\\',
            header: false,
            
            error: function (error) {
              process.send(['search-failed', 'process']); //mainWindow.webContents.send('search-failed', 'process');
              console.log(error);
                }
            })
        
        //if file is csv then only
        if(  req.file && req.file.mimetype=="application/vnd.ms-excel")
        {
        
            let file= await File.create({
                Name:req.file.originalname,
                File:conversedtext.data
            });
            return res.redirect('back');
        }
        //else redirect back
        }catch(err){
            console.log("error",err);
                res.redirect('back');
        }
    })
    
 
}

//to view csv file 
module.exports.View=async function(req,res){
  try{
    
    let f=await File.findById(req.params.id);
    
    return res.render('table',{
        name:f.Name,
        keys:f.File[0],
        results:f.File
    });
}
catch(err){ 
        console.log("Error ",err);
        res.redirect('back');
    }
}

//to delete the UPLOADED csv file 
module.exports.delete=async function(req,res){
    try{

      
        let f=await File.findByIdAndDelete(req.params.id);
        
        res.redirect('back');
    }
    catch(err){
 
        return res.redirect('back');
    }
}
