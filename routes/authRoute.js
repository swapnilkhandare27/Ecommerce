const express= require( "express");
const registerController = require('../controllers/authController')
const loginController = require('../controllers/logincontroller')
const forgotPasswordController=require('../controllers/authController')
const testController = require('../controllers/adminController')
const requireSignIN = require('../middleware/authMiddleware.js')
const isAdmin = require('../middleware/adminMiddleware');
const updateProfileController = require("../controllers/updateprofile");
const getAllOrdersController = require("../controllers/getAllOrder");
const getOrdersController = require("../controllers/getOrder");
const orderStatusController = require("../controllers/orderStatus");
//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/register",registerController);

//LOGIN || POST
router.post("/login",loginController)

//Forgot Password || POST
router.post("/forgot-password",forgotPasswordController);

//test routes
router.get("/test", requireSignIN, isAdmin,testController );

//protected route auth
router.get("/user-auth", requireSignIN, (req, res) => {
  res.status(200).send({ ok: true });
});
//admin route
router.get("/admin-auth", requireSignIN,isAdmin, (req, res) => {
    res.status(200).send({ ok: true });
  });

  //update profile
router.put("/profile", requireSignIN, updateProfileController);

//orders
router.get("/orders", requireSignIN,getOrdersController );

//all orders
router.get("/all-orders", requireSignIN, isAdmin, getAllOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  requireSignIN,
  isAdmin,
  orderStatusController
);

module.exports=router;