const express=require('express');
const router=express.Router();
const homeController=require('../Controllers/homeController.js');

//for home
router.get('/',homeController.home);
//to add csv file
router.post('/create',homeController.create);
//to view csv file
router.get('/View/:id',homeController.View);
//to delete csv file
router.get('/delete/:id',homeController.delete);

module.exports=router;