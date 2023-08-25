const mongoose= require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,//disable it for payment check up
    unique: true,//disable it for payment check up
  },
  slug: {
    type: String,
    lowercase: true,
  },
});

module.exports= mongoose.model("Category", categorySchema);