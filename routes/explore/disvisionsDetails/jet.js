const  express = require('express');
const  JET = require('../../../models/Explore/DisvisionsDetails/jet');
const  router = express.Router();

// Start Text Contents

var p_a = `
Jet Smart Travel Service Limited(JST) is a wholly owned
]subsidiary of NKW Holdings Limited.
`;

var p_b = `
JST is a special purose company established and registered in Morobe Province, Lae, 
Papua New Guinea for the purpose of all aspects of domestic and international 
travel through the sale of airline tickets, booking for shuttle buses / taxi cabs, 
car rentals, hotel bookings amongst many other travel related services.

`;

var p_c = `JST will offer a variety of services within the scope of 
the travel industry in Papua New Guinea. Our intention of staring the 
travel agency is to ensure a professional service is delivered to all
NKW staff requiring travel both domestically and internaionallly. Travel agency
services will also be available to external customers (mass market offering)
`;

var p_d = `Contact Us for all your travel service requirements`;

subtitle = [
    "SERVICES OFFERED"
]

sub_li_a = [
    "Travel consulting and advisory services for individuals and corporate clients",
    "Booking for flight tickets",
    "Routine Scheduled Maintenance with approximately 70 service contracts in Lae area",
    "Booking for shuttle buses / taxi cabs",
    "Car rental services",
    "Hotel bookings"
]


 
router.post('/', async (req, res) => {  

    try { 
        const _JET = new JET({
            title: 'Jeet Smart Travel Services',
            logo: 'http://localhost:5000/divisions/NKW_Logos_JetSmart.png',
            contact: {
                phone_a: '472 516',
                phone_b: '3268 2033',
                email: 'contact@nkwgroup.com.pg'
            },
            context: { 
                p: [p_a, p_b, p_c, p_d],
                subtitle: subtitle,
                sub_li_a: sub_li_a
            }
        
        });
        await _JET.save();
        const _JET_res = await JET.find();
        res.json(_JET_res);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('SERVER ERROR');
    }
     
})


router.get('/', async (req, res) => {
    try { 
        const _JET_res =  await  JET.find();
        res.json(_JET_res); 
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});




router.delete('/:id', async (req, res) => {   

    try {
        const _JET_res = await JET.findById(req.params.id);

        if (!_JET_res) {
            return res.status(404).json({msg: 'can not found in Explore'});
        }
        await JET.findByIdAndRemove(req.params.id);

        res.json({msg: 'remvoed from Explore landing'});

    } catch (err) { 
        console.error(err.message);
        res.status(500).send('Serve ERROR');
    }

   

});



module.exports = router;



