const express = require('express')
const requireSignIn = require('../middleware/authMiddleware.js')
const isAdmin = require('../middleware/adminMiddleware.js')
const createCategoryController = require('../controllers/create.js')
const updateCategoryController = require('../controllers/update.js')
const singleCategoryController = require('../controllers/single.js')
const categoryControlller = require('../controllers/put.js')
const deleteCategoryController = require('../controllers/delete.js')

const router = express.Router();

//routes
// create category
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

//update category
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

//getALl category
router.get("/get-category",categoryControlller);

//single category
router.get("/single-category/:slug", singleCategoryController);

//delete category
router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
 deleteCategoryController
);

module.exports=router;