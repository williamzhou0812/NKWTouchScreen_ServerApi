const  express = require('express');
const  NKWCatering = require('../../../models/Explore/ExploreDetails/NKW_Catering');
const  NKWCateringData =  require('./Data_Exp/data_nkw_catering_exp');

const  router = express.Router();



// console.log(NKWCateringData.title)

router.post('/', async (req, res) => {  

    try { 
        const _NKWCatering = new NKWCatering(NKWCateringData);
        await _NKWCatering.save();
        const _NKWCatering_res = await NKWCatering.find();
        res.json(_NKWCatering_res);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('SERVER ERROR');
    }
     
})


router.get('/', async (req, res) => {
    try { 
        const _NKWCatering_res =  await  NKWCatering.find();
        res.json(_NKWCatering_res); 
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});




router.delete('/:id', async (req, res) => {   

    try {
        const _NKWCatering_res = await NKWCatering.findById(req.params.id);

        if (!_NKWCatering_res) {
            return res.status(404).json({msg: 'can not found in Explore'});
        }
        await NKWCatering.findByIdAndRemove(req.params.id);

        res.json({msg: 'remvoed from Explore landing'});

    } catch (err) { 
        console.error(err.message);
        res.status(500).send('Serve ERROR');
    }

   

});



module.exports = router;



