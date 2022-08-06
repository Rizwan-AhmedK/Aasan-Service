const mongoose = require("mongoose");

const RattingSchema = new mongoose.Schema({
    rattingby: String,
    rattingfor: String,
    ratting: Number,
    rattingcomment: String
})
mongoose.model("Ratting", RattingSchema);








