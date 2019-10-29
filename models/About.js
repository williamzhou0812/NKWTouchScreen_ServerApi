const mongoose = require('mongoose');


const AboutSchema = mongoose.Schema({

    about_header_section: {
        main_title_img: String,
        main_title: String,
        sub_title: String,
        nav_a: String,
        nav_b: String,
        nav_c: String,
        nav_d: String,
        short_intro: String
    },
    service_details_info: {
        sdi_a: {
            img_logo_s_a: String,
            name_s_a: String,
            des_s_a: String
        },
        sdi_b: {
            img_logo_s_b: String,
            name_s_b: String,
            des_s_b: String
        },
        sdi_c: {
            img_logo_s_c: String,
            name_s_c: String,
            des_s_c: String
        },
        sdi_d: {
            img_logo_s_d: String,
            name_s_d: String,
            des_s_d: String
        }
        
    },
    about_who_we_are : {
        img_one: String,
        img_two: String,
        title: String,
        p_a: String,
        p_b: String,
        p_c: String,
    },
    about_mission_vision_value: {
        mission :{
            mission_name: String,
            mission_des: String
        },
        vision: {
            vision_name: String,
            vision_des: String
        },
        values: {
            values_name: String,
            values_des: String
        }
    },
    ceo_message: {
        ceo_title: String,
        ceo_p_a: String,
        ceo_p_b: String,
        ceo_p_c: String,
        ceo_p_d: String,
        
    }



});


module.exports = mongoose.model('abouts', AboutSchema);