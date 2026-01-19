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
exports.writeIntoFile = writeIntoFile;
const fs_1 = __importDefault(require("fs"));
const enums_1 = require("../enums/enums");
const file_existence_validation_1 = require("./file-existence-validation");
function writeIntoFile(command, payload) {
    return __awaiter(this, void 0, void 0, function* () {
        const TASK_FILE = yield (0, file_existence_validation_1.ensureFileExist)();
        switch (command) {
            case enums_1.Command.ADD:
                const tasks = JSON.parse(fs_1.default.readFileSync(TASK_FILE, 'utf-8'));
                tasks.push(payload);
                fs_1.default.writeFileSync(TASK_FILE, JSON.stringify(tasks, null, 2));
                console.log(`✓ Task added successfully!`);
                break;
            default:
                break;
        }
    });
}
