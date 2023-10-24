import {writable} from "svelte/store";
import type { NavigationRoutes, SEOinternalTypes, InternalSearchModel,NavStore, DynamicRoute, UnitsTypes, ChatTypes } from "./types";

import headBanner from "$lib/Images/Location/HeadOffice/officeBanner.webp";
import antipoloBanner from "$lib/Images/Location/AntipoloOffice/antipoloBanner.webp";
import bulacanBanner from "$lib/Images/Location/BulacanOffice/bulacanBanner.webp";
import caviteBanner from "$lib/Images/Location/CaviteOffice/caviteBanner.webp";
import paranaqueBanner from "$lib/Images/Location/ParanaqueOffice/paranaqueBanner.webp";
import pasigBanner from "$lib/Images/Location/PasigOffice/pasigBanner.webp";
import type { User } from "@supabase/supabase-js";


// navigation
export const navigation = writable<NavStore>({
    location:<NavigationRoutes[]> [
        {title: "Head Office", url: "/Location/Head-Office", index: 0},
        /* {title: "Antipolo Marketing Office", url: "/Location/Antipolo-Marketing-Office", index: 1},
        {title: "Bulacan Marketing Office", url: "/Location/Bulacan-Marketing-Office", index: 2},
        {title: "Cavite Marketing Office", url: "/Location/Cavite-Marketing-Office", index: 3},
        {title: "Parañaque Marketing Office", url: "/Location/Paranaque-Marketing-Office", index: 4},
        {title: "Pasig Marketing Office", url: "/Location/Pasig-Marketing-Office", index: 5}, */
    ],

    loan: <NavigationRoutes[]> [
        {title: "Sangla ORCR", url: "/Loan/Sangla-ORCR", index: 0},
        {title: "Repossessed Units", url: "/Loan/Repossessed-Units", index: 1},
    ],

    talkWithUs: <NavigationRoutes[]> [
        {title: "Login", url: "/TalkWithUs/Login", index: 0},
    ]
});


