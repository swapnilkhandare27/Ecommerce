const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const morgan = require('morgan');
const connectdb = require('./config/db');
const authRoutes = require('./routes/authRoute')
const categoryRoutes = require('./routes/categoryRoutes')
const productRoutes = require('./routes/productRoutes')
const cors = require('cors')
const path = require('path');
dotenv.config();

const app = express();
connectdb();
//middelwares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname,'./frontend/build')))

//routes
app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/category',categoryRoutes)
app.use('/api/v1/product',productRoutes)
// app.get('/',(req,res)=>{
//      res.send("<h1>welcome to ecommerce app</h1>")
     
// })

//rest api
app.use('*',function(req,res){
     res.sendFile(path.join(__dirname,"./frontend/build/index.html"));
});

app.listen(5000);



