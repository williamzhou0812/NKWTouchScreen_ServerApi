
let p = [
    `Since 2004, NKW Group have provided camp catering, camp administration and 
     accommodation cleaning, office cleaning, ground keeping and ancillary services to the
     Hidden Valley Mine.
    `
];


let sub_title = [

    `CAMP CATERING SNAPSHOT`,
    `Divisions associated with Cateritg`
];

let li_all = [
    `Hidden Valley: 4,600 meals a day for Harmony`,
    `Manus: 1,400 meals a day for th australian Government`,
    `Lae: 2,000 meals a day for various clients`,
    `Lae: 500 meals a day for Wafi Golpu JV`,
    `Meals: Supply 3 meals per day, 7 days per week to registered camp occupants numbering approx.
     2,600. Supplly casual meals to approved HVSL staff.
    `,
    `Camp Administration & Accommodation cleaning:`,
    `Clean kitchen after each sitting, including all plates, utensils, tables, floors, etc.`,
    `Manage Camp bookings for 953 accomodation rooms`,
    `Camp Laundry Sercice: Facilities a laundry service by issuing each occupant with a laundry bag to
     place clothes for washing, drying and ironing - 3 times per week with same day return.
    `,
    `Cleaning Services: Daily cleaning of the accommodation block, including each individual residential
     unit. Changing bed linen, towels, empty rubbish bins, laundry block, toilet block, etc.
    `,
    `Camp Office Cleaning: Maintain a clean, hygienic, neat and safe environment. Window cleaing, floors, 
     air conditioning, rubbish bins, etc.
    `,
    `Building Exteriors: Are washed down and cleaned 6-monthly.`,
    `Groundd Keeping: Mowing of lawns, weeding of garden beds.`
];



const NKWCatering = {

    title: 'NKW Catering', 
    logo: 'http://localhost:5000/divisions/NKW_Logos_NKWCatering.png',
    imgs: [
        "http://localhost:5000/exploreland/Catering_1.jpg",
        "http://localhost:5000/exploreland/Catering_2.jpg"
    ],
    context: {
        p: p,
        li_all: li_all,
        sub_title: sub_title
    }


};

module.exports = NKWCatering;