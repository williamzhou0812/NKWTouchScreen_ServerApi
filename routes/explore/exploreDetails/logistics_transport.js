const  express = require('express');
const  LogisticsTransport  = require('../../../models/Explore/ExploreDetails/Logistics_Transport');
const  LogisticsTransportData =  require('./Data_Exp/data_logistics_transport');

const  router = express.Router();




router.post('/', async (req, res) => {  

    try { 
        const _LogisticsTransport = new LogisticsTransport(LogisticsTransportData);
        await _LogisticsTransport.save();
        const _LogisticsTransport_res = await LogisticsTransport.find();
        res.json(_LogisticsTransport_res);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('SERVER ERROR');
    }
     
})


router.get('/', async (req, res) => {
    try { 
        const _LogisticsTransport =  await  LogisticsTransport.find();
        res.json(_LogisticsTransport); 
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});




router.delete('/:id', async (req, res) => {   

    try {
        const _LogisticsTransport_res = await LogisticsTransport.findById(req.params.id);

        if (!_LogisticsTransport_res) {
            return res.status(404).json({msg: 'can not found in Explore'});
        }
        await LogisticsTransport.findByIdAndRemove(req.params.id);

        res.json({msg: 'remvoed from Explore landing'});

    } catch (err) { 
        console.error(err.message);
        res.status(500).send('Serve ERROR');
    }

   

});



module.exports = router;



