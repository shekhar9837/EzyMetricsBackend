
import express from 'express';
import { gettingLeads } from '../controllers/leadController.js';
import { gettingCampaigns } from '../controllers/getCompaigns.js';
import { getMetrics } from '../controllers/metricsController.js';
import { convertedLeads, generateCampaignReport } from '../controllers/jsonToCsv.js';



const router = express.Router();

//  http://localhost:8000/api/leads  
router.get('/leads', gettingLeads);  

//  http://localhost:8000/api/campaigns  
router.get('/campaigns', gettingCampaigns);

//  http://localhost:8000/api/metrice
router.get('/metrice', getMetrics);

//  http://localhost:8000/api/reports/leads/csv
router.get('/reports/leads/csv', convertedLeads); 

//  http://localhost:8000/api/reports/compaigns/csv
router.get('/reports/compaigns/csv', generateCampaignReport);



export default router