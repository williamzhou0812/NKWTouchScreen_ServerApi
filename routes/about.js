// Here is About page Route 

const express = require('express');
const router = express.Router();

// Import About Model
const About = require('../models/About');

/// Todo list


//Static Post set Init Date Route

router.post('/', async (req, res) => {

    try {
        about = new About({
            about_header_section: {
                main_title_img: 'http://nkwgroup.com/wp-content/uploads/2019/02/nkwofficethinkbanner-19x10.jpg',
                main_title: 'About NKW Group',
                sub_title: 'A leading provider of diverse, short and long-term special projects',
                nav_a: 'Who We Are',
                nav_b: 'NKW Miss, Vision & Values',
                nav_c: 'Meet Our Team',
                nav_d: 'CEO Message',
                short_intro: 'NKW Group has developer into a leading provider of diverse, short and long-term special projects and services. ... '
            },
            service_details_info: {
                sdi_a: {
                    img_logo_s_a: 'http://nkwgroup.com/wp-content/uploads/2019/03/nkwteambanner.jpg',
                    name_s_a: 'SAFETY',
                    des_s_a: 'At NKW safety is paramount.'
                },
                sdi_b: {
                    img_logo_s_b: 'http://nkwgroup.com/wp-content/uploads/2019/03/nkwteambanner.jpg',
                    name_s_b: 'PEOPLE',
                    des_s_b: 'We respect our people, they are our most valuable asset.'
                },
                sdi_c: {
                    img_logo_s_c: 'http://nkwgroup.com/wp-content/uploads/2019/03/nkwteambanner.jpg',
                    name_s_c: 'CONSIDERATION',
                    des_s_c: 'We carefully assess every situation and take the best possible actions without prejudice or pride.'
                },
                sdi_d: {
                    img_logo_s_d: 'http://nkwgroup.com/wp-content/uploads/2019/03/nkwteambanner.jpg',
                    name_s_d: 'TEAMWORK & PARTNERSHIPS',
                    des_s_d: 'We believe in creating and maintaining strong partnerships based on a cohesive and engaging team environment.'
                }
                
            },
            about_who_we_are : {
                img_one: 'http://nkwgroup.com/wp-content/uploads/2019/03/nkwteambanner.jpg',
                img_two: 'http://nkwgroup.com/wp-content/uploads/2019/03/nkwteambanner.jpg',
                title: 'Who We Are',
                p_a: 'Our commitment to delivering high quality service is evident both in our ability to develop strong partnerships with our clients and maintaining a professional workforce that is able to offer solutions that are tailor-made for customers.',
                p_b: 'NKW Holdings Limited, also known as NKW Group, is a wholly owned partnership of three Landowner Groups based in Wau, Morobe Province, Papua New Guinea. They are, Nauti Investment Limited (NIL), Kuembu Investment Limited (KIL) and Winima Investment Limited (WIL).',
                p_c: 'NKW was formed under the Memorandum of Agreement (MoA) signed in August 2004 to enable the landowners of the Hidden Valley mining project to participate in the development by way of the supply of goods and services. This gives the landowners a sense of ownership of the development thereby lessening possible disruption of mining activities.',
            },
            about_mission_vision_value: {
                mission :{
                    mission_name: 'Our Mission',
                    mission_des: 'Our  mission is to increase the accessibility of our services by offering solutions which are industry specific and customer focused.'
                },
                vision: {
                    vision_name: 'Our Vision',
                    vision_des: 'To be a 1st choice industry service provider in Papua New Guinea, every service must offer a positive outcome for our customers, communities and the environment in which we operate.'
                },
                values: {
                    values_name: 'Our Values',
                    values_des: 'Our values are based on the belief that every aspect of our work is important and unique.'
                }
            },
            ceo_message: {
                ceo_title: 'CEO Message',
                ceo_p_a: 'NKW Holdings Limited invests for growth, we are building a company that will stand the test of time; a company that understands the challenges it faces and the responsibilities it carries. Health, Safety, Environment and Community responsibility is at the very heart of everything we achieve and we are pleased that our example continues to be the benchmark for our Corporate Partners.',
                ceo_p_b: 'As I look at the growth over the years since our inception in 2004, I am extremely proud of what we have achieved, and even more excited about our outlook for an equally promising future. We have successfully converted from a local Wau start-up business to become a reputable multi-facetted entity, garnering business from across Papua New Guinea, while earning our clients’ trust along the way.',
                ceo_p_c: 'It is satisfying to know that we are able to help our clients and partners build strategies to enable them to operate the critical aspects of their business activities more efficiently and economically. Contract performance for the client is of the utmost importance and we hold ourselves to the highest standard of quality and safety with unending respect for our environment and community.',
                ceo_p_d: 'Our clients are continually informed about their solution options and they continue to select NKW Holdings as their partner of choice because of our hands on experience, commitment to quality, community, and integrity.',
                
            }
        
        });

        await about.save();
        res.send('About Init Data Saved');

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server ERROR');
    }



    // res.send('HERE is About page Api Post');
});


