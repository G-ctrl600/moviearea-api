import express from "express";

let router=express.Router();

// R- for Read

router.get('/',(req,res)=>{
       res.send("get all movies list")
})

//c- for create
router.post('/',(req,res)=>{
    res.send("create a movie")
})

//u- for update
router.put('/:id',(req,res)=>{
    res.send("update a movie")
})

// D - for delete
router.delete('/:id',(req,res)=>{
      res.send("delete a movie")
})

export default router;