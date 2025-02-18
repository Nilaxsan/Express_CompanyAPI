import Admin from "../model/AdminModel.js";

export const create=async (req, res) =>{
    try {
        const adminData= new Admin(req.body);
        
       
        
    } catch (error) {
        res.status(500).json({ error: "Internal Server error" });
    }
}
