

let p = [
    `NKW Logistics Services is a integrated freight transport, warehousing and distribution
     service provider. Working in partnership with our business associates we strive to achieve the
     best delivery times for our clients.
    `,
    
    `Commenced 2007 to operate as a freight transport, equipment hires service and associated 
     activities to the Hidden Valley Mine.
    `,
    `NKW holds a contract with MCG to provide Bus Transportation services.`,
    `Year-round high rainfall causing washouts, 2300m elevation, limited infrastructure`,
    `Operating under the brand 'Mine Spec NKW offer commercial services to the mining industry. 
     We have been providing tailored service solutions to our customers since 2004 under this brand. 
     Mine Spec understand that customers are the core of customer service plus the benefits of competitive and 
     reliable service options throughout the region.
    ` 
];

let sub_title = [
    `Our key areas of service include:`,
    `Divisions associated with Logistics & Transport`,
    `Hidden Valley Transport & Logistics`,
    `NKW Bus Transport services`,
    `SERVICES PROVIDED`,
    `CHALLENGES`,
    `FLEET`,
    `NKW Industrial Project Services`
]

let li_all = [
    `Freight or equipoment and supplies`,
    `Shipping of food and domestic items`,
    `Provision of truck and related resources, throughout Papoua New Guinea`,
    `Provide reliable transportation services for MCG personnel, including the provision of drivers,
     maintenance and bus management. Buses run Bulolo to Site and return (up until 2017 buses running
     to Lae)
    `,
    `In addition, NKW are required to provide vehicles that are suitable to transport personnel from the 
     main camp to various locations within the mine site and within the mine pit
    `,
    `Brahman Traveller AWD 29 seat bus x 9`,
    `Iveco Eurocargo ML 29 seat bus x 4`,
    `Mitsubishi Rosa 29 seat bus x 11`,
    `NB: Whilst this contract expired on 31/1/2018, NKW continues to provide the service with
     discussions ongoing between MCG and NKW
    `
];



const LogistTransport = {

    title: 'Logistics & Transport',
    logos: [
        "http://localhost:5000/divisions/NKW_Logos_HiddenValley.png",
        "http://localhost:5000/divisions/NKW_Logos_PCS.png",
        "http://localhost:5000/divisions/NKW_Logos_PCV.png"
    ],
    imgs: [ 
        "http://localhost:5000/divisions/NKW_Logos_HiddenValley.png"
    ],
    context: {
        p: p,
        sub_title: sub_title,
        li_all: li_all,

    }



};

module.exports = LogistTransport;

