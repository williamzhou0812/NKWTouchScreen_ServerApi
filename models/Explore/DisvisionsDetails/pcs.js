const  mongoose = require('mongoose');

const  PCSSchema = mongoose.Schema({
    title: String,
    logo: String,
    website: String,
    contact: [ 
       { 
        name: String,
        job: String,
        phone_a: String,
        phone_b: String,
        email: String
       }
    ],
    company: [
        {
            location: String,
            po_box: String,
            company_phone: String
        }
    ],
   
    imgs: [],
    context: {
        p:{
            p_a: String,
            p_b: String,
            p_c: String,
            p_d: String,
            p_e: String,
            p_f: String,
            p_g: String,
            p_h: String,
            p_i: String,
            p_j: String,
            p_k: String,
            p_l: String
        },
        subtitle: [],
        sub_lists: {
            li_a: [],
            li_b: [],
            li_c: []
        },
    }
});

module.exports  = mongoose.model('pcs', PCSSchema );