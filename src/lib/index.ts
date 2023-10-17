import {writable} from "svelte/store";
import type { NavigationRoutes, SEOinternalTypes, InternalSearchModel,NavStore } from "./types";

// navigation
export const navigation = writable<NavStore>({
    location:<NavigationRoutes[]> [
        {title: "Head Office", url: "/Head-Office"},
        {title: "Antipolo Marketing Office", url: "/Location/Antipolo-Marketing-Office"},
        {title: "Bulacan Marketing Office", url: "/Location/Bulacan-Marketing-Office"},
        {title: "Cavite Marketing Office", url: "/Location/Cavite-Marketing-Office"},
        {title: "Parañaque Marketing Office", url: "/Location/Paranaque-Marketing-Office"},
        {title: "Pasig Marketing Office", url: "/Location/Pasig-Marketing-Office"},
    ],

    loan: <NavigationRoutes[]> [
        {title: "Sangla ORCR", url: "/Loan/Sangla-ORCR"},
        {title: "Repossessed Units", url: "/Loan/Repossessed-Units"},
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
        url: "/Career/LoanAgentCareer",
    },

    {
        id: 3,
        title: "ANNAPOLIS FINANCE - APPLY NOW",
        content: "Step 1, Download the form and fill it up. Click here to download, Step 2, Choose one:, Employed(private corporation), Business(1 year existing business ), Remittance, Allotment, Rider, First Name, Middle Name, Last Name, Address, Mobile Number, Email, Choose one: Sangla ORCR motorcycle, Sangla orcr tricycle, Sangla orcr bigbike, Finance appliances, finance iphone/samsung, Step 3, Choose a file, Upload the Application form (accepted file format pdf, jpg, png), I agree with the Terms and Conditions of Annapolis Finance Incorporation, I accept the Privacy Policy of Annapolis Finance Incorporation",
        display: "Be part of our team apply now!",
        url: "/InquireNow"
    },

    {
        id: 4,
        title: "ANNAPOLIS FINANCE - HEAD OFFICE",
        content: "Location / Head Office, Annapolis Finance Inc Head Office Branch, Head Office Branch, Jollibee Plaza Condomonium 15th floor unit 1508 Emerald Ave. Ortigas Pasig City, 09159592858, Head Office Branch Facebook Page, mainannapolisfinance@gmail.com, WANT TO KNOW WHEN WE GOT NEWS ON OUR LATEST PRODUCT? SIGN UP FOR OUR NEWSLETTER NOW!, First Name, Middle Name, Last Name, Address, Mobile Number, Email, I agree with the Terms and Conditions of Annapolis Finance Incorporation, I accept the Privacy Policy of Annapolis Finance Incorporation",
        display: "Jollibee Plaza Condomonium 15th floor unit 1508 Emerald Ave. Ortigas Pasig City.",
        url: "/Location/HeadOffice",
    },

    {
        id: 5,
        title: "ANNAPOLIS FINANCE - ANTIPOLO MARKETING OFFICE",
        content: "Location / Antipolo Marketing Office, Annapolis Finance Inc Antipolo Branch, MLQ extension,Brgy Dalig, Antipolo City Landmark: Rica Hardware., 09159592861, Antipolo Branch Facebook Page, afiantipolo@gmail.com, Antipolo Branch, WANT TO KNOW WHEN WE GOT NEWS ON OUR LATEST PRODUCT? SIGN UP FOR OUR NEWSLETTER NOW!, First Name, Middle Name, Last Name, Address, Mobile Number, Email, I agree with the Terms and Conditions of Annapolis Finance Incorporation, I accept the Privacy Policy of Annapolis Finance Incorporation",
        display: "MLQ extension,Brgy Dalig, Antipolo City Landmark: Rica Hardware.",
        url: "/Location/AntipoloMarketingOffice",
    },

    {
        id: 6,
        title: "ANNAPOLIS FINANCE - BULACAN MARKETING OFFICE",
        content: "Location / Bulacan Marketing Office, Annapolis Finance Inc Bulacan Branch, 2nd floor Lacis Bldg. Meycauayan Bualacan Landmark: Petra and Pepita Salon Meycauayan., 09265300934, Bulacan Branch Facebook Page, annapolisfinancebulacan@gmail.com, WANT TO KNOW WHEN WE GOT NEWS ON OUR LATEST PRODUCT? SIGN UP FOR OUR NEWSLETTER NOW!, First Name, Middle Name, Last Name, Address, Mobile Number, Email, I agree with the Terms and Conditions of Annapolis Finance Incorporation, I accept the Privacy Policy of Annapolis Finance Incorporation",
        display: "2nd floor Lacis Bldg. Meycauayan Bualacan Landmark: Petra and Pepita Salon Meycauayan.",
        url: "/Location/BulacanMarketingOffice",
    },

    {
        id: 7,
        title: "ANNAPOLIS FINANCE - CAVITE MARKETING OFFICE",
        content: "Location / Cavite Marketing Office, Annapolis Finance Inc Cavite Branch, Unit 2D 2nd floor, 2F FOXGLOVE HOLDINGS INC, 275 Gen. Aguinaldo Highway, Sampaloc 1, Dasmarinas City, Cavite., 09665546543, Cavite Branch Facebook Page, annapolisfinancecavitebranch@gmail.com, WANT TO KNOW WHEN WE GOT NEWS ON OUR LATEST PRODUCT? SIGN UP FOR OUR NEWSLETTER NOW!, Cavite Branch, First Name, Middle Name, Last Name, Address, Mobile Number, Email, I agree with the Terms and Conditions of Annapolis Finance Incorporation, I accept the Privacy Policy of Annapolis Finance Incorporation",
        display: "Cavite Branch, Unit 2D 2nd floor, 2F FOXGLOVE HOLDINGS INC, 275 Gen. Aguinaldo Highway, Sampaloc 1, Dasmarinas City, Cavite.",
        url: "/Location/CaviteMarketingOffice",
    },

    {
        id: 8,
        title: "ANNAPOLIS FINANCE - PARANAQUE MARKETING OFFICE",
        content: "Location / Parañaque Marketing Office., Annapolis Finance Inc Parañaque Branch, 2nd Floor 126 Doña Soledad Ave., Better Living Subd,. Barangay Don Bosco, Parañaque City,09665546541,Parañaque Branch Facebook Page, annapolisfinance.paranaque2022@gmail.com, WANT TO KNOW WHEN WE GOT NEWS ON OUR LATEST PRODUCT? SIGN UP FOR OUR NEWSLETTER NOW!, Parañaque Branch, First Name, Middle Name, Last Name, Address, Mobile Number, Email, I agree with the Terms and Conditions of Annapolis Finance Incorporation, I accept the Privacy Policy of Annapolis Finance Incorporation ",
        display: "2nd Floor 126 Doña Soledad Ave., Better Living Subd,. Barangay Don Bosco, Parañaque City",
        url: "/Location/ParanaqueMarketingOffice",

    },

    {
        id: 9,
        title: "ANNAPOLIS FINANCE - PASIG MARKETING OFFICE",
        content: "Annapolis Finance Inc Pasig Branch, Unit 9, 2nd Flr Discovery Building, Lifehomes, Ortigas Extension, Pasig City Landmark: Beside of Lucky Gold Plaza Bldg., 09685830744 / 09151529787, Pasig Branch Facebook Page, annapolislifehomes@gmail.com, WANT TO KNOW WHEN WE GOT NEWS ON OUR LATEST PRODUCT? SIGN UP FOR OUR NEWSLETTER NOW!, Pasig Branch, First Name, Middle Name, Last Name, Address, Mobile Number, Email, I agree with the Terms and Conditions of Annapolis Finance Incorporation, I accept the Privacy Policy of Annapolis Finance Incorporation",
        display: "2nd Flr Discovery Building, Lifehomes, Ortigas Extension, Pasig City Landmark: Beside of Lucky Gold Plaza Bldg.",
        url: "/Location/PasigMarketingOffice",
        
    },

    {
        id: 10,
        title: "Sangla ORCR",
        content: "ORCR Loans, ORCR Loans are protected by an asset or property of value pledged by a borrower in exchange for a loan. These loans are most commonly used for car registrations and land titles., Motorcycle (Sangla OR/CR) No Hassle Cash Loan! Magpasa ka lang ng complete requirements sa Facebook Messenger pwede na mag apply!✔ 2015 and up to latest model are accepted✔ Original OR CR ✔ 2 valid ID's ✔ Latest Electricity or Water billing ✔ Latest 2months Proof of income, Tricycle (Sangla OR/CR), Malapit na ang Due date ng bills? You can borrow money to meet your financial needs! SANGLA OR CR ng Motor Hindi kukunin ang unit!, ✔ Pwede Online Application, ✔ Pwede mag walk in sa branch, ✔ Mababang interes, ✔ Approve agad basta kumpleto ang requirements!, ✔ 1-3 days process",
        display: "ORCR Loans are protected by an asset or property of value pledged by a borrower in exchange for a loan. These loans are most commonly used for car registrations and land titles., Motorcycle (Sangla OR/CR) No Hassle Cash Loan! Magpasa ka lang ng complete requirements sa Facebook Messenger pwede na mag apply!✔ 2015 and up to latest model are accepted✔ Original OR CR ✔ 2 valid ID's ✔ Latest Electricity or Water billing ✔ Latest 2months Proof of income, Tricycle (Sangla OR/CR), Malapit na ang Due date ng bills? You can borrow money to meet your financial needs! SANGLA OR CR ng Motor Hindi kukunin ang unit!, ✔ Pwede Online Application, ✔ Pwede mag walk in sa branch, ✔ Mababang interes, ✔ Approve agad basta kumpleto ang requirements!",
        url: "/SanglaORCR",
        
    },

    {
        id: 10,
        title: "Repossessed Units",
        content: "/RepossessedUnits",
        display: "ORCR Loans are protected by an asset or property of value pledged by a borrower in exchange for a loan. These loans are most commonly used for car registrations and land titles.",
        url: "/RepossessedUnits",
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
    showSearch: false
})