const  express = require('express');
const  NkwBuilding = require('../../../models/Explore/DisvisionsDetails/nkw_building');
const  nkwBuildingDatas =  require('./Data/NKW_Data');
const  router = express.Router();

 
// console.log(nkwBuildingDatas.title)

router.post('/', async (req, res) => {  

    try { 
        const _NkwBuilding = new NkwBuilding(nkwBuildingDatas);
        await _NkwBuilding.save();
        const _NkwBuilding_res = await NkwBuilding.find();
        res.json(_NkwBuilding_res);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('SERVER ERROR');
    }
     
})


router.get('/', async (req, res) => {
    try { 
        const _NkwBuilding_res =  await  NkwBuilding.find();
        res.json(_NkwBuilding_res); 
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});




router.delete('/:id', async (req, res) => {   

    try {
        const _NkwBuilding_res = await NkwBuilding.findById(req.params.id);

        if (!_NkwBuilding_res) {
            return res.status(404).json({msg: 'can not found in Explore'});
        }
        await NkwBuilding.findByIdAndRemove(req.params.id);

        res.json({msg: 'remvoed from Explore landing'});

    } catch (err) { 
        console.error(err.message);
        res.status(500).send('Serve ERROR');
    }

   

});



module.exports = router;



