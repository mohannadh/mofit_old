var db=require('../other/dbconnection'); 
 
var Exercise={
 
 listExercise:function(callback){
  return db.query("select * from exercises",callback);
 },
 
 getExerciseById:function(id,callback){
  return db.query("select * from exercises where id=?",[id],callback);
 },
 
 addExercise:function(Exercise,callback){
  return db.query("insert into exercises (name, photo_link, description) values(?,?,?)",[Exercise.name,Exercise.photo_link,Exercise.description],callback);
 },
 
 deleteExercise:function(id,callback){
  return db.query("delete from exercises where id=?",[id],callback);
 },
 
 updateExercise:function(id,Exercise,callback){
  return db.query("update exercises set name=?, photo_link=?, description=? where Id=?",[Exercise.name,Exercise.photo_link,Exercise.description,id],callback);
 }
 
};
 module.exports=Exercise;