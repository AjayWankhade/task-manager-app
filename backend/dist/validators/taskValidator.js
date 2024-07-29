"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTask = void 0;
const joi_1 = __importDefault(require("joi"));
const taskSchema = joi_1.default.object({
    title: joi_1.default.string().required(),
    description: joi_1.default.string().required(),
    status: joi_1.default.string().valid("To_Do", "In_Progress", "Done").required(),
});
const validateTask = (req, res, next) => {
    const { error } = taskSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};
exports.validateTask = validateTask;
