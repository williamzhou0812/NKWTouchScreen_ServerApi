

let p = [
`
NKW Fresh sources fresh produce from local smallhoulder vegetable farmers,
creating a logistics chain for rural farmaers that allows their produce access to
markets throughout PNG. NKW Fresh utilise cold storage facilitles in both Wau and Lae, 
allowing distribution of quality product to other markets, including supermarkets and cetering
companies.
`,
`
MKW has established a positive relationship with local farmers, dealing directly with these 
smallholders rather than trades, making NKW Fesh the largest buyer in the local fresh food
business, buying over 60 metric tonnes of fresh produce from farmers each month.
`
];


let sub_title = [
    `Divisions associated with NKW Fresh`
];




const NKW_Fresh = {
    
    title: 'NKW Fresh',
    logos: [
        "http://localhost:5000/divisions/NKW_Logos_NKWFresh.png",
        "http://localhost:5000/divisions/NKW_Logos_MountainCoffee.png"
    ],
    imgs: [`http://localhost:5000/exploreland/NKW_CategoryImages_Agriculture.png`],
    context: {
            p: p,
            sub_title: sub_title,
            li_all: []
        }
};
    


module.exports = NKW_Fresh;