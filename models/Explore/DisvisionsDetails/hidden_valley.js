const mongoose = require('mongoose');


const HiddenValleySchema  = mongoose.Schema({
    title: '',
    sub_title: '',
    logo: '',
    content: [{type: String}],
    contact: {
        name: String,
        job: String
    }
});

module.exports = mongoose.model('hiddenvalley', HiddenValleySchema);
