const express = require('express');
const Disvisionsheader = require('../../models/Explore/Disvisions_header');
const router = express.Router();



//Staic Router for Just for Export Sectino header

router.post('/', async (req, res) => {
 
    // const { exp_title, sub_exp_title}  = req.body;

    try { 
        disvisionsheader = new Disvisionsheader({
            dis_title:'NKW Group Divisions',
            sub_dis_title: 'NKW Group has developed to into a leading provideof diverse, short and long-term special projects and service'
        }); 
        await disvisionsheader.save();
        const exprolerheader_res = await Disvisionsheader.find();
        res.json(exprolerheader_res);
    } catch (err) {
        console.log(err.message);
        res.status(500). send('SERVER ERROR');
    }
     //res.send('i am exproler post router');
});


router.get('/', async (req, res) => { 
    try { 
        const disvisionsheader = await Disvisionsheader.find();
        res.json(disvisionsheader);
    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    } 
     
    //res.send('i am exproler get router');
});

router.put('/:id', async (req, res) => {

    const {dis_title, sub_dis_title} = req.body;

    const disvisionsheaderFields = {
        dis_title: dis_title,
        sub_dis_title: sub_dis_title
    };

    try {


        disvisionsheader = await Disvisionsheader.findByIdAndUpdate(
            req.params.id,
            {$set: disvisionsheaderFields},
            {new: true}
     );
     res.json(disvisionsheader);
  
    } catch (err)  {
            console.error(err.message);
            res.status(500).send('Server Error');
    }
    //res.send(`I amd a put rout ${req.params.id} `);
});



module.exports = router;
