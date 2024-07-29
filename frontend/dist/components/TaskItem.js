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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var axios_1 = __importDefault(require("axios"));
var react_toastify_1 = require("react-toastify");
var TaskItem = function (_a) {
    var task = _a.task, onUpdateTask = _a.onUpdateTask, onDeleteTask = _a.onDeleteTask;
    var _b = (0, react_1.useState)(false), isEditing = _b[0], setIsEditing = _b[1];
    var _c = (0, react_1.useState)(task.title), title = _c[0], setTitle = _c[1];
    var _d = (0, react_1.useState)(task.description), description = _d[0], setDescription = _d[1];
    var _e = (0, react_1.useState)(task.status), status = _e[0], setStatus = _e[1];
    var _f = (0, react_1.useState)({}), errors = _f[0], setErrors = _f[1];
    var validateForm = function () {
        var newErrors = {};
        if (!title) {
            newErrors.title = "Title is required";
        }
        if (!description) {
            newErrors.description = "Description is required";
        }
        return newErrors;
    };
    var handleUpdate = function () {
        var validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        var updatedTask = { title: title, description: description, status: status }; // Exclude `id`
        axios_1.default
            .put("http://localhost:4000/api/update/".concat(task.id), updatedTask)
            .then(function (response) {
            react_toastify_1.toast.success("Task updated successfully!");
            onUpdateTask(response.data);
            setIsEditing(false);
            setErrors({});
        })
            .catch(function (error) {
            react_toastify_1.toast.error("There was an error updating the task!");
            console.error("There was an error updating the task!", error.response);
        });
    };
    var handleDelete = function () {
        axios_1.default
            .delete("http://localhost:4000/api/delete/".concat(task.id))
            .then(function () {
            react_toastify_1.toast.success("Task deleted successfully!");
            onDeleteTask(task.id);
        })
            .catch(function (error) {
            react_toastify_1.toast.error("There was an error deleting the task!");
            console.error("There was an error deleting the task!", error.response);
        });
    };
    return (react_1.default.createElement("div", { className: "p-4 border rounded-md shadow-sm text-center" }, isEditing ? (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("input", { type: "text", value: title, onChange: function (e) { return setTitle(e.target.value); }, className: "block w-full mb-2 border border-gray-300 rounded-md shadow-sm" }),
        errors.title && (react_1.default.createElement("p", { className: "text-red-500 text-xs mt-1" }, errors.title)),
        react_1.default.createElement("textarea", { value: description, onChange: function (e) { return setDescription(e.target.value); }, className: "block w-full mb-2 border border-gray-300 rounded-md shadow-sm" }),
        errors.description && (react_1.default.createElement("p", { className: "text-red-500 text-xs mt-1" }, errors.description)),
        react_1.default.createElement("select", { value: status, onChange: function (e) { return setStatus(e.target.value); }, className: "block w-full mb-2 border border-gray-300 rounded-md shadow-sm" },
            react_1.default.createElement("option", { value: "To_Do" }, "To-Do"),
            react_1.default.createElement("option", { value: "In_Progress" }, "In Progress"),
            react_1.default.createElement("option", { value: "Done" }, "Done")),
        react_1.default.createElement("button", { onClick: handleUpdate, className: "px-4 py-2 bg-green-500 text-white rounded-md mr-2" }, "Update"),
        react_1.default.createElement("button", { onClick: function () { return setIsEditing(false); }, className: "px-4 py-2 bg-gray-500 text-white rounded-md" }, "Cancel"))) : (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("h2", { className: "text-xl font-bold" }, task.title),
        react_1.default.createElement("p", null, task.description),
        react_1.default.createElement("p", { className: "text-sm text-gray-500" }, task.status),
        react_1.default.createElement("button", { onClick: function () { return setIsEditing(true); }, className: "px-4 mt-4 py-2 bg-yellow-500 text-white rounded-md mr-2" }, "Edit"),
        react_1.default.createElement("button", { onClick: handleDelete, className: "px-4 mt-4 py-2 bg-red-500 text-white rounded-md" }, "Delete")))));
};
exports.default = TaskItem;
