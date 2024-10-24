#  Backend

 a backend service focused on data integrations and reporting for CRM and marketing platforms. It fetches lead and campaign data from dummy data sources, processes it into meaningful metrics, and provides reporting functionality. The backend also includes an email notification feature for alerting users when specific conditions are met

## Features

- Fetches lead and campaign data from dummy data sources.
- ETL (Extract, Transform, Load) process to generate meaningful metrics.
- API endpoints for retrieving metrics in JSON format.
- Sends email alerts based on certain conditions (e.g., low conversion rate).
- Supports exporting reports in CSV format .

## Tech Stack

- **Node.js**: Backend runtime
- **Express**: Web framework
- **Nodemailer**: Email service for alerts

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/shekhar9837/EzyMetricsBackend.git
   cd EzyMetricsBackend


## API Endpoints


This endpoint retrieves a list of  metrics data from the CRM.


**GET** `/api/metrics`
```bash
GET http://localhost:5000/api/metrics



This endpoint retrieves a list of dummy lead data from the CRM.

**GET** `/api/leads`
```bash
GET  http://localhost:8000/api/leads  




This endpoint retrieves a list of Compaigns data from the CRM.

**GET** `/api/campaigns`

```bash
GET  http://localhost:8000/api/campaigns  





This request will prompt a download of the CSV file containing lead data.

**GET** `/api/reports/leads/csv

```bash
GET http://localhost:8000/api/reports/leads/csv


This endpoint generates a CSV report for campaigns.


**GET** `/api/reports/compaigns/csv


```bash

GET http://localhost:8000/api/reports/compaigns/csv
