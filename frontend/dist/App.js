"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var HomePage_1 = __importDefault(require("./pages/HomePage"));
require("react-toastify/dist/ReactToastify.css");
var react_toastify_1 = require("react-toastify");
var App = function () {
    return (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement("div", { className: "min-h-screen bg-gray-100" },
            react_1.default.createElement("nav", { className: "bg-blue-500 p-4" },
                react_1.default.createElement(react_router_dom_1.Link, { to: "/", className: "text-white mr-4" }, "Task Management Application")),
            react_1.default.createElement(react_router_dom_1.Routes, null,
                react_1.default.createElement(react_router_dom_1.Route, { path: "/", element: react_1.default.createElement(HomePage_1.default, null) }))),
        react_1.default.createElement(react_toastify_1.ToastContainer, null)));
};
exports.default = App;
