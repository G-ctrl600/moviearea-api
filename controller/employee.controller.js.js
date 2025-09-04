import Employee from "../models/employee.model.js"

export const employeeGet = async (req,res)=>{
    try{
      const employees= await Employee.find()
      res.json(employees)
    }
    catch(err){
      res.status(500).json({message:err.message})
    }
}

export const employeeCreate =async(req,res)=>{

  console.log(req.body)

  //validate your data

  const newEmployee=new Employee ({
    Emp_name:req.body.name,
    Emp_email:req.body.email,
    Emp_position:req.body.position,
  })
  try{
  const employee=await newEmployee.save()
  res.status(201).json(employee)
  }catch(err){
    res.status(409).json({message:err.message})
  }
}

export const employeeUpdate = (req,res)=>{
    
}

export const employeeDelete = (req,res)=>{
    res.send("delete a employee")
}