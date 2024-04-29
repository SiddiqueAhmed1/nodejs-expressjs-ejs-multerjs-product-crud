import express from "express";
import {
  createProduct,
  createProductPageShow,
  deleteProduct,
  productPage,
  showEditProductPage,
  singleProduct,
  updateProduct,
} from "../controller/productController.js";
import { productFileUpload } from "../utilities/multerMiddlware.js";

// init router
const router = express.Router();

// get product page
router.get("/", productPage);

//get create product page
router.get("/createProduct", createProductPageShow);

// create a product submit
router.post("/createProduct", productFileUpload, createProduct);

//get single product page
router.get("/singleProduct/:slug", singleProduct);

// delete product
router.get('/:id', deleteProduct)

// get product edit page 
router.get('/editProductPage/:id', showEditProductPage )

// update product
router.post('/editProductPage/:id', productFileUpload, updateProduct)

// export router
export default router;
