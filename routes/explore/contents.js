const express = require('express');
const Contents = require('../../models/Explore/Contents');
const router = express.Router();


//Create  a  page

router.post('/' , async (req, res) => {
    const {text_contents} = req.body;
    try {
        const newContent = new Contents({
            text_contents: text_contents
        });
        await newContent.save();
        const contents_res = await Contents.find();
        res.json(contents_res);

    } catch  (err)
    {   
        console.log(err.message);
        res.status(500). send('SERVER ERROR');
    }

  
});

// router.post('/', async (req, res) => { 
//     try {
//         const newPost = new Post({
//             content: req.body.content
//         });
//         await newPost.save();
//         const creatDisvision_res = await DisvisionsPages.findOne({page_title: 'NEW PAGE IMAGES ref'}).populate('content');
//         res.json(creatDisvision_res);

//     } catch  (err)
//     {   
//         console.log(err.message);
//         res.status(500). send('SERVER ERROR');
//     }
// })

// Create new Text data, imges
// router.post('/:id', async (req, res) => { 
//     const req_id = req.params.id;
//     try {
//         const createDisvision_res  =  await DisvisionsPages.findByIdAndUpdate(
//             {_id: req_id},
//             {$push: { page_text: req.body.page_text, page_imgs: req.body.page_imgs}},
//             {new: true}

//         )

//         res.json(createDisvision_res);

//     } catch (err) {
//         console.log(err.message);
//         res.status(500).send('SERVER ERROR');
//     }
// })

// router.post('/:id', async (req, res) => { 
//     const req_id = req.params.id;
//     try {
//         const createDisvision_res  =  await DisvisionsPages.findByIdAndUpdate(
//             {_id: req_id},
//             {$push: { page_imgs: req.body.page_imgs}},
//             {new: true}

//         )

//         res.json(createDisvision_res);

//     } catch (err) {
//         console.log(err.message);
//         res.status(500).send('SERVER ERROR');
//     }
// })




module.exports = router;



