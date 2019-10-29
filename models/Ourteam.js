const mongoose = require('mongoose');


const OurteamSchema = mongoose.Schema({ 
    ot_profile_img:{
        type: String,
    },
    ot_job: {
        type: String,
    },
    ot_name: {
        type: String,
    },
    ot_email: {
        type: String,
    },
    ot_phone_one: {
        type: String,
    },
    ot_phone_two: {
        type: String,
    },
    ot_phone_three: {
        type: String,
    } ,
    ot_info: {
        type: String
    },
    ot_address: {
       po_box: String,
       street: String,
       sub: String,
       country: String
    },
    website: String,
   

});


module.exports = mongoose.model('ourteam', OurteamSchema);