//Data of website itself for internal SEO
export const interlnalSEO: SEOinternalTypes[] = [
    {
        id: 0,
        title: "ANNAPOLIS FINANCE - HOME PAGE",
        content: "Need Cash?, Loan now with your OR/CR, we offer low-interest rates with the best terms, Maasahan sa pangangaylangan, About Us? Annapolis offers a cash loan using your ORCR as collateral with low interest rate, higher appraisal value and flexible terms. Mission? To bridge the gap to the financially unserved by providing comprehensive and innovative financial services., inquire now",
        display: "Maasahan sa pangangaylangan. Annapolis offers a cash loan using your ORCR as collateral with low interest rate, higher appraisal value and flexible terms. To bridge the gap to the financially unserved by providing comprehensive and innovative financial services.",
        url: "/",
    },

    {
        id: 1,
        title: "ANNAPOLIS FINANCE - CAREER",
        content: "Be our loan agent, Join now! and earn more than 50K per month, ",
        display: "Be our loan agent, Join now! and earn more than 50K per month!",
        url: "/Career",
    },

    {
        id: 2,
        title: "ANNAPOLIS FINANCE - JOIN THE TEAM",
        content: "Desription, ✔ Work Anytime Anywhere, ✔ No Qualifications, ✔ With free orientation, ✔ With additional incetive, Contact, email, mainannapolisfinance@gmail.com, Contact No:, 09159592858 / 09564280526, Job Locations, Unit 1508, 15th Floor, Jollibee Plaza Condominium, Junior Rd., Ortigas, Pasig City, Step 1, Fill up this Agent Accreditation Form using Google Form. Step 2, Download the Application form and fill up the form. Step 3, Upload the Application form (accepted file format pdf, jpg, png) I agree with the Terms and Conditions of Annapolis Finance Incorporation I accept the Privacy Policy of Annapolis Finance Incorporation",
        display: "✔ Work Anytime Anywhere, ✔ No Qualifications, ✔ With free orientation, ✔ With additional incetive, Contact, email, mainannapolisfinance@gmail.com, Contact No:, 09159592858 / 09564280526, Job Locations, Unit 1508, 15th Floor, Jollibee Plaza Condominium, Junior Rd., Ortigas, Pasig City.",
        url: "/Career/Loan-Agent-Career",
    },

    {
        id: 3,
        title: "ANNAPOLIS FINANCE - INQUIRE NOW",
        content: "Step 1, Download the form and fill it up. Click here to download, Step 2, Choose one:, Employed(private corporation), Business(1 year existing business ), Remittance, Allotment, Rider, First Name, Middle Name, Last Name, Address, Mobile Number, Email, Choose one: Sangla ORCR motorcycle, Sangla orcr tricycle, Sangla orcr bigbike, Finance appliances, finance iphone/samsung, Step 3, Choose a file, Upload the Application form (accepted file format pdf, jpg, png), I agree with the Terms and Conditions of Annapolis Finance Incorporation, I accept the Privacy Policy of Annapolis Finance Incorporation",
        display: "Be part of our team apply now!",
        url: "/Inquire-now"
    },

    {
        id: 4,
        title: "ANNAPOLIS FINANCE - HEAD OFFICE",
        content: "Location / Head Office, Annapolis Finance Inc Head Office Branch, Head Office Branch, Jollibee Plaza Condomonium 15th floor unit 1508 Emerald Ave. Ortigas Pasig City, 09159592858, Head Office Branch Facebook Page, mainannapolisfinance@gmail.com, WANT TO KNOW WHEN WE GOT NEWS ON OUR LATEST PRODUCT? SIGN UP FOR OUR NEWSLETTER NOW!, First Name, Middle Name, Last Name, Address, Mobile Number, Email, I agree with the Terms and Conditions of Annapolis Finance Incorporation, I accept the Privacy Policy of Annapolis Finance Incorporation",
        display: "Jollibee Plaza Condomonium 15th floor unit 1508 Emerald Ave. Ortigas Pasig City.",
        url: "/Location/Head-Office",
    },

   /*  {
        id: 5,
        title: "ANNAPOLIS FINANCE - ANTIPOLO MARKETING OFFICE",
        content: "Location / Antipolo Marketing Office, Annapolis Finance Inc Antipolo Branch, MLQ extension,Brgy Dalig, Antipolo City Landmark: Rica Hardware., 09159592861, Antipolo Branch Facebook Page, afiantipolo@gmail.com, Antipolo Branch, WANT TO KNOW WHEN WE GOT NEWS ON OUR LATEST PRODUCT? SIGN UP FOR OUR NEWSLETTER NOW!, First Name, Middle Name, Last Name, Address, Mobile Number, Email, I agree with the Terms and Conditions of Annapolis Finance Incorporation, I accept the Privacy Policy of Annapolis Finance Incorporation",
        display: "MLQ extension,Brgy Dalig, Antipolo City Landmark: Rica Hardware.",
        url: "/Location/Antipolo-Marketing-Office",
    },

    {
        id: 6,
        title: "ANNAPOLIS FINANCE - BULACAN MARKETING OFFICE",
        content: "Location / Bulacan Marketing Office, Annapolis Finance Inc Bulacan Branch, 2nd floor Lacis Bldg. Meycauayan Bualacan Landmark: Petra and Pepita Salon Meycauayan., 09265300934, Bulacan Branch Facebook Page, annapolisfinancebulacan@gmail.com, WANT TO KNOW WHEN WE GOT NEWS ON OUR LATEST PRODUCT? SIGN UP FOR OUR NEWSLETTER NOW!, First Name, Middle Name, Last Name, Address, Mobile Number, Email, I agree with the Terms and Conditions of Annapolis Finance Incorporation, I accept the Privacy Policy of Annapolis Finance Incorporation",
        display: "2nd floor Lacis Bldg. Meycauayan Bualacan Landmark: Petra and Pepita Salon Meycauayan.",
        url: "/Location/Bulacan-Marketing-Office",
    },

    {
        id: 7,
        title: "ANNAPOLIS FINANCE - CAVITE MARKETING OFFICE",
        content: "Location / Cavite Marketing Office, Annapolis Finance Inc Cavite Branch, Unit 2D 2nd floor, 2F FOXGLOVE HOLDINGS INC, 275 Gen. Aguinaldo Highway, Sampaloc 1, Dasmarinas City, Cavite., 09665546543, Cavite Branch Facebook Page, annapolisfinancecavitebranch@gmail.com, WANT TO KNOW WHEN WE GOT NEWS ON OUR LATEST PRODUCT? SIGN UP FOR OUR NEWSLETTER NOW!, Cavite Branch, First Name, Middle Name, Last Name, Address, Mobile Number, Email, I agree with the Terms and Conditions of Annapolis Finance Incorporation, I accept the Privacy Policy of Annapolis Finance Incorporation",
        display: "Cavite Branch, Unit 2D 2nd floor, 2F FOXGLOVE HOLDINGS INC, 275 Gen. Aguinaldo Highway, Sampaloc 1, Dasmarinas City, Cavite.",
        url: "/Location/Cavite-Marketing-Office",
    },

    {
        id: 8,
        title: "ANNAPOLIS FINANCE - PARANAQUE MARKETING OFFICE",
        content: "Location / Parañaque Marketing Office., Annapolis Finance Inc Parañaque Branch, 2nd Floor 126 Doña Soledad Ave., Better Living Subd,. Barangay Don Bosco, Parañaque City,09665546541,Parañaque Branch Facebook Page, annapolisfinance.paranaque2022@gmail.com, WANT TO KNOW WHEN WE GOT NEWS ON OUR LATEST PRODUCT? SIGN UP FOR OUR NEWSLETTER NOW!, Parañaque Branch, First Name, Middle Name, Last Name, Address, Mobile Number, Email, I agree with the Terms and Conditions of Annapolis Finance Incorporation, I accept the Privacy Policy of Annapolis Finance Incorporation ",
        display: "2nd Floor 126 Doña Soledad Ave., Better Living Subd,. Barangay Don Bosco, Parañaque City",
        url: "/Location/Paranaque-Marketing-Office",

    },

    {
        id: 9,
        title: "ANNAPOLIS FINANCE - PASIG MARKETING OFFICE",
        content: "Annapolis Finance Inc Pasig Branch, Unit 9, 2nd Flr Discovery Building, Lifehomes, Ortigas Extension, Pasig City Landmark: Beside of Lucky Gold Plaza Bldg., 09685830744 / 09151529787, Pasig Branch Facebook Page, annapolislifehomes@gmail.com, WANT TO KNOW WHEN WE GOT NEWS ON OUR LATEST PRODUCT? SIGN UP FOR OUR NEWSLETTER NOW!, Pasig Branch, First Name, Middle Name, Last Name, Address, Mobile Number, Email, I agree with the Terms and Conditions of Annapolis Finance Incorporation, I accept the Privacy Policy of Annapolis Finance Incorporation",
        display: "2nd Flr Discovery Building, Lifehomes, Ortigas Extension, Pasig City Landmark: Beside of Lucky Gold Plaza Bldg.",
        url: "/Location/Pasig-Marketing-Office",
        
    }, */

    {
        id: 10,
        title: "Sangla ORCR",
        content: "ORCR Loans, ORCR Loans are protected by an asset or property of value pledged by a borrower in exchange for a loan. These loans are most commonly used for car registrations and land titles., Motorcycle (Sangla OR/CR) No Hassle Cash Loan! Magpasa ka lang ng complete requirements sa Facebook Messenger pwede na mag apply!✔ 2015 and up to latest model are accepted✔ Original OR CR ✔ 2 valid ID's ✔ Latest Electricity or Water billing ✔ Latest 2months Proof of income, Tricycle (Sangla OR/CR), Malapit na ang Due date ng bills? You can borrow money to meet your financial needs! SANGLA OR CR ng Motor Hindi kukunin ang unit!, ✔ Pwede Online Application, ✔ Pwede mag walk in sa branch, ✔ Mababang interes, ✔ Approve agad basta kumpleto ang requirements!, ✔ 1-3 days process",
        display: "ORCR Loans are protected by an asset or property of value pledged by a borrower in exchange for a loan. These loans are most commonly used for car registrations and land titles., Motorcycle (Sangla OR/CR) No Hassle Cash Loan! Magpasa ka lang ng complete requirements sa Facebook Messenger pwede na mag apply!✔ 2015 and up to latest model are accepted✔ Original OR CR ✔ 2 valid ID's ✔ Latest Electricity or Water billing ✔ Latest 2months Proof of income, Tricycle (Sangla OR/CR), Malapit na ang Due date ng bills? You can borrow money to meet your financial needs! SANGLA OR CR ng Motor Hindi kukunin ang unit!, ✔ Pwede Online Application, ✔ Pwede mag walk in sa branch, ✔ Mababang interes, ✔ Approve agad basta kumpleto ang requirements!",
        url: "/Loan/Sangla-ORCR",
        
    },

    {
        id: 10,
        title: "Repossessed Units",
        content: "/RepossessedUnits",
        display: "ORCR Loans are protected by an asset or property of value pledged by a borrower in exchange for a loan. These loans are most commonly used for car registrations and land titles.",
        url: "/Loan/Repossessed-Units",
    },



]

