import Admin from "../model/AdminModel.js";
import generateToken from "../services/jwtService.js";

import bycrypt from "bcrypt";

export const register = async (req, res) => {
    try {
        const adminData = new Admin(req.body);

        const { email } = req.body;

        const adminExist = await Admin.findOne({ email })

        if (adminExist) {
            return res.status(400).json({ error: "Admin already exists with this email" });
        }

        const saltRounds = 10;
        const HashedPassword = await bycrypt.hash(req.body.Password, saltRounds);
        adminData.Password = HashedPassword;
        const savedAdmin = await adminData.save();
        res.status(201).json(savedAdmin);



    } catch (error) {
        res.status(500).json({ error: "Internal Server error" });
    }
}

export const login = async (req, res) => {
    try {


        const { email, password } = req.body;


        const adminExist = await Admin.findOne({ email });
        console.log("Admin found:", adminExist);

        if (!adminExist) {
            return res.status(404).json({ error: "Admin not found" });
        }

        const isMatch = await bycrypt.compare(password, adminExist.Password);
        if (!isMatch) {
            return res.status(400).json({ error: "Invalid credentials" });
        }
        const token = generateToken(adminExist);


        res.status(200).json({ message: "Login successful", token });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server error" });
    }
}

