const mongoose = require("mongoose");

const AddMoreWorkSchema = new mongoose.Schema({
    by: String,
    fors: String,
    workDetails: String,
    workAmount: Number,
})
mongoose.model("AddMoreWork", AddMoreWorkSchema);








