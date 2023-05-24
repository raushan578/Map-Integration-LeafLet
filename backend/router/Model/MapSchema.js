const mongoose = require('mongoose');
const MapSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    longi:{
        type:String,
        required:true
    },
    
    lati:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

const MapModel = mongoose.model('MapModel',MapSchema);
module.exports = MapModel;