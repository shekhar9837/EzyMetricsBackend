import { sendEmailNotification } from "../services/emailService.js";
import { processCompaignData, processLeadsData } from "../services/etlProcess.js";

export const getMetrics = async (req, res) => {
  try {
    const leadMetrics = processLeadsData();
    const compaignMetrics = processCompaignData();

    if (leadMetrics.conversionRate < 20) { 
      try {
        await sendEmailNotification(
          process.env.EMAIL_ALERT, 
          'Low Conversion Rate Alert',
          `Alert! The conversion rate is low: ${leadMetrics.conversionRate}%`
        );
        console.log("Email notification sent!");
      } catch (emailError) {
        console.error("Failed to send email notification", emailError);
      }
    }

    res.json({ leadMetrics, compaignMetrics });
  } catch (error) {
    console.error("Error fetching metrics:", error);
    res.status(500).json({ message: "Server error" });
  }
};
