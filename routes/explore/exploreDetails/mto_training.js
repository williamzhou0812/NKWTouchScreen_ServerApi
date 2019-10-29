const  express = require('express');
const  MTOTraining = require('../../../models/Explore/ExploreDetails/MTO_Training');
const  MTOTraingData =  require('./Data_Exp/data_mto_training');

const  router = express.Router();



 console.log(MTOTraingData.title)

router.post('/', async (req, res) => {  

    try { 
        const _MTOTraining = new MTOTraining(MTOTraingData);
        await _MTOTraining.save();
        const _MTOTraining_res= await MTOTraining.find();
        res.json(_MTOTraining_res);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('SERVER ERROR');
    }
     
})


router.get('/', async (req, res) => {
    try { 
        const _MTOTraining_res =  await  MTOTraining.find();
        res.json(_MTOTraining_res); 
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});




router.delete('/:id', async (req, res) => {   

    try {
        const _MTOTraining_res = await MTOTraining.findById(req.params.id);

        if (!_MTOTraining_res) {
            return res.status(404).json({msg: 'can not found in Explore'});
        }
        await MTOTraining.findByIdAndRemove(req.params.id);

        res.json({msg: 'remvoed from Explore landing'});

    } catch (err) { 
        console.error(err.message);
        res.status(500).send('Serve ERROR');
    }

   

});



module.exports = router;



