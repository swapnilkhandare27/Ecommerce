// get single product
const productModel = require('../models/productModel')

 const getSingleProductController = async (req, res) => {
    try {
      const product = await productModel
        .findOne({ slug: req.params.slug })
        .select("-photo")
        .populate("category");
      res.status(200).send({
        success: true,
        message: "Single Product Fetched",
        product,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Eror while getitng single product",
        error,
      });
    }
  };

  module.exports=getSingleProductController;