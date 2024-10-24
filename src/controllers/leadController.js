import  {getLeads} from '../services/dummyData.js'

 export const gettingLeads= (req, res)=>{
    const leads = getLeads();


 

    res.json(leads);
}