router.get('/', async (req, res) => {

    try {
        const about = await About.find();
        res.json(about);

    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server ERROR');
    }
    // res.send('about get router working');
});


router.put('/:id', async (req, res) => {

   
   const  {main_title_img, main_title, sub_title, nav_a, nav_b, nav_c, nav_d, short_intro} = req.body.about_header_section;
   const  {img_logo_s_a, name_s_a, des_s_a} = req.body.service_details_info.sdi_a;
   const  {img_logo_s_b, name_s_b, des_s_b} = req.body.service_details_info.sdi_b;
   const  {img_logo_s_c, name_s_c, des_s_c} = req.body.service_details_info.sdi_c;
   const  {img_logo_s_d, name_s_d, des_s_d} = req.body.service_details_info.sdi_d;
   const  {img_one, img_two, title, p_a, p_b, p_c} = req.body.about_who_we_are;
   const  {mission_name, mission_des} = req.body.about_mission_vision_value.mission;
   const  {vision_name, vision_des} = req.body.about_mission_vision_value.vision;
   const  {values_name, values_des} = req.body.about_mission_vision_value.values;
   const  {ceo_title, ceo_p_a, ceo_p_b, ceo_p_c, ceo_p_d} = req.body.ceo_message;

   const newAbout = {
       about_header_section: {
           main_title_img: main_title_img,
           main_title: main_title,
           sub_title: sub_title,
           nav_a: nav_a,
           nav_b: nav_b,
           nav_c: nav_c,
           nav_d: nav_d,
           short_intro: short_intro
       },
       service_details_info: {
           sdi_a: { 
               img_logo_s_a: img_logo_s_a,
               name_s_a: name_s_a,
               des_s_a: des_s_a
           },
           sdi_b: {
               img_logo_s_b: img_logo_s_b,
               name_s_b: name_s_b,
               des_s_b: des_s_b
           },
           sdi_c: {
               img_logo_s_c: img_logo_s_c,
               name_s_c: name_s_c,
               des_s_c: des_s_c
           },
           sdi_d: { 
                img_logo_s_d: img_logo_s_d,
                name_s_d: name_s_d,
                des_s_d: des_s_d
           }
           
       },
        about_who_we_are: { 
            img_one: img_one,
            img_two: img_two,
            title: title,
            p_a: p_a,
            p_b: p_b,
            p_c: p_c

       },
       about_mission_vision_value: { 
           mission: { 
               mission_name: mission_name,
               mission_des: mission_des
           },
           vision: {
               vision_name: vision_name,
               vision_des: vision_des
           },
           values: {
               values_name: values_name,
               values_des: values_des
           }

       },
       ceo_message: { 
            ceo_title: ceo_title, 
            ceo_p_a: ceo_p_a,
            ceo_p_b: ceo_p_b,
            ceo_p_c: ceo_p_c,
            ceo_p_d: ceo_p_d
       }
     };

try { 
   let about = await About.findById(req.params.id);

   about = await About.findByIdAndUpdate(
        req.params.id,
        {$set: newAbout},
        {new: true}
   );
   res.json(about);

} catch (err) {
        console.error(err.message);
        res.status(500).send('Server ERROR');
};

    // res.json(newAbout);
});



router.delete('/:id', async (req, res) => {
    try {
        let about = await About.findById(req.params.id);
        if(!about) {
            return res.status(404).json({msg: `About Data not Found`});
        }

        await About.findByIdAndRemove(req.params.id);
        res.json({msg: 'About Data by Removed'});
 
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }

    res.send('about delect router working');
});

module.exports = router;