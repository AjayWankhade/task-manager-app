"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTaskController = exports.updateTaskController = exports.getAllTasksController = exports.createTaskController = void 0;
const taskService_1 = require("../services/taskService");
const createTaskController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, status } = req.body;
    try {
        const task = yield (0, taskService_1.createTask)({ title, description, status });
        res.status(201).json({ message: "Task created successfully...", task });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.createTaskController = createTaskController;
const getAllTasksController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tasks = yield (0, taskService_1.getAllTasks)();
        res.status(200).json(tasks);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.getAllTasksController = getAllTasksController;
const updateTaskController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { title, description, status } = req.body;
    try {
        const task = yield (0, taskService_1.updateTask)(Number(id), { title, description, status });
        res.status(200).json({ message: "Task updated successfully...", task });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.updateTaskController = updateTaskController;
const deleteTaskController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield (0, taskService_1.deleteTask)(Number(id));
        res.status(200).json({ message: "Task deleted successfully..." });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.deleteTaskController = deleteTaskController;
