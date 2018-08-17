const mongoose = require('mongoose');

const SlothSchema = new mongoose.Schema({
    name: {type: String, minlength:[2, "Sloth's name must be more than one character"], required: [true, "Please provide the sloth's name"]},  
    age: {type: Number, min:[1, "Sloth must be at least one"], max:[43, "No sloth has ever lived passed 43"],},
   }, {timestamps: true})

mongoose.model('Sloth', SlothSchema);


