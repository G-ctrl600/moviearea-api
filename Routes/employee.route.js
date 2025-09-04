import express from "express";
import { employeeCreate, employeeDelete, employeeGet, employeeUpdate } from "../controller/employee.controller.js.js";
import connectDB from "../lib/db.js";

//connect 
connectDB();

let  router = express.Router();

// R- for Read

router.get('/',employeeGet)

//c- for create
router.post('/',employeeCreate)

//u- for update
router.put('/:id',employeeUpdate)

// D - for delete
router.delete('/:id',employeeDelete)

export default router;