const mongoose = require('mongoose');

const HeaderSchema = mongoose.Schema({ 
        logo_img: {
            type: String,
            require: true
        },
        local_time: {
            type: Date,
            default: Date.now
        },
        nav_one: {
            type: String,
            require: true
        },
        nav_two: { 
            type: String,
            require: true
        },
        nav_three: {
            type: String,
            require: true
        }
    
});


module.exports = mongoose.model('header', HeaderSchema);