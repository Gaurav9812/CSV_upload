const express=require('express');
const router=express.Router();
const homeController=require('../Controllers/homeController');

//for home
router.get('/',homeController.home);
//to add csv file
router.post('/create',homeController.create);
//to view csv file
router.get('/View',homeController.View);
//to delete csv file
router.get('/delete',homeController.delete);

module.exports=router;