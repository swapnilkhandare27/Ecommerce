
const express = require('express')
const createProductController =require('../controllers/createproduct.js')
const deleteProductController= require('../controllers/deleteproduct.js')
const getProductController =require('../controllers/getproduct.js')
const  getSingleProductController=require('../controllers/getsingleproduct.js')
const  productPhotoController =require('../controllers/productphoto.js')
const updateProductController = require('../controllers/updateproduct.js')
const requireSignIn = require('../middleware/authMiddleware.js')
const isAdmin = require('../middleware/adminMiddleware.js')
const formidable = require('express-formidable')
const  productFiltersController = require('../controllers/productFiltersController.js')
const productCountController = require('../controllers/productCountController.js')
const productListController = require('../controllers/productListController.js')
const searchProductController = require('../controllers/searchProduct.js')
const realtedProductController = require('../controllers/relatedproduct.js')
const productCategoryController = require('../controllers/productcategory.js')
const braintreeTokenController = require('../controllers/bttoken.js')
const brainTreePaymentController = require('../controllers/braintree.js')

//const formidable = "express-formidable";

const router = express.Router();

//routes
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);
//routes
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

//get products
router.get("/get-product", getProductController);

//single product
router.get("/get-product/:slug", getSingleProductController);

//get photo
router.get("/product-photo/:pid", productPhotoController);

//delete rproduct
router.delete("/delete-product/:pid", deleteProductController);
//filter product
router.post("/product-filters", productFiltersController);

//product count
router.get("/product-count",productCountController);

//product per page
router.get("/product-list/:page", productListController);

//search product
router.get("/search/:keyword", searchProductController);
//similar product
router.get("/related-product/:pid/:cid", realtedProductController);

//category wise product
router.get("/product-category/:slug", productCategoryController);


//payments routes
//token
router.get("/braintree/token", braintreeTokenController);

//payments
router.post("/braintree/payment", requireSignIn, brainTreePaymentController);

module.exports=router;



