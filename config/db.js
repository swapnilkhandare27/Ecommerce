const mongoose=require('mongoose')
const colors = require('colors')

const connectdb=async()=>{
try{
const conn= await mongoose.connect('mongodb+srv://swapnil:swapnil27@cluster1.iibufnd.mongodb.net/ecommerce')
console.log(`connected to mongodb database ${conn.connection.host}`.bgMagenta.white)
}catch(error){
    console.log(`Error in Mongodb ${error}`.bgRed.white)
}
};
module.exports=connectdb;




