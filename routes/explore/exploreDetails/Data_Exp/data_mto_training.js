


let p = [
`MTO Training PNG provides training and assessment activities in Papua New Guinea,
including a wide range fo diplomas, certificates, training courses and more. MTO Training PNG is 
the preferred training provider for many industry sectors in PNG.
`,

`
MTO trasiners have extensive expoerience and are sensitive to cultural diversity and comfortable
with training and assessment in remote location. MTO Training PNG specialises in prompt response to a
client's service request and provide free advice on training and education. Industry clients receive
tailored courses to meet their exact needs.
`,

`MTO Training PNG maintains constant liaison liaison with the National Training Council of PNG to ensure our
courses are of the highest standards.`
];


let sub_title  = [
`Divisions assosciated with Training Services`,
];



const MTO_Training =  {

    title: 'MTO Training',
    logo: 'http://localhost:5000/divisions/NKW_Logos_NKWTraining.png',
    imgs:[
        'http://localhost:5000/exploreland/NKW%20Category%20Images_Training.png'
    ],
    context: {
        p: p,
        sub_title: sub_title,
        li_all: []
    }

}

module.exports = MTO_Training;