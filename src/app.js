const express= require ('express');

const app=express();

app.use("/test",(req, res)=>{
  res.send("hello from the server!")
})
app.use("/",(req, res)=>{
  res.send("hello from home page")
})

app.listen(3000, ()=>{
  console.log("server is successfullly listening on port 3000....")
});