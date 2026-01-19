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
exports.handleCommand = handleCommand;
const enums_1 = require("../enums/enums");
const read_write_1 = require("../File-Operations/read-write");
const commands_validations_1 = require("./commands-validations");
function handleCommand(command, args) {
    return __awaiter(this, void 0, void 0, function* () {
        switch (command) {
            case enums_1.Command.ADD:
                yield handleAddCommand(args);
                break;
            default:
                console.error(`Command '${command}' is not yet implemented.`);
                process.exit(1);
        }
    });
}
function handleAddCommand(args) {
    return __awaiter(this, void 0, void 0, function* () {
        // args[0] = command, args[1] = taskName, args[2] = description, args[3] = time, args[4] = completed
        const validation = (0, commands_validations_1.validateAddTaskCommand)(args);
        if (!validation.isValid) {
            console.error(`❌ ${validation.error}`);
            process.exit(1);
        }
        const task = {
            userId: "user1", // TODO: Get from user session
            taskId: Date.now(), // Generate unique ID
            taskName: args[1],
            description: args[2],
            time: args[3],
            completed: args[4].toLowerCase() === 'true'
        };
        yield (0, read_write_1.writeIntoFile)(enums_1.Command.ADD, task);
    });
}
