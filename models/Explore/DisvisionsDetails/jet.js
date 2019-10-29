const  mongoose = require('mongoose');

const  JETSchema = mongoose.Schema({
    title: String,
    logo: String,
    contact: { 
        name: String,
        job: String,
        phone_a: String,
        phone_b: String,
        email: String
    },
    context: {
        p:[],
        subtitle: [],
        sub_li_a: [],
    }
})




module.exports  = mongoose.model('jet', JETSchema )