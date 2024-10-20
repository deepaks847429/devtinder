const express= require ('express');

const app=express();

app.get("/user",(req, res)=>{
  res.send({firstName: "deepak"})
})

app.post("/user", (req, res)=>{
  res.send("data successfully saved to database")
})

app.delete("/user", (req, res)=>{
  res.send("data deleted successfully"); 

})
app.get("/ab*c", (req, res)=>{
  res.send({fistname: "Deepak", lastname: "kumar"})
})
app.get("/ab+c", (req, res)=>{
  res.send({fistname: "Deepak", lastname: "kumar"})
})
app.get("/ab?c", (req, res)=>{
  res.send({fistname: "Deepak", lastname: "kumar"})
})

app.use("/test",(req, res)=>{
  res.send("hello from the server!")
})


app.listen(3000, ()=>{
  console.log("server is successfullly listening on port 3000....")
});