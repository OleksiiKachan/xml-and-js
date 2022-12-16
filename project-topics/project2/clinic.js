const fetchData = async () => { // One adverse event report
    const res = await fetch(
        `https://api.fda.gov/drug/event.json?search=receivedate:[20040101+TO+20081231]&limit=1`
    );
    const data = await res.json();
    return data;
};
let result = "";
const dataoutput = document.getElementById('container');
const displayData = (data) => {
    const entries = Object.entries(data.results);
    entries.map(([key, value]) => {
        result += `
            <p id = "adverseeventreport">safety report id :   ${value.safetyreportid}</br>
             Transmission date format :  ${value.transmissiondateformat}</br>
               transmissiondate :${value.transmissiondate}</br>
                serious : ${value.serious}</br>
                 seriousnessdeath : ${value.seriousnessdeath}</br>
                  receivedateformat: ${value.receivedateformat}</br>
                   receiptdate : ${value.receiptdate}</br>
                fulfillexpeditecriteria:  ${value.fulfillexpeditecriteria}</br>
              companynumb :${value.companynumb}</br>
               reportercountry : ${value.primarysource.reportercountry}</br>
                qualification :${value.primarysource.qualification}</br>
                 senderorganization: ${value.sender.senderorganization}</br>
                 receiver:  ${value.receiver}</br>
                  patientonsetage:  ${value.patient.patientonsetage}</br>
                    patientonsetageunit : ${value.patient.patientonsetageunit}</br>
                     patientsex : ${value.patient.patientsex}</br>
                     patientdeathdateformat :  ${value.patient.patientdeath.patientdeathdateformat}</br>
                        patientdeathdate :   ${value.patient.patientdeath.patientdeathdate}</br></p>  
        `;
        document.getElementById('container').innerHTML= result;
    });
};

const pharmacologicclass = async () => {
    const res = await fetch(
        `https://api.fda.gov/drug/event.json?search=patient.drug.openfda.pharm_class_epc:"nonsteroidal+anti-inflammatory+drug"&limit=1`
    );
    const data = await res.json();
    return data;
};

let pharmacologic  = "";
// One adverse event report with a drug from a certain pharmacologic class
const datapharmacologic = (data) => {
    const entries = Object.entries(data.results);
    entries.map(([key, value]) => {
        pharmacologic += `
            <h3> safety report version :   ${value.safetyreportversion}</br>
            safety report id :   ${value.safetyreportid}</br>
             primary sourcec ountry :  ${value.primarysourcecountry}</br>
               transmissiondate :${value.transmissiondate}</br>
                transmission date format : ${value.transmissiondateformat}</br>
                 serious : ${value.serious}</br>
                  serious nessother : ${value.seriousnessother}</br>
                  receivedate : ${value.receivedate}</br>
                  receivedateformat: ${value.receivedateformat}</br>
                   receiptdateformat : ${value.receiptdateformat}</br>
                   receipt date : ${value.receiptdate}</br>
                fulfillexpeditecriteria:  ${value.fulfillexpeditecriteria}</br> </h3> 
        `;
        document.getElementById('datapharmacologic').innerHTML= pharmacologic;   
    });
};

// Count of patient reactions
const patientreactions = async () => {
    const res = await fetch(
        `https://api.fda.gov/drug/event.json?search=patient.drug.openfda.pharm_class_epc:"nonsteroidal+anti-inflammatory+drug"&count=patient.reaction.reactionmeddrapt.exact`
    );
    const data = await res.json();
    return data;
};

let re = "";
const dataRection = (data) => {
    const entries = Object.entries(data.results);
    entries.map(([key, value]) => {
        re += `   
            <h3>term :   ${value.term}</br>
                count :   ${value.count} </h3>
        `;
        document.getElementById('rection').innerHTML= re;
    });
};

//Count of drug labeling, by product type
const funCountofdruglabeling = async () => {
    const res = await fetch(
        `https://api.fda.gov/drug/label.json?count=openfda.product_type.exact`
    );
    const data = await res.json();
    return data;
};

let Countofdruglabeling = "";
//Displaying data | data Argument is that data we fetched from API and returned it in fetchData function - And we pass it to function later
const dataCountofdruglabeling = (data) => {
    const entries = Object.entries(data.results);
    entries.map(([key, value]) => {
        Countofdruglabeling += `
            <h3>
            term :   ${value.term}<br>
            count :   ${value.count} </h3> 
        `;
        document.getElementById('Countofdrug').innerHTML= Countofdruglabeling;
    });
};

//NDC Directory
const fetchProduct = async () => {
    const res = await fetch(
        `https://api.fda.gov/drug/ndc.json?search=finished:true&limit=1`
    );
    const data = await res.json();
    return data;
};


