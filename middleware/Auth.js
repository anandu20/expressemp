import pkg from "jsonwebtoken";
const {verify}=pkg;
export default async function Auth(req,res,next) {
    try {
        const key=req.headers.authorization
        console.log(key);
        
        if(!key)
            return res.status(403).send({msg:"unauthorized access"})
        const token=key.split("")[1]
        const auth=await verify(token,process.env.JWT_KEY);
        req.res=auth; 
        next();
    } catch (error) {
        console.log(error);
        return res.status(403).send({msg:"session expired pls login again"})
        
        
    }
    
} 