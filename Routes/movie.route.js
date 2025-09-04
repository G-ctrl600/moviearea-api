import express from "express";
import { movieCreate, movieDelete, movieGet, movieUpdate } from "../controller/movie.controller.js";

let router=express.Router();

// R- for Read

router.get('/',movieGet)

//c- for create
router.post('/',movieCreate)

//u- for update
router.put('/:id',movieUpdate)

// D - for delete
router.delete('/:id',movieDelete)

export default router;