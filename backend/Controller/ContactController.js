const transporter = require("../Utils/nodemailer")

const create = async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;

        const mailOption = {
            from: process.env.EMAIL_USER,
            to: req.body.email,
            subject: "New Contact Form Submission",
            text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
          };
        
          transporter.sendMail(mailOption, function (error, info) {
            if (error) {
              return res.status(500).json({ error: error });
            } else {
              //console.log("email sent");
              return res.status(200).json({ message: "Email sent successfully!" , info});
            }
          });

    } catch (error) {
        res.status(500).json({ message: "Something went wrong", error: error });
    }
};

module.exports = { create };