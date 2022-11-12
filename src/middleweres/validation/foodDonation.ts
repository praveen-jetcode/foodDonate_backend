import { check,validationResult } from 'express-validator'

export const foodValidation = [
    check('foodName').trim().not().isEmpty().withMessage("enter the personname"),
    check('quantity').trim().not().isEmpty().withMessage("enter the quantity"),
    check('city').trim().not().isEmpty().withMessage("enter the city"),
    check('required').trim().not().isEmpty().withMessage("enter the required")
   

]

export const validationFood = (req:any, res:any, next:any) => {
    const result = validationResult(req).array();
    if (!result.length) return next();
        const error = result[0].msg;
  
    res.json({ success: false, message: error });
  };