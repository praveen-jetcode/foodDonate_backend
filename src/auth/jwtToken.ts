import jwt from 'jsonwebtoken';


 export const tokenGenerate=(user:any)=> {
  
  return ( jwt.sign(
    { data: { _id: user._id, } },
    "JWT_SECRET",
    { expiresIn: "750 hour" }
  ));
  }


  export const authToken=(req:any, res:any, next:any) =>{
    var incomingToken = req.header("Authorization");
    if (incomingToken) {
      jwt.verify(incomingToken, "JWT_SECRET", function (err:any, decoded:any) {
        if (decoded) {
          req.userId = decoded.data._id;
        
          next();
        } else {
          res.status(401).json({
            message: "Invalid Token",
          });
        }
      });
    } else {
      res.status(401).json({
        message: "No Token Present",
      });
    }
  }

 

  