// /src/services/dummyData.js
 const dummyLeads = [
    { name: "John Doe", email: "john@example.com", status: "converted" },
    { name: "shekhar", email: "shekhar@example.com", status: "converted" },
    { name: "shekhar", email: "shekhar@example.com", status: "converted" },
    { name: "Jane Smith", email: "jane@example.com", status: "pending" },
  ];
  
   const dummyCampaigns = [
    { name: "Campaign A", status: "active", budget: 5000, ROI: 1.2 },
    { name: "Campaign B", status: "completed", budget: 3000, ROI: 0.8 },
    { name: "Campaign B", status: "active", budget: 3000, ROI: 0.8 },
    { name: "Campaign B", status: "active", budget: 1000, ROI: 2.0 },
    { name: "Campaign B", status: "active", budget: 9000, ROI: 0.8 },
    { name: "Campaign B", status: "completed", budget: 3000, ROI: 9.3 },
    { name: "Campaign B", status: "completed", budget: 3000, ROI: 5.8 },
  ];
  
// const   exports  ={
//     getLeads: () => dummyLeads,
//     getCampaigns: () => dummyCampaigns,
//   };
  

export const   getLeads =  () => dummyLeads;
export const getCampaigns= () => dummyCampaigns;
