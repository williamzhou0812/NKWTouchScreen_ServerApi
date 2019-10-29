const mongoose = require('mongoose');


const ContentsSchema = mongoose.Schema({
    text_contents: String
})



module.exports = mongoose.model('contents', ContentsSchema )
