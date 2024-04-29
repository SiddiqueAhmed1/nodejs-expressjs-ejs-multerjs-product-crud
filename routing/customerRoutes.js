import express from 'express';
import { createCustomer } from '../controller/customerController.js';
import { customerFileUpload } from '../utilities/multerMiddlware.js';


// router init
const router = express.Router();

// customer registration request
router.post('/customer', customerFileUpload , createCustomer)

// export default router
export default router;