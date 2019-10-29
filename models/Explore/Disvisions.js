const  mongoose = require('mongoose');

const  DivisionsSchema = mongoose.Schema({

        name:  String,
        phone: String,
        email: String, 
        logo:  String,
        header_title: String,
        sub_header_title: String,
        title_img: String,
        section_img_one: String, 
        Section_img_two: String,
        links: String,
        p1: String,
        p2: String,
        p3: String,
        p4: String,
        p5: String,
        p6: String,
        p7: String,
        p8: String
   
})



module.exports = mongoose.model('divisions', DivisionsSchema);