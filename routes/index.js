const express = require('express');
nodeMailer = require('nodemailer');

let router = express.Router();

//Home Page
router.get("/", function (req, res) {
    res.render("home");
});

router.get('/downloadResume', (req, res) => {
    res.download('./public/VarunBhatt_Resume.pdf');
});

// POST - send mail
router.post("/", (req, res) => {
    const name = req.body.contactName;
    const email = req.body.contactEmail;
    const subject = req.body.contactSubject;
    const msg = req.body.contactMessage;
     
    let transporter = nodeMailer.createTransport({
        service: 'gmail',        
        auth: {
            user: process.env.USER,
            pass: process.env.PW
        }
    });
    let mailOptions = {
        from: process.env.USER, // sender address
        to: process.env.EMAIL, // list of receivers
        subject: subject, // Subject line
        text: 'from: ' + name + 
        ' email: ' + email +
        ' message: ' + msg         
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(400).send({ success: false })
        } else {
            res.status(200).send({ success: true });
        }
    });
}
);
module.exports = router;