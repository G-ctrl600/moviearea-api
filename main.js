
import express from 'express';
let app=express();
let PORT=4000;
app.get('/',(req,res)=>{
    res.json({msg : "hello students!"})
})

//CURD functionality of movies
// R- for Read

app.get('/movies',()=>{

})

//c- for create
app.get('/movies',()=>{

})

//u- for update
app.put('/movies/:id',()=>{

})

// D - for delete
app.delete('/movies/:id',()=>{

})

app.listen(PORT,()=>{
    console.log(`server is running at port  http://localhost:${PORT}`);
})