
import express from 'express';
let app=express();
let PORT=4000;
app.get('/',(req,res)=>{
    res.json({msg : "hello students!"})
})
app.listen(PORT,()=>{
    console.log(`server is running at port  http://localhost:${PORT}`);
})