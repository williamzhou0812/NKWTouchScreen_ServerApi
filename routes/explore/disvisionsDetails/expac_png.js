const  express = require('express');
const  ExpacPNG = require('../../../models/Explore/DisvisionsDetails/expac_png_au');
const  router = express.Router();


var p_a = `EXPAC expertyley manage the purchasing and prooduct sourcing requirement s form comapaine locaeted ihn papua /new Gunea and the Papu new Gunea and th apacific islands. Epac\'s high service levels, short lefad times and exteensive product sourcxing capacity, is why corporations,m small and medium businesses, mining companines and plantatons all trust EXPAC with their purchasing requirements`;
var p_b = `EXPAC is kknown for mits expertise in ssourcing the right product at the right price with expedient delivery, which sets them apart form other procurment companies. A combinatoin of price, 
rreliability, expertise and a strategic imperative to source the most appropriate products for theierclident, ensurds clients continue to trust expac with their requirements `;
var ul_a = `EXPAC can suource a wide range of paroducts including:`;
var li_a = `Minin g vehicle spare parts: such as typres, gearboxes and mechnical parts`;
var li_b = `Computer equipment, electrical equipment and furniture`;
var li_c = `Plumbing and building supplies`;
var li_d = `A wide range of consumables`;
var li_e = `Food poroductds from out Dry stores and Fresszer Stores`;
var li_f = `And much more`;
var p_c = `A broad range of customer, from ining companiesm, sugar plantationsm, other corpoorations and small/medium sized businesses i9n PNG
 and the Islands, rely on EXPAC for their requirements. EXPAC's purchasing power, coupled with unrivalle expeding, give our clients the edge over their competitors.`;
var p_d = `EXPAC staff are skill in procuring orders and ensuring a tmely , efficient, and approprate delivery processs, Knowledge of customs oprocesses and procedures, flights, 
sea freight etc, is part of th process of ensuing customers receive orders as soopns as prossible,as many producdts ared sourced from withn Australia (95%) and additionally Japan
USA China, Singaproe, Europe, south Korea and the UK. ExPAC typicall manages the customer relatonship and seeks multple quotes instantly for each plece of client product requirement throught its sales team.`;


router.post('/', async (req, res) => {  

    try { 
        const expac_png = new ExpacPNG({
            title: 'EXPAC PNG & EXPAC AUS',
            logo: 'http://localhost:5000/divisions/NKW_Logos_ExpacPNG.png',
            content:[
             p_a,
             p_b,
             ul_a,
             li_a,
             li_b,
             li_c,
             li_d,
             li_e,
             li_f,
             p_c,
             p_d

            ],
            contact: [
               {
                 name: 'Roger Glenwrite',
                 phone_a: '54725161',
                 phone_b: '732682033',

               }
            ]
        });
        await expac_png.save();
        const expac_png_all = await ExpacPNG.find();
        res.json(expac_png_all);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('SERVER ERROR');
    }
     
})


router.get('/', async (req, res) => {
    try { 
        const expac_png_all =  await  ExpacPNG.find();
        res.json(expac_png_all); 
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});




router.delete('/:id', async (req, res) => {   

    try {
        const expac_png_all = await ExpacPNG.findById(req.params.id);

        if (!expac_png_all) {
            return res.status(404).json({msg: 'can not found in Explore'});
        }
        await ExpacPNG.findByIdAndRemove(req.params.id);

        res.json({msg: 'remvoed from Explore landing'});

    } catch (err) { 
        console.error(err.message);
        res.status(500).send('Serve ERROR');
    }

   

});



module.exports = router;



