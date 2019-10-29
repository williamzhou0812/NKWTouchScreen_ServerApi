const  express = require('express');
const  NKWFresh = require('../../../models/Explore/ExploreDetails/NKW_Fresh');
const  NKWFresh_Data =  require('./Data_Exp/data_nkw_fresh');

const  router = express.Router();



//console.log(NKWFresh_Data.title)

router.post('/', async (req, res) => {  

    try { 
        const _NKWFresh = new NKWFresh(NKWFresh_Data);
        await _NKWFresh.save();
        const _NKWFresh_res = await NKWFresh.find();
        res.json(_NKWFresh_res);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('SERVER ERROR');
    }
     
})


router.get('/', async (req, res) => {
    try { 
        const _NKWFresh =  await  NKWFresh.find();
        res.json(_NKWFresh); 
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});




router.delete('/:id', async (req, res) => {   

    try {
        const _NKWFresh = await NKWFresh.findById(req.params.id);

        if (!_NKWFresh) {
            return res.status(404).json({msg: 'can not found in Explore'});
        }
        await NKWFresh.findByIdAndRemove(req.params.id);

        res.json({msg: 'remvoed from Explore landing'});

    } catch (err) { 
        console.error(err.message);
        res.status(500).send('Serve ERROR');
    }

   

});



module.exports = router;



