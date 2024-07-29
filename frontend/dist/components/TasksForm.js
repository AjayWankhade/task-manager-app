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
var TaskForm = function (_a) {
    var onAddTask = _a.onAddTask;
    var _b = (0, react_1.useState)(""), title = _b[0], setTitle = _b[1];
    var _c = (0, react_1.useState)(""), description = _c[0], setDescription = _c[1];
    var _d = (0, react_1.useState)("To_Do"), status = _d[0], setStatus = _d[1];
    var handleSubmit = function (event) {
        event.preventDefault();
        var newTask = { title: title, description: description, status: status };
        console.log("Sending task:", newTask);
        axios_1.default
            .post("http://localhost:4000/api/create", newTask)
            .then(function (response) {
            react_toastify_1.toast.success("Task created successfully!");
            console.log("Task created:", response.data);
            onAddTask(response.data);
            setTitle("");
            setDescription("");
            setStatus("To_Do");
        })
            .catch(function (error) {
            react_toastify_1.toast.error("There was an error creating the task!");
            console.error("There was an error creating the task!", error.response);
        });
    };
    return (react_1.default.createElement("form", { onSubmit: handleSubmit, className: "mb-6 p-2 border rounded-lg shadow-md bg-white max-w-xs mx-auto" },
        react_1.default.createElement("div", { className: "mb-4" },
            react_1.default.createElement("label", { className: "block text-sm font-medium text-gray-700" }, "Title"),
            react_1.default.createElement("input", { type: "text", className: "mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2", value: title, onChange: function (e) { return setTitle(e.target.value); }, required: true })),
        react_1.default.createElement("div", { className: "mb-4" },
            react_1.default.createElement("label", { className: "block text-sm font-medium text-gray-700" }, "Description"),
            react_1.default.createElement("textarea", { className: "mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2", value: description, onChange: function (e) { return setDescription(e.target.value); }, rows: 4, required: true })),
        react_1.default.createElement("div", { className: "mb-4" },
            react_1.default.createElement("label", { className: "block text-sm font-medium text-gray-700" }, "Status"),
            react_1.default.createElement("select", { className: "mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2", value: status, onChange: function (e) {
                    return setStatus(e.target.value);
                }, required: true },
                react_1.default.createElement("option", { value: "To_Do" }, "To-Do"),
                react_1.default.createElement("option", { value: "In_Progress" }, "In Progress"),
                react_1.default.createElement("option", { value: "Done" }, "Done"))),
        react_1.default.createElement("button", { type: "submit", className: "w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors" }, "Add Task")));
};
exports.default = TaskForm;
