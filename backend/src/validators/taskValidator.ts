import Joi from "joi";
import { Request, Response, NextFunction } from "express";

//Data validation library
const taskSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  status: Joi.string().valid("To_Do", "In_Progress", "Done").required(),
});

export const validateTask = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = taskSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};
