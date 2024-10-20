const express= require ('express');
const connectDB=require("./config/database");
const app=express();
const User=require("./models/user")

app.post("/signup", async(req, res)=>{
  const user = new User({
    firstName: "Deepak",
    lastName: "Kumar",
    emailid: "deep.dkt0@gmail.com",
    password:"deepak@123"
  });
  await user.save();
  res.send("User added successfully!")
});

connectDB()
.then(()=>{
  console.log("database connected successfully");
  app.listen(3000, ()=>{
    console.log("server is successfullly listening on port 3000....")
  });
})
.catch((err)=>{

  console.error("Database cannot be connected");
});



