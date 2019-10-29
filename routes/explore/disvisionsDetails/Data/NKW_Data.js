
let  p_a = `

NkW Building & Construction Services offer 
comprehensive solutions. A locally-based company
servicing Papua New Guinea, NKW Group deliver fit  for
purpose  services, within budget and on schedule. we
build accommodation facilities for mining townships and 
medium to large corporate companies throughout Papua New Guinea.
Materials and labour area sourced locally and internationally.
Throught our joint venture companies, we offer road construction,
maintenance and equipment hire.

`;


let p_b = `Contact Us to benefit from our comprehensive range of 
building, construction, mining campsite and infrastructure service.
`;


let sub_title = [ 
    "Complete construction Service",
    "Remote Site Operations:",
    "Experience in Camp Construction and Catering:"
];

let li_a = [
    "New, renovate or rebuild",
    "Warehouses, camp accommodation, offices, houses adn Civil Works",
    "Equipment Hire",
    "Maintenance and camp management",
    "Project management and labour hire"
];

let li_b = [
    "Manus: 1 x 1,000 man camp",
    "1 x 300 Man Camp",
    "1 x 70 Man Camp",
    "Lae: Service Provider to the WAFI Project at 11 mile",
    "Catering and Housekeeping",
    "Facilities (Office for 80 personal)"
];


let li_c = [`
    NKW Group have been building camps in Papua New Guinea for 
    over 5 years. We know the terrain and the culture and have
    our own CA team to ensure land Owners are given direct attention
    before issues escalate, as we know they can.
`];

const nkwBuildingDatas = {
    title: 'NKW Building & Construction',
    logo: 'http://localhost:5000/divisions/NKW_Logos_NKWConstruction.png',
    contact:  {
        phone_a: '+675 472 5161',
        phone_b: '+617 3268 2033',
        email: 'contact@nkwgroup.com.pg'
    },
    context: {
        p: {
            p_a,
            p_b
        },
        sub_title,
        sub_lists: { 
            li_a,
            li_b,
            li_c
        }
    }

}

module.exports = nkwBuildingDatas;