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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.getAllTasks = exports.createTask = void 0;
const prismaClient_1 = __importDefault(require("../prismaClient"));
const createTask = (data) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const status = (_a = data.status) === null || _a === void 0 ? void 0 : _a.toUpperCase();
    return prismaClient_1.default.task.create({
        data: Object.assign(Object.assign({}, data), { status }),
    });
});
exports.createTask = createTask;
const getAllTasks = () => __awaiter(void 0, void 0, void 0, function* () {
    return prismaClient_1.default.task.findMany();
});
exports.getAllTasks = getAllTasks;
const updateTask = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const status = (_a = data.status) === null || _a === void 0 ? void 0 : _a.toUpperCase();
    return prismaClient_1.default.task.update({
        where: { id },
        data: Object.assign(Object.assign({}, data), (status && { status })),
    });
});
exports.updateTask = updateTask;
const deleteTask = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return prismaClient_1.default.task.delete({
        where: { id },
    });
});
exports.deleteTask = deleteTask;