let p = "";
const displayProduct = (data) => {
    const entries = Object.entries(data.results);
    entries.map(([key, value]) => {
        p += ` 
            <p> product_ndc ${value.product_ndc}</br>
             generic_name :  ${value.generic_name}</br>
               labeler_name :${value.labeler_name}</br>
                brand_name : ${value.brand_name}</br>
                 listing_expiration_date : ${value.listing_expiration_date}</br>
                  marketing_category: ${value.marketing_category}</br>
                   dosage_form : ${value.dosage_form}</br>
                spl_id:  ${value.spl_id}</br>
              product_type :${value.product_type}</br>
               marketing_start_date : ${value.marketing_start_date}</br>
                product_id :${value.product_id}</br>
                 application_number:  ${value.application_number}</br>
                  brand_name_base:  ${value.brand_name_base}</br>          
                   </p>  
        `;
        document.getElementById('oneProductComtainer').innerHTML= p;
    });
};

//recall
const RecallEnforcementReports = async () => {
    const res = await fetch(
        `https://api.fda.gov/drug/enforcement.json?search=report_date:[20040101+TO+20131231]&limit=1`
    );
    const data = await res.json();
    return data;
};

let pharmaRecall  = "";
// One adverse event report with a drug from a certain pharmacologic class
const funpharmaRecall = (data) => {
    const entries = Object.entries(data.results);
    entries.map(([key, value]) => {
        pharmaRecall += `      
             <h3>country :   ${value.country}</br>
            city :   ${value.city}</br>
             address_1 :  ${value.address_1}</br>
               reason_for_recall :${value.reason_for_recall}</br>
                address_2 : ${value.address_2}</br>
                 product_quantity : ${value.product_quantity}</br>
                  code info : ${value.code_info}</br>
                  center classification_date : ${value.center_classification_date}</br>
                  distribution_pattern: ${value.distribution_pattern}</br>
                   state : ${value.state}</br>
                   product_description : ${value.product_description}</br>
                    report_date:  ${value.report_date}</br>
                    classification : ${value.classification}</br>
                   openfda : ${value.openfda}</br>
                    recalling_firm:  ${value.recalling_firm}</br>
                     recall_number : ${value.recall_number}</br>
                    initial_firm_notification:  ${value.initial_firm_notification}</br>
                    product_type : ${value.product_type}</br>
                   event_id : ${value.event_id}</br>
                    termination_date:  ${value.termination_date}</br>
                      more_code_info : ${value.more_code_info}</br>
                    recall_initiation_date:  ${value.recall_initiation_date}</br>
                    postal_code : ${value.postal_code}</br>
                   voluntary_mandated : ${value.voluntary_mandated}</br>
                    status:  ${value.status}</br></h3>
        `;
        document.getElementById('pharmaRecallcontainer').innerHTML= pharmaRecall;   
    });
};

//drugfda
const Countfsponsors = async () => {
    const res = await fetch(
        `https://api.fda.gov/drug/drugsfda.json?count=sponsor_name`
    );
    const data = await res.json();
    return data;
};

let sponsors  = "";
// One adverse event report with a drug from a certain pharmacologic class
const funsponsors = (data) => {
    const entries = Object.entries(data.results);
    entries.map(([key, value]) => {
        sponsors += `
             <h3>term :   ${value.term}</br>
            count :   ${value.count}</br></h3>
        `;
        document.getElementById('DrugsFDA').innerHTML= sponsors;
    });  
};

const hazardclass = async () => {
    const res = await fetch(
        `https://api.fda.gov/food/enforcement.json?search=report_date:[20040101+TO+20131231]&limit=1`
    );
    const data = await res.json();
    return data;
};

let healthhazardclass  = "";
//Displaying data | data Argument is that data we fetched from API and returned it in fetchData function - And we pass it to function later
const datahealthhazardclass = (data) => {
    const entries = Object.entries(data.results);
    entries.map(([key, value]) => {
        healthhazardclass += ` 
            <h3>country :   ${value.country}</br>
            city :   ${value.city}</br>
             address_1 :  ${value.address_1}</br>
               reason_for_recall :${value.reason_for_recall}</br>
                address_2 : ${value.address_2}</br>
                 product_quantity : ${value.product_quantity}</br>
                  code info : ${value.code_info}</br>
                  center classification_date : ${value.center_classification_date}</br>
                  distribution_pattern: ${value.distribution_pattern}</br>
                   state : ${value.state}</br>
                   product_description : ${value.product_description}</br>
                    report_date:  ${value.report_date}</br>
                    classification : ${value.classification}</br>
                   openfda : ${value.openfda}</br>
                    recalling_firm:  ${value.recalling_firm}</br>
                    recall_number : ${value.recall_number}</br>
                    initial_firm_notification:  ${value.initial_firm_notification}</br>
                   product_type : ${value.product_type}</br>
                   event_id : ${value.event_id}</br>
                    termination_date:  ${value.termination_date}</br>
                      more_code_info : ${value.more_code_info}</br>
                    recall_initiation_date:  ${value.recall_initiation_date}</br>
                    postal_code : ${value.postal_code}</br>
                   voluntary_mandated : ${value.voluntary_mandated}</br>
                    status:  ${value.status}</br>
                        </h3> 

        `;
        document.getElementById('healthhazard').innerHTML= healthhazardclass;
    });
};

