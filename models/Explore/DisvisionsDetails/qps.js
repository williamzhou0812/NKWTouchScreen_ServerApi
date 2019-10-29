const mongoose = require('mongoose');


const QPSSchema = mongoose.Schema({
    title: String,
    logo: String,
    content: [{type: String}],
    gallery:[]
})



module.exports = mongoose.model('qps', QPSSchema );
