"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const taskController_1 = require("../controllers/taskController");
const taskValidator_1 = require("../validators/taskValidator");
const router = express_1.default.Router();
router.get("/tasks", taskController_1.getAllTasksController);
router.post("/create", taskValidator_1.validateTask, taskController_1.createTaskController);
router.put("/update/:id", taskValidator_1.validateTask, taskController_1.updateTaskController);
router.delete("/delete/:id", taskController_1.deleteTaskController);
exports.default = router;
