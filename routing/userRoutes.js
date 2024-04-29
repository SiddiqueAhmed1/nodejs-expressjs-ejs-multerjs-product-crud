import express from 'express'
import { userFileUpload } from '../utilities/multerMiddlware.js';
import { userRegister } from '../controller/userController.js';

// // create transport
// export const sendMail = async () => {
//     const transporter = nodemailer.createTransport({
//         port : process.env.MAIL_PORT,
//         host : process.env.MAIL_HOST,
//         auth : {
//             user : process.env.MAIL_ADDRESS,
//             pass : process.env.MAIL_PASS
//         }
//     })

//  await transporter.sendMail({
//     from : `Abu Bakar Siddique <${process.env.MAIL_ADDRESS}>` ,
//     to : req.body.email,
//     subject : 'Are You ready to join',
//     html : ``,
//  })
// }



// init router
const router = express.Router();

router.post('/user',userFileUpload, userRegister)


// export default router
export default router;