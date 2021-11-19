const mongoose = require("mongoose")
const { Schema } = mongoose;

const stdschema = new Schema({
    name: String,
    regno: String,
    marks: Number
});

module.exports = mongoose.model("stdinfo",stdschema,"Student-Info")