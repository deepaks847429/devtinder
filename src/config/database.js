const mongoose= require('mongoose');

const connectDB= async()=>{
  await mongoose.connect("url");
};

module.exports=connectDB();