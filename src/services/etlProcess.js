import { getCampaigns, getLeads } from "./dummyData.js"

export const processLeadsData= ()=>{
    const leads = getLeads()
    // const convertedLeades = leads.filter((lead)=> lead.status === 'pending').length;
    const convertedLeads = leads.filter((lead)=> lead.status === 'converted').length;

    const totalLeads = leads.length;

    const conversionRate = totalLeads ? (convertedLeads / totalLeads) * 100 : 0;
    // const conversionRate = totalLeads ? (convertedLeades / totalLeads) * 100 : 0;
    // console.log(conversionRate);

    return { convertedLeads, totalLeads, conversionRate }
}

export const processCompaignData = ()=>{
    const compaign = getCampaigns()
    const activeCampaigns = compaign.filter(campaign=>campaign.status === 'active').length;
    const totalCampaigns = compaign.length;

    const avgROI = compaign.reduce((acc, compaign)=> acc + compaign.ROI, 0)/ totalCampaigns; 


    return { activeCampaigns, totalCampaigns, avgROI }

}