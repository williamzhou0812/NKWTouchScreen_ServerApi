const mongoose = require('mongoose');


const MountaincoffeeSchema  = mongoose.Schema({
    title: '',
    sub_title: '',
    logo: '',
    content: [{type: String}],
    contact: {
        name: String,
        job: String,
        phone_a: String,
        phone_b: String, 
        email: String,
        location_a: String,
        location_b: String
    }
});

module.exports = mongoose.model('mountaincoffee', MountaincoffeeSchema);
