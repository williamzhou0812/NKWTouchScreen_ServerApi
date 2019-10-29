const mongoose = require('mongoose');


const ExpacpngSchema = mongoose.Schema({
     title: String,
     logo: String,
     content: [{type: String}],
     contact: [{
         name: String,
         phone_a: String,
         phone_b: String
     }]
})



module.exports = mongoose.model('expac_png', ExpacpngSchema );
