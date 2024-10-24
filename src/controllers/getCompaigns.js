 
import {getCampaigns} from '../services/dummyData.js';

export const gettingCampaigns = (req, res)=>{
    const campaigns = getCampaigns()
    res.json(campaigns);
}