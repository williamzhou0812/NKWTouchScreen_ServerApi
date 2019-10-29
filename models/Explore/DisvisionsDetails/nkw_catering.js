const mongoose = require('mongoose');


const NKWCateringSchema  = mongoose.Schema({
    title: '',
    sub_title: '',
    logo: '',
    content: [{type: String}],
    contact: {
        name: String,
        job: String,
        phone_a: String,
        phone_b: String, 
        email: String
    }
});

module.exports = mongoose.model('nkwcatering', NKWCateringSchema);
