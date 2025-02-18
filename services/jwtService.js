import jwt from 'jsonwebtoken';

const generateToken = (admin) => {
    const secretKey = process.env.JWT_SECRET_KEY;  
    if (!secretKey) {
        throw new Error("JWT key is missing in configuration.");
    }

    
    const payload = {
        id: admin._id,
        email: admin.email,
        role: "Admin",  
    };

    const options = {
        expiresIn: '1h',  
        issuer: process.env.JWT_ISSUER,
        audience: process.env.JWT_AUDIENCE,
    };

    const token = jwt.sign(payload, secretKey, options);
    return token;
};

export default generateToken;
