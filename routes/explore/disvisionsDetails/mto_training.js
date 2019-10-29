const  express = require('express');
const  MTOTraining = require('../../../models/Explore/DisvisionsDetails/mto_training');
const  router = express.Router();



var p_a=`MTO Training PNG provides training and assessment
activities in Papua New Guinea, including a wide range of dioplomas,
certificates, training courses and more. MTO Training PNG is the preferred
training provider for many industry sectors in PNG.
`;


var p_b=`MTO trainers have extensive experience and are sensitive 
to cultural diversity and comfortable with training and assessment in
remote locations. MTO Training PNG specialises in prompt response to a client's 
service request and provide free advice on training and deucation. 
Industry client receive tailored courses to meet their exact needs.
`;

var p_c = `
MTO Training PNG maintains constant liaison with the National Training Council of PNG
to ensure our courses are of the highest standards.
`;

var sub_title_a = `COURSE CATEGORIES`;

var sub_title_b = `SERVICES OFFERED`;

var  li_a = [
    'Construction & mining',
    'Forestry',
    'Agriculture & Horticulture',
    'Workplace Health & Safety'
];

var li_b = [
    'Management & Business',
    'Safety & Quality Systems',
    'Traiing & Assessment',
    'Handing & Loadmaster'
   
];

var li_c = [
    'Transport  & Logistics',
    'Conservation & Land',
    'First Aid',
    'Project Management'
];


var li_d = [ 
    'Forestry, Environment, Conservation & Land Management',
    'Rural, farm management, general farming, equipment operations & OHS in Rural operations',
    'Carbon sequestration, Sink Management, Accounting, Carbon Management Reporting & Manage sustainability in the workpace',
    'Community Development, Land use and Care',
    'Risk Management and Security',
    'Business Management and Education',
    'Work Health and Safety',
    'Health and Medical Response'
];


router.post('/', async (req, res) => {  

    try { 
        const _MTOTraining = new MTOTraining({
            title: 'MTO Training PNG',
            logo: 'http://localhost:5000/divisions/NKW_Logos_NKWTraining.png',
            contact: {
                phone_a: '+61 (0)438 954 481',
                phone_b: '+615 710 06 901',
                website: 'http://mtotrainingpng.com',
                email: 'ian@mtotrainingpng.com'
            },
            context: [
                p_a,
                p_b,
                p_c,
                sub_title_a,
                sub_title_b,
           
            ],
            li_a: li_a,
            li_b: li_b,
            li_c: li_c,
            li_d: li_d
        });
        await _MTOTraining.save();
        const _MTOTraining_res = await MTOTraining.find();
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



