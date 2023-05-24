const express = require('express');
const MapModel = require('./Model/MapSchema');
const router = express.Router();
router.get('/',(req,res)=>{
  res.send("Hello World");
})
router.post('/savedata',async(req,res)=>{
      try{
    const {fname,longi,lati} = req.body;
    const findAlready =await MapModel.findOne({fname:fname});
    if(findAlready) return res.send("File alrerady exist")
    else{
     const saveUser = await new MapModel({fname,longi,lati});
     await saveUser.save();
     if(saveUser) return res.send("Data Saved")
     else res.send("Error while Saving !!! Try again")
    
    }
}
catch(err){
res.send("Error while saving !!! Try again");

}
  })
  
  //to get all data from db 
 
  router.get('/getdata',async(req,res)=>{
    const db =await MapModel.find();
  if(db){
    res.send(db);
  }
  else{
    res.send("Data not found")
  }
   
  })

 
module.exports = router;