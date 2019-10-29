const  express = require('express');
const  PCS  = require('../../../models/Explore/DisvisionsDetails/pcs');
const  PCS_DATA = require('./Data/PCS_Data');
const  router = express.Router();



// Init Data for template 

// console.log(PCS_DATA.p.p_a);

var  sub_title = [
    'ABOUT PACIFIC ACARGO SERVICES',
    'We Successfully deliver thousands of tonners of freight every month by air and by sea. No item is too large or small, no deadline is impossible',
    'KEY FOCUS BUSINESS AREAS',
    'HOW WE STAND OUT',
    'SHIPS AGENCY - Customs Clearance and Stevedoring',
    'AIR FREIGHT PAPUR NEW GUINEA',
    'LOGISTICS & FREIGHT FORWARDING in PNG',
    'PLANT & EQUIPTMENT HIRE'
];



router.post('/', async (req, res) => {  

    try { 
        const _PCS = new PCS({
            title: 'Pacific Cargo Services (PCS)',

            logo: 'http://localhost:5000/divisions/NKW_Logos_PCS.png',

            website: 'http://pcspng.com',


            imgs: [
                'http://localhost:5000/divisions/markus-spiske-_98KV-P2dLM-unsplash.jpg',
                'http://localhost:5000/divisions/jason-yuen-jhWf66xZT2Y-unsplash.jpg',
                'http://localhost:5000/divisions/frank-mckenna-tjX_sniNzgQ-unsplash.jpg',
                'http://localhost:5000/divisions/jamar-penny-ZgmGq_eFmUs-unsplash.jpg'
            ],
            contact: [
               {
                    name: 'Mr Peter Hickey',
                    job: 'Country Manager',
                    phone_a: 'PNG: +675 7199 8004',
                    phone_b: 'AUS: +61 407 619 558',
                    email: 'peter.hickey@pcspng.co'
               },
               {
                   name: 'Jane Rutherford',
                   job: 'Operations Manager, Brisbane',
                   phone_a:'AUS: +61 432 912 084',
                   phone_b: ' ',
                   email: 'jane.rutherford@pcspng.co'
               },
               {
                    name: 'Keith Schulstad',
                    job: 'Regional Business, Developement Manager',
                    phone_a:'PNG: +675 7272 9738',
                    phone_b: 'AUS: +61 418 797 641',
                    email: 'keith.schulstad@pcspng.co'
               },
               {
                    name: 'Eduardo Rejano',
                    job: 'National Operations Manager',
                    phone_a:'PNG: +675 7059 4639',
                    phone_b: '',
                    email: 'eduardo.rejano@pcspng.co'
               },
               {
                    name: 'Ronald Simon',
                    job: 'Vessel Agency Manager',
                    phone_a: 'PNG: +675 7925 7029',
                    phone_b: '',
                    email: 'ronald.simon@pcspng.co'
               }
            ],
            company: [
                {
                    location: 'Section 21, Lot 9 Macdhui Street Lae',
                    po_box: 'PO Box 1909 Lae, Morobe',
                    company_phone: '+675 472 7855'
                },
                {
                    location: 'Section 82, Lot 1 Sigal Street Kimbe, West New Britain',
                    po_box: '',
                    company_phone: '+675 983 004'
                }
            ],

            context:  {

                subtitle: sub_title,

                p: {
                    p_a: PCS_DATA.p.p_a,
                    p_b: PCS_DATA.p.p_b,
                    p_c: PCS_DATA.p.p_c,
                    p_d: PCS_DATA.p.p_d,
                    p_e: PCS_DATA.p.p_e,
                    p_f: PCS_DATA.p.p_f,
                    p_g: PCS_DATA.p.p_g,
                    p_h: PCS_DATA.p.p_h,
                    p_i: PCS_DATA.p.p_i,
                    p_j: PCS_DATA.p.p_j,
                    p_k: PCS_DATA.p.p_k,
                    p_l: PCS_DATA.p.p_l
                },
                
                sub_lists: {
                    li_a: PCS_DATA.sub_lists.li_a,
                    li_b: PCS_DATA.sub_lists.li_b,
                    li_c: PCS_DATA.sub_lists.li_c
                }

            }

        });
        await _PCS.save();
        const _PCS_res = await PCS.find();
        res.json(_PCS_res);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('SERVER ERROR');
    }
     
})


router.get('/', async (req, res) => {
    try { 
        const _PCS =  await  PCS.find();
        res.json(_PCS); 
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});




router.delete('/:id', async (req, res) => {   

    try {
        const _PCS = await PCS.findById(req.params.id);

        if (!_PCS) {
            return res.status(404).json({msg: 'can not found in Explore'});
        }
        await PCS.findByIdAndRemove(req.params.id);

        res.json({msg: 'remvoed from Explore landing'});

    } catch (err) { 
        console.error(err.message);
        res.status(500).send('Serve ERROR');
    }

   

});



module.exports = router;



