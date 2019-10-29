const  express = require('express');
const  NKWfresh = require('../../../models/Explore/DisvisionsDetails/nkw_fresh');
const  router = express.Router();


router.post('/', async (req, res) => {  

    try { 
        const nkw_fresh = new NKWfresh({
            title: 'NKW Fresh',
            logo: 'http://localhost:5000/divisions/NKW_Logos_NKWFresh.png',
            imgs: [
                'http://localhost:5000/divisions/peter-wendt--r5KSMkyoSc-unsplash.jpg',
                'http://localhost:5000/divisions/massimiliano-martini-IeEFsajuORc-unsplash.jpg'
            ],
            content:[
               'As part of a diversification program and with long term goals, the company in 2014 established NKW Fresh, a fresh produce buying company. New Zealand’s Ministry of Foreign Affairs and Trade (MFAT) assisted NKW in the setup of NKW Fresh in a successful and ongoing partnership.',
               'NKW Fresh sources fresh produce from local smallholder vegetable farmers, creating a logistics chain for rural farmers that allows their produce access to markets throughout PNG. NKW Fresh utilises cold storage facilities in both Wau and Lae, allowing distribution of quality product to other markets, including supermarkets and catering companies. NKW has established a positive relationship with local farmers, dealing directly with these smallholders rather than traders, making NKW Fresh the largest buyer in the local fresh food business, buying over 60 metric tonnes of fresh produce from farmers each month.',
               'NKW Fresh is currently experiencing rapid growth through the supply of fresh produce to NKW Manus Operations – providing a consistent supply to the Island. This has allowed the expansion of supply of bulk produce to other retailers (Seeto Kui, Andersons Foodland, etc.) and high-end hotels & clubs (Lae International Hotel, Lae Yacht Club and Stanley Hotel in Port Moresby)',
               'Through a new partnership with Market Development Facility (MDF) an initiative of the Australian Department of Foreign Affairs and Trade), NKW Fresh is working with farmers to fulfil the increasing demand for temperate vegetables in the extractive industries and in urban areas in Papua New Guinea. NKW Fresh is doing this by educating and developing farming communities on improved crop planning and cultivation practices to provide a quality, consistent product. NKW Fresh are also providing seeds & technical advice for potential crops that are currently imported and make these available to farmers to diversify their produce.',
               'MDF is assisting NKW strengthen the supply chain by developing a supplier farmer database that will assist to identify and track farmers progress and build the capacity of field officers who will support farmers with crop planning.',
               'It is estimated, approximately 700 farmers are expected to benefit from this partnership, and importantly with the potential to gradually increase women farmers’ independence and make them less vulnerable because of direct contact with the buyer.',
               'A major innovation under this partnership is the use of mobile technology by the field officers for crop planning. Each field officer will have a smart phone loaded with newly designed crop management software to record the 100-150 farmers that they support enabling them to plan harvests to meet demand. This partnership falls under the Rural Input Services engagement area.',
               'A major innovation under this partnership is the use of mobile technology by the field officers for crop planning. Each field officer will have a smart phone loaded with newly designed crop management software to record the 100-150 farmers that they support enabling them to plan harvests to meet demand. This partnership falls under the Rural Input Services engagement area.',
               'Contact Us to arrange purchasing your local PNG fresh produce'
            ],
            contact: [
               {
                 phone_a: '54275161',
                 phone_b: '732682033',
                 email: 'contact@nkwgroup.com.pg'

               }
            ]
        });
        await nkw_fresh.save();
        const nkw_fresh_all = await NKWfresh.find();
        res.json(nkw_fresh_all);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('SERVER ERROR');
    }
     
})


router.get('/', async (req, res) => {
    try { 
        const nkw_fresh =  await  NKWfresh.find();
        res.json(nkw_fresh); 
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});




router.delete('/:id', async (req, res) => {   

    try {
        const nkw_fresh = await NKWfresh.findById(req.params.id);

        if (!nkw_fresh) {
            return res.status(404).json({msg: 'can not found in Explore'});
        }
        await NKWfresh.findByIdAndRemove(req.params.id);

        res.json({msg: 'remvoed from Explore landing'});

    } catch (err) { 
        console.error(err.message);
        res.status(500).send('Serve ERROR');
    }

   

});



module.exports = router;



