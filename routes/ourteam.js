const  express = require('express');
const  router = express.Router();

//import  express-validator 

const  Ourteam = require('../models/Ourteam');
// OurTeam Model


router.post('/', async (req, res) => { 
        // check field input is validator
        const {ot_profile_img, ot_job, ot_name, ot_email, ot_phone_one, ot_phone_two, ot_phone_three,  ot_info, website} = req.body;
        const { po_box, street, sub, country }  = req.body.ot_address;
        try {
                ourteam = new Ourteam({
                        ot_profile_img:  ot_profile_img,
                        ot_job: ot_job,
                        ot_name: ot_name,
                        ot_email: ot_email,
                        ot_phone_one:  ot_phone_one,
                        ot_phone_two: ot_phone_two,
                        ot_phone_three: ot_phone_three,
                        ot_info: ot_info,
                        ot_address: { 
                                po_box: po_box,
                                street: street,
                                sub: sub,
                                country: country
                        },
                        website: website
                });
                
                await ourteam.save();

                const ourteam_res = await Ourteam.find();

                 res.json(ourteam_res);
                
        } catch (err) {
                console.log(err.message);
                res.status(500).send('Server Error');
        }

       
});


// @Get OurTeam data

router.get('/', async (req, res) => {
        try {
                const ourteam  = await Ourteam.find();
                res.json(ourteam);
        } catch (err) {
                console.error(err.message);
                res.status(500).send('Server Error');
        }

});


//@put / update

router.put('/:id', async (req, res) => {

        const {ot_profile_img, ot_job, ot_name, ot_email, ot_phone_one, ot_phone_two, ot_phone_three,  ot_info, website} = req.body;
        const { po_box, street, sub, country }  = req.body.ot_address;
        const ourteamPut = {
                ot_profile_img:  ot_profile_img,
                ot_job: ot_job,
                ot_name: ot_name,
                ot_email: ot_email,
                ot_phone_one:  ot_phone_one,
                ot_phone_two: ot_phone_two,
                ot_phone_three: ot_phone_three,
                ot_info: ot_info,
                ot_address: { 
                        po_box: po_box,
                        street: street,
                        sub: sub,
                        country: country
                },
                website: website
        };

        try {


         ourteam = await Ourteam.findByIdAndUpdate(
                req.params.id,
                {$set: ourteamPut},
                {new: true}
         );
         res.json(ourteam);
      
        } catch (err)  {
                console.error(err.message);
                res.status(500).send('Server Error');
        }
});


// @Delete ourteam router

router.delete('/:id', async (req, res) => {
        try {
            const ourteam = await Ourteam.findById(req.params.id);
            
            if (!ourteam) {
                    return res.status(404).json({msg: 'can not found in ourteam'});
            }
            await Ourteam.findByIdAndRemove(req.params.id);
            res.json({msg: 'removed from ourteam'});
        } catch (err) {
                console.error(err.message);
                res.status(500).send('Serve ERROR');
        }
});





module.exports = router;