const reporthazardclass = async () => {
    const res = await fetch(
        `https://api.fda.gov/food/enforcement.json?search=classification:"Class+III"&limit=1`
    );
    const data = await res.json();
    return data;
};

let reporthealthhazardclass  = "";
//Displaying data | data Argument is that data we fetched from API and returned it in fetchData function - And we pass it to function later
const datahealthhazardclassReport = (data) => {
    const entries = Object.entries(data.results);
    entries.map(([key, value]) => {
        reporthealthhazardclass += `
            <h3>
            country :   ${value.country}<br>
            city :   ${value.city}<br>
            address_1 :   ${value.address_1}<br>
            reason_for_recall :   ${value.reason_for_recall}<br>
            address_2 :   ${value.address_2}<br>
            product_quantity :   ${value.product_quantity}<br>
            code_info :   ${value.code_info}<br>
            center_classification_date :   ${value.center_classification_date}<br>
            distribution_pattern :   ${value.distribution_pattern}<br>
            product_description :   ${value.product_description}<br>                
            report_date :   ${value.report_date}<br>
            classification :   ${value.classification}<br>
            openfda :   ${value.openfda}<br>
            recalling_firm :   ${value.recalling_firm}<br>
            recall_number :   ${value.recall_number}<br>
            initial_firm_notification :   ${value.initial_firm_notification}<br>
            product_type :   ${value.product_type}<br>
            event_id :   ${value.event_id}<br>
            termination_date :   ${value.termination_date}<br>
            more_code_info :   ${value.more_code_info}<br>
            recall_initiation_date :   ${value.recall_initiation_date}<br>
            postal_code :   ${value.postal_code}<br>
            voluntary_mandated :   ${value.voluntary_mandated}<br>
            status :   ${value.status}<br>
            </h3> 
        `;
        console.log(reporthealthhazardclass);
        //Now we pass our elements in ratesWrapper div (ParentElement)
        document.getElementById('reporthealthhazardreport').innerHTML= reporthealthhazardclass;
    });
};

const countthazardclass = async () => {
    const res = await fetch(
        `https://api.fda.gov/food/enforcement.json?count=voluntary_mandated.exact`
    );
    const data = await res.json();
    return data;
};
let reportcounthealthhazardclass  = "";

//Displaying data | data Argument is that data we fetched from API and returned it in fetchData function - And we pass it to function later
const datacounthealthhazardclassReport = (data) => {
    const entries = Object.entries(data.results);
    entries.map(([key, value]) => {
        reportcounthealthhazardclass += `
            <h3>
            term :   ${value.term}<br>
            count :   ${value.count} </h3> 
        `;
        console.log(reportcounthealthhazardclass);
        //Now we pass our elements in ratesWrapper div (ParentElement)
        document.getElementById('reportcounthealthhazardreport').innerHTML= reportcounthealthhazardclass;
    });
};

//count of consumer data
const consumerreaction = async () => {
    const res = await fetch(
        `https://api.fda.gov/food/event.json?search=products.industry_code:23&count=reactions.exact`
    );
    const data = await res.json();
    return data;
};
let Countofconsumerreactions  = "";

//Displaying data | data Argument is that data we fetched from API and returned it in fetchData function - And we pass it to function later
const funCountofconsumerreactions = (data) => {
    const entries = Object.entries(data.results);
    entries.map(([key, value]) => {
        Countofconsumerreactions += `
            <h3>
            term :   ${value.term}<br>
            count :   ${value.count} </h3> 
        `;
        console.log(Countofconsumerreactions);
        //Now we pass our elements in ratesWrapper div (ParentElement)
        document.getElementById('consumer').innerHTML= Countofconsumerreactions;
    });
};
    fetchData().then((data) => displayData(data));
    pharmacologicclass().then((data) => datapharmacologic(data));
    patientreactions().then((data) => dataRection(data));
    funCountofdruglabeling().then((data) => dataCountofdruglabeling(data));
    fetchProduct().then((data) => displayProduct(data));
    RecallEnforcementReports().then((data) => funpharmaRecall(data));
    Countfsponsors().then((data) => funsponsors(data));
    hazardclass().then((data) => datahealthhazardclass(data));
    reporthazardclass().then((data) => datahealthhazardclassReport(data));
    countthazardclass().then((data) => datacounthealthhazardclassReport(data));
    consumerreaction().then((data) => funCountofconsumerreactions(data));   