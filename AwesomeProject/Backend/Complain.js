const mongoose = require("mongoose");

const ComplainSchema = new mongoose.Schema({
    complainby: String,
    complainfor: String,
    complain: String,
})
mongoose.model("Complain", ComplainSchema);