//For internal search engine about website itself for faster navigation if the user is lazy :D

export const createSearchStore = <T extends Record<PropertyKey, any>>(data: T[]) =>
{
    const {set, update, subscribe} = writable<InternalSearchModel<T>>({
        data: data,
        filtered: data,
        search: "",
    })

    return {
        set,
        update,
        subscribe,
    }
}

export const searchHandler = <T extends Record<PropertyKey, any>>(store: InternalSearchModel<T>) =>
{
    const searchTerm = store.search.toLowerCase() || "";
    store.filtered = store.data.filter( (item) => {
        return item.searchPattern.toLowerCase().includes(searchTerm);
    })

}

export const statics = writable({
    showSearch: false,
    navActiveItem: "/",

    promptAdvisory: true,

    locationRoutes:<DynamicRoute[]> [
        //** Head Office */
        {
            rowOne: {
                header: "Location / Head Office",
                image: headBanner,
                mapPosition: {
                    latitude: 14.58781,
                    longitutde: 121.06131,
                }
            },

            rowTwo: {
                innerRowOne: {
                    header: "Annapolis Finance Inc Head Office Branch",
                    address: {
                        name: "Jollibee Plaza Condomonium 15th floor unit 1508 Emerald Ave. Ortigas Pasig City.",
                        link: "https://www.google.com/maps/place/Jollibee+Plaza+Condominium/@14.5877198,121.0589665,17z/data=!3m1!4b1!4m6!3m5!1s0x3397c817310d4013:0xdaa0f4fb262d8fa6!8m2!3d14.5877198!4d121.0615414!16s%2Fg%2F11c16d9zx6?entry=ttu"
                    },
                    mobileNum: "09159592858",
                    facebook: {
                        name: "Head Office Branch Facebook Page",
                        link: "https://www.facebook.com/ishoppaylater/"
                    },
                    gmail: "mainannapolisfinance@gmail.com",
                    email: "",
                    emailHandler: () => {},
                },

                innerRowTwo: {
                    header: "Head Office Branch",
                    chooseOne: "",
                    name: "",
                    mobileNum: "",
                    email: "",
                    message: "",
                    submitHandler: () => {},
                }
            }
        },
        //** Antipolo Office */
        {
            rowOne: {
                header: "Location / Antipolo Marketing Office",
                image: antipoloBanner,
                mapPosition: {
                    latitude: 14.56371,
                    longitutde: 121.18469,
                }
            },

            rowTwo: {
                innerRowOne: {
                    header: "Annapolis Finance Inc Antipolo Branch",
                    address: {
                        name: "MLQ extension,Brgy Dalig, Antipolo City Landmark: Rica Hardware.",
                        link: "https://www.google.com/maps/place/rica+hardware+builders+supply+corp./@14.5837705,120.8954289,11z/data=!4m10!1m2!2m1!1sMLQ+extension,Brgy+Dalig,+Antipolo+City+Landmark:+Rica+Hardware!3m6!1s0x3397b99538324119:0x1f514f5ac79352f9!8m2!3d14.6225394!4d121.1124338!15sCj9NTFEgZXh0ZW5zaW9uLEJyZ3kgRGFsaWcsIEFudGlwb2xvIENpdHkgTGFuZG1hcms6IFJpY2EgSGFyZHdhcmWSARJhZ2dyZWdhdGVfc3VwcGxpZXLgAQA!16s%2Fg%2F11kjg39dzk?entry=ttu"
                    },
                    mobileNum: "09159592861",
                    facebook: {
                        name: "Antipolo Branch Facebook Page",
                        link: "https://www.facebook.com/AnnapolisAntipolo"
                    },
                    gmail: "afiantipolo@gmail.com",
                    email: "",
                    emailHandler: () => {},
                },

                innerRowTwo: {
                    header: "Antipolo Branch",
                    chooseOne: "",
                    name: "",
                    mobileNum: "",
                    email: "",
                    message: "",
                    submitHandler: () => {},
                }
            }
        },
        //** Bulacan Office */
        {
            rowOne: {
                header: "Location / Bulacan Marketing Office",
                image: bulacanBanner,
                mapPosition: {
                    latitude: 14.735593899364904,
                    longitutde: 120.96130135276128,
                }
            },

            rowTwo: {
                innerRowOne: {
                    header: "Annapolis Finance Inc Bulacan Branch",
                    address: {
                        name: "2nd floor Lacis Bldg. Meycauayan Bualacan Landmark: Petra and Pepita Salon Meycauayan.",
                        link: "https://www.google.com/maps/@14.7356342,120.9613068,3a,75y,54.08h,96.33t/data=!3m6!1e1!3m4!1skIuKYAGjgrEIYB8dWKjr2g!2e0!7i16384!8i8192?entry=ttu"
                    },
                    mobileNum: "09265300934",
                    facebook: {
                        name: "Bulacan Branch Facebook Page",
                        link: "https://www.facebook.com/AnnapolisBulTacan"
                    },
                    gmail: "annapolisfinancebulacan@gmail.com",
                    email: "",
                    emailHandler: () => {},
                },

                innerRowTwo: {
                    header: "Bulacan Branch",
                    chooseOne: "",
                    name: "",
                    mobileNum: "",
                    email: "",
                    message: "",
                    submitHandler: () => {},
                }
            }
        },
        //** Cavite Office */
        {
            rowOne: {
                header: "Location / Cavite Marketing Office",
                image: caviteBanner,
                mapPosition: {
                    latitude: 14.297817171211657,
                    longitutde: 120.95584102619205,
                }
            },

            rowTwo: {
                innerRowOne: {
                    header: "Annapolis Finance Inc Cavite Branch",
                    address: {
                        name: "Unit 2D 2nd floor, 2F FOXGLOVE HOLDINGS INC, 275 Gen. Aguinaldo Highway, Sampaloc 1, Dasmarinas City, Cavite.",
                        link: "https://www.google.com/maps/@14.2977449,120.9556656,3a,75y,61.39h,90t/data=!3m7!1e1!3m5!1suYjBOHdEsrS2tbTWIFbBHA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DuYjBOHdEsrS2tbTWIFbBHA%26cb_client%3Dsearch.gws-prod.gps%26w%3D86%26h%3D86%26yaw%3D61.389668%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192?hl=en-US&entry=ttu"
                    },
                    mobileNum: "09665546543",
                    facebook: {
                        name: "Cavite Branch Facebook Page",
                        link: "https://www.facebook.com/AnnapolisCavite"
                    },
                    gmail: "annapolisfinancecavitebranch@gmail.com",
                    email: "",
                    emailHandler: () => {},
                },

                innerRowTwo: {
                    header: "Cavite Branch",
                    chooseOne: "",
                    name: "",
                    mobileNum: "",
                    email: "",
                    message: "",
                    submitHandler: () => {},
                }
            }
        },
        //** Parañaque Office */
        {
            rowOne: {
                header: "Location / Parañaque Marketing Office",
                image: paranaqueBanner,
                mapPosition: {
                    latitude: 14.484387675379828,
                    longitutde: 121.03111465892934,
                }
            },

            rowTwo: {
                innerRowOne: {
                    header: "Annapolis Finance Inc Parañaque Branch",
                    address: {
                        name: "2nd Floor 126 Doña Soledad Ave., Better Living Subd,. Barangay Don Bosco, Parañaque City",
                        link: "https://www.google.com/maps/dir//126+Do%C3%B1a+Soledad+Ave+Better+Living+Subd,+Bicutan,+Para%C3%B1aque+City,+Metro+Manila/@14.484262,121.031221,21z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3397cefe78f35227:0x65080b8cea7a03b7!2m2!1d121.031156!2d14.484298?entry=ttu"
                    },
                    mobileNum: "09665546541",
                    facebook: {
                        name: "Parañaque Branch Facebook Page",
                        link: "https://www.facebook.com/Annapfinanceincparanaque"
                    },
                    gmail: "annapolisfinance.paranaque2022@gmail.com",
                    email: "",
                    emailHandler: () => {},
                },

                innerRowTwo: {
                    header: "Parañaque Branch",
                    chooseOne: "",
                    name: "",
                    mobileNum: "",
                    email: "",
                    message: "",
                    submitHandler: () => {},
                }
            }
        },
        //** Pasig Office */
        {
            rowOne: {
                header: "Location / Pasig Marketing Office",
                image: pasigBanner,
                mapPosition: {
                    latitude: 14.590149973391368,
                    longitutde: 121.09475632948188,
                }
            },

            rowTwo: {
                innerRowOne: {
                    header: "Annapolis Finance Inc Pasig Branch",
                    address: {
                        name: "Unit 9, 2nd Flr Discovery Building, Lifehomes, Ortigas Extension, Pasig City Landmark: Beside of Lucky Gold Plaza Bldg.",
                        link: "https://www.google.com/maps/@14.5900342,121.094757,3a,75y,35.42h,91.16t/data=!3m7!1e1!3m5!1sts8qEppXQur9idi_ZtW8_w!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3Dts8qEppXQur9idi_ZtW8_w%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D315.7389%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192?hl=en-US&entry=ttu"
                    },
                    mobileNum: "09685830744 / 09151529787",
                    facebook: {
                        name: "Pasig Branch Facebook Page",
                        link: "https://www.facebook.com/AnnapolisPasiglifehomes"
                    },
                    gmail: "annapolislifehomes@gmail.com",
                    email: "",
                    emailHandler: () => {},
                },

                innerRowTwo: {
                    header: "Pasig Branch",
                    chooseOne: "",
                    name: "",
                    mobileNum: "",
                    email: "",
                    message: "",
                    submitHandler: () => {},
                }
            }
        },

       

    ],
    locComparison: 0.1,
    showMenuMobile: false,

    unitsArray:<UnitsTypes[]> [],
})

export const authenticated = writable({
    chatsArray:<ChatTypes[]> [],
    userObject:<User | undefined> {},
})