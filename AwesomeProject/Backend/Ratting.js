const mongoose = require("mongoose");

const RattingSchema = new mongoose.Schema({
    by: String,
    fors: String,
    ratting: Number,
    rattingComment: String
})
mongoose.model("Ratting", RattingSchema);








