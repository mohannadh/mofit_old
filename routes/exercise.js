var express = require('express');
var router = express.Router();
var Exercise =require('../models/Exercise');
 
router.get('/:id?',function(req,res,next){
 if(req.params.id){
  Exercise.getExerciseById(req.params.id,function(err,rows){
   if(err){
    res.json(err);
   }
   else{
    res.json(rows);
   }
  });
 }
 else{
  Exercise.listExercise(function(err,rows){
   if(err){
    res.json(err);
    }
   else{
    res.json(rows);
    }
   });
  }
 });
 
 module.exports=router;