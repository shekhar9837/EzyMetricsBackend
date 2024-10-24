import { getCampaigns, getLeads } from "../services/dummyData.js";
import { Parser } from "@json2csv/plainjs";

export const convertedLeads = (req, res) => {
  const leads = getLeads();

  try {
    const parser = new Parser();
    const csv = parser.parse(leads);
    console.log(csv);

    // Send the CSV file as a response with a proper header
    res.setHeader("Content-Type", "text/csv");
    res.attachment("leads_report.csv");
    res.send(csv);
  } catch (error) {
    console.log(error);
  }
};


export const generateCampaignReport = (req, res) => {
    const campaigns = getCampaigns();

    try {
        const parser = new Parser();
        const csv = parser.parse(campaigns);
      
        res.header('Content-Type', 'text/csv');
        res.attachment('campaigns_report.csv');
        res.send(csv);
        
    } catch (error) {
        console.log(error);
        
    }
   
  };
