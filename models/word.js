const mongoose = require('mongoose');

//Creating a new mongoose Schema variable
const Schema = mongoose.Schema;

// Creating Word Schema for defining the type of word and its description to be added or fetched
const Word = new Schema ({
    word :{
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: [Object]
    }
});

module.exports = mongoose.model("Word",Word);