const express = require('express');
const Exprolerheader = require('../../models/Explore/Explore_header');
const router = express.Router();



//Staic Router for Just for Export Sectino header

router.post('/', async (req, res) => {
 
    // const { exp_title, sub_exp_title}  = req.body;

    try { 
        exprolerheader = new Exprolerheader({
            exp_title:'NKW Group Divisions',
            sub_exp_title: 'NKW Group has developed to into a leading provideof diverse, short and long-term special projects and service'
        }); 
        await exprolerheader.save();
        const exprolerheader_res = await Exprolerheader.find();
        res.json(exprolerheader_res);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('SERVER ERROR');
    }
     //res.send('i am exproler post router');
});


router.get('/', async (req, res) => { 
    try { 
        const exprolerheader = await Exprolerheader.find();
        res.json(exprolerheader);
    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    } 
     
    //res.send('i am exproler get router');
});

router.put('/:id', async (req, res) => {

    const {exp_title, sub_exp_title} = req.body;

    const exploreheaderFields = {
       exp_title: exp_title,
       sub_exp_title: sub_exp_title
    };

    try {


        exploreheader = await Exprolerheader.findByIdAndUpdate(
            req.params.id,
            {$set: exploreheaderFields},
            {new: true}
     );
     res.json(exploreheader);
  
    } catch (err)  {
            console.error(err.message);
            res.status(500).send('Server Error');
    }
    //res.send(`I amd a put rout ${req.params.id} `);
});



module.exports = router;
