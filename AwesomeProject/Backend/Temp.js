const mongoose = require("mongoose");

const Temp = new mongoose.Schema({
    by: String,
    fors: String,
    workDetails: String,
    workAmount: Number,

    message: String,
    title: String, 

    ratting: Number,
    rattingComment: String,
    
    userId: String, 
    field: String, 
    problemStatement: String, 
    latitude: String, 
    longititude: String, 
    ustaadId: String, 
    date: String, 
    email: String, 
    _name: String, 
    phone: Number, 
    address:String
})
mongoose.model("Temp", Temp);








