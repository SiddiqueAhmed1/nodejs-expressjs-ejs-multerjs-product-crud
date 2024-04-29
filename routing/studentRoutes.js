import express from 'express';

import { getStudent } from '../controller/studentController.js';
import { studentFileUpload } from '../utilities/multerMiddlware.js';

// init router
const router = express.Router();

// request taken
router.post('/student', studentFileUpload, getStudent)

// export default router
export default router;