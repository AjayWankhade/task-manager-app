"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var axios_1 = __importDefault(require("axios"));
var TaskItem_1 = __importDefault(require("./TaskItem"));
var TasksForm_1 = __importDefault(require("./TasksForm"));
var AllTaskList = function () {
    var _a = (0, react_1.useState)([]), tasks = _a[0], setTasks = _a[1];
    (0, react_1.useEffect)(function () {
        axios_1.default
            .get("http://localhost:4000/api/tasks")
            .then(function (response) {
            setTasks(response.data);
        })
            .catch(function (error) {
            console.error("There was an error fetching the tasks!", error);
        });
    }, []);
    var addTask = function (task) {
        setTasks(__spreadArray(__spreadArray([], tasks, true), [task], false));
    };
    var updateTask = function (updatedTask) {
        setTasks(tasks.map(function (task) { return (task.id === updatedTask.id ? updatedTask : task); }));
    };
    var deleteTask = function (taskId) {
        setTasks(tasks.filter(function (task) { return task.id !== taskId; }));
    };
    return (react_1.default.createElement("div", { className: "container mx-auto p-4" },
        react_1.default.createElement("h1", { className: "text-2xl font-bold mb-4" }, "Task Manager"),
        react_1.default.createElement(TasksForm_1.default, { onAddTask: addTask }),
        react_1.default.createElement("div", { className: "grid grid-cols-1 gap-4" }, tasks.map(function (task) { return (react_1.default.createElement(TaskItem_1.default, { key: task.id, task: task, onUpdateTask: updateTask, onDeleteTask: deleteTask })); }))));
};
exports.default = AllTaskList;
