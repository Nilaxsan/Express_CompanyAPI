import Department from "../model/DepartmentModel.js";

//crete a new department
export const create =async (req, res) => 
    {
        try {
            const depData= new Department(req.body);

            const { DepartmentName } = req.body;

            const departmentExist = await Department.findOne({ DepartmentName })

            if (departmentExist) {
                return res.status(400).json({ error: "Department already exists" });
            }
            const savedDepartment = await depData.save();
            res.status(201).json(savedDepartment);
           
        } catch (error) {
            res.status(500).json({ error: "Internal Server error" });
        }
    }

//fetch all department
export const fetchAll =async (req, res) => 
{
    try {
        const departments= await Department.find();
        if(departments.length===0)
        {
            return res.status(404).json({error:"No department found"});
        }
        res.status(200).json(departments);
       
    } catch (error) {
        res.status(500).json({ error: "Internal Server error" });
    }
}

//update department
export const update =async (req, res) => 
{
    try {
        const id = req.params.id;
        const departmentExist = await Department.findOne({_id : id});
        if (!departmentExist) {
            return res.status(404).json({ error: "Department not found" });
        }
        const updatedDepartment = await Department.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedDepartment);

    } catch (error) {
        res.status(500).json({ error: "Internal Server error" });
    }
}

//delete department
export const deleteDepartment =async (req, res) => 
{
    try {
        const id = req.params.id;
        const departmentExist = await Department
        .findOne({_id : id});
        if (!departmentExist) {
            return res.status(404).json({ error: "Department not found" });
        }
        await Department.findByIdAndDelete(id);
        res.status(200).json({ message: "Department deleted successfully" });

    } catch (error) {
        res.status(500).json({ error: "Internal Server error" });
    }   }