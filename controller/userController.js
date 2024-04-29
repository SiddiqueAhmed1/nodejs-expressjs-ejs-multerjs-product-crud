import nodemailer from 'nodemailer'
// import { Vonage } from '@vonage/server-sdk'

// // vonage init
// const vonage = new Vonage({
//     apiKey: "74fac55c",
//     apiSecret: "HCXgXbAK2PXNoADM"
//   })

//  // vonage setup 
//             async function sendSMS(to, from, text) {
//             await vonage.sms.send({to, from, text})
//                 .then(resp => { console.log('Message sent successfully'); console.log(resp); })
//                 .catch(err => { console.log('There was an error sending the messages.'); console.error(err); });
//             }

export const userRegister =  (req, res) => {
    const transporter = nodemailer.createTransport({
        host : process.env.MAIL_HOST,
        port : process.env.MAIL_PORT,
        auth : {
            user : process.env.MAIL_ADDRESS,
            pass : process.env.MAIL_PASS,
        }
        
    })

    transporter.sendMail({
        from : `Siddique Ahmed <${process.env.MAIL_ADDRESS}>` ,
        subject : 'USER REGISTRATION CONFIRM',
        to : req.body.email,
        html : `
        
        <!doctype html>
<html lang="en">
    <head style="padding: 30px;">
        <title>Title</title>
        <!-- Required meta tags -->
        <meta charset="utf-8" />
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">

    </head>

    <body style=background-color:green; padding: 20px;>
                
    <div style="width: 500px; margin: auto; margin-top: 100px;" class="email-template">
        <div style="box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, .2); padding: 20px;border-radius: 6px; background-color: yellow;padding: 30px;">
           
                <h2>Hello, Siddique Ahmed</h2>
         
          
                <p>Congratulations, You are succesfully created your account.</p>

                

                <ul style="display: flex; list-style: none; padding-left: 0px;"">
                    <li><a style="color: black; font-size: 20px; padding-left: 5px;" href="#"><i class="fab fa-facebook"></i></a></li>
                    <li><a style="color: black; font-size: 20px; padding-left: 5px;" href="#"><i class="fab fa-instagram"></i></a></li>
                    <li><a style="color: black; font-size: 20px; padding-left: 5px;" href="#"><i class="fab fa-youtube"></i></a></li>
                    <li><a style="color: black; font-size: 20px; padding-left: 5px;" href="#"><i class="fab fa-linkedin"></i></a></li>
                </ul>
                <a href="#"><button style="background-color: rgb(166, 28, 201); color: white;padding: 7px 15px; border: none;margin-bottom: 10px;">verify your email</button></a>
  
        </div>
    </div>
                                
                </div>
            </div>
        </div>


    </body>
</html>

        
        `
    })

//    await sendSMS('8801774112721','Siddique Ahmed', `Hello ${req.body.name}, You are ${req.body.age} years old and You are ${req.body.skill} developers. Your account created succesfully`)

   res.status(200).json({ msg : req.body})

}