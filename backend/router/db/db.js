const mongoose = require('mongoose');
const db = "mongodb://localhost:27017/mapdata";

mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology :true})
.then(()=>{
    console.log("Connection Success");
})
.catch(err =>{
    console.log("Not connected");
})

