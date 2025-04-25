const jwt=require('jsonwebtoken');
exports.auth=(req,resp,next)=>{
    try{
        const token=req.header("Authorization").replace("Bearer ","")||req.body.token;
        if(!token){
            return resp.status(401).json({
                success:false,
                message:"Token Missing"
            })
        }
        try{
            const payload=jwt.verify(token,"Shivam");
            req.user=payload;
        }
        catch(err){
            return resp.status(500).json({
                success:false,
                message:"Something went wrong while veryfying the token "+err
            })
        }
        next();
    }
    catch(err){
        return resp.status(500).json({
            success:false,
            message:"Error while Verifying Token"+err.message
        })
    }
}