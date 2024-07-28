import { Request, Response } from "express";
import {
  createTask,
  getAllTasks,
  updateTask,
  deleteTask,
} from "../services/taskService";

export const createTaskController = async (req: Request, res: Response) => {
  const { title, description, status } = req.body;

  try {
    const task = await createTask({ title, description, status });
    res.status(201).json({ message: "Task created successfully...", task });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getAllTasksController = async (req: Request, res: Response) => {
  try {
    const tasks = await getAllTasks();
    res.status(200).json(tasks);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const updateTaskController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description, status } = req.body;

  try {
    const task = await updateTask(Number(id), { title, description, status });
    res.status(200).json({ message: "Task updated successfully...", task });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteTaskController = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await deleteTask(Number(id));
    res.status(200).json({ message: "Task deleted successfully..." });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
