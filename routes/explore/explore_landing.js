const express = require('express');
const ExploreLanding = require('../../models/Explore/Explore_landing');

const router = express.Router();


router.post('/', async (req , res) => {

    const {exp_landing_img, exp_landing_title} = req.body;

    try {
        const explorelanding = new ExploreLanding({
            exp_landing_img: exp_landing_img,
            exp_landing_title: exp_landing_title
        });
        await explorelanding.save();
        const explorelanding_res = await ExploreLanding.find();
        res.json(explorelanding_res);
     } catch (err) {
        console.log(err.message);
        res.status(500).send('SERVER ERROR');
     }

});


router.get('/', async (req, res) => {
    try { 
        const explorelanding_get_res =  await  ExploreLanding.find();
        res.json(explorelanding_get_res); 
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.get('/:id', async (req, res) => {
    try { 
        const id  = req.params.id;
        const explorelanding_get_res =  await  ExploreLanding.findOne({_id:id});
        res.json(explorelanding_get_res); 
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


router.put('/:id', async (req, res) => {
    const {exp_landing_img, exp_landing_title, exp_links} = req.body;
    const exp_landing_update_Fields = { 
        exp_landing_img: exp_landing_img,
        exp_landing_title: exp_landing_title,
        exp_links: exp_links
    };
    try {
        const explore_landing = await ExploreLanding.findByIdAndUpdate(
            req.params.id,
            {$set: exp_landing_update_Fields},
            {new: true}
        );
        res.json(explore_landing);
    } catch (err) {
        console.log(err.message);
        rews.status(500).send('SERVER EROR');
    }
}) 

router.delete('/:id', async (req, res) => {   

    try {
        const explore = await ExploreLanding.findById(req.params.id);

        if (!explore) {
            return res.status(404).json({msg: 'can not found in Explore'});
        }
        await ExploreLanding.findByIdAndRemove(req.params.id);

        res.json({msg: 'remvoed from Explore landing'});

    } catch (err) { 
        console.error(err.message);
        res.status(500).send('Serve ERROR');
    }

   

});





module.exports  = router;
