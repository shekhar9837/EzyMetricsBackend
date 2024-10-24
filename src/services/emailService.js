import nodemailer from 'nodemailer';


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
})

export const sendEmailNotification =(recipient, subject, message)=>{

    const mailOptions = {
        from: process.env.EMAIL_USER    ,
        to: recipient,
        subject: subject,
        text: message
    }

    transporter.sendMail(mailOptions, (e, info)=>{
        if(e){
            console.log('Error sending email', e)
        } else {
            console.log('Email sent', info.response)
        }
    })

}