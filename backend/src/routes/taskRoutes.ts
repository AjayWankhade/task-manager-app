import express from "express";
import {
  createTaskController,
  getAllTasksController,
  updateTaskController,
  deleteTaskController,
} from "../controllers/taskController";
import { validateTask } from "../validators/taskValidator";

const router = express.Router();

router.get("/tasks", getAllTasksController);
router.post("/create", validateTask, createTaskController);
router.put("/update/:id", validateTask, updateTaskController);
router.delete("/delete/:id", deleteTaskController);

export default router;
