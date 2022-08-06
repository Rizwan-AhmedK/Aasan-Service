const mongoose = require("mongoose");

const AddMoreWorkSchema = new mongoose.Schema({
    workaddedby: String,
    workaddedfor: String,
    workdetails: String,
    workamount: Number,
})
mongoose.model("AddMoreWork", AddMoreWorkSchema);








