
import express from 'express';
import movieRouter from './Routes/movie.route.js';

let app=express();
let PORT=4000;

app.get('/',(req,res)=>{
    res.json({msg : "hello students!"})
})

//CURD functionality of movies
app.use('/movies',movieRouter)

app.listen(PORT,()=>{
    console.log(`server is running at port  http://localhost:${PORT}`);
})