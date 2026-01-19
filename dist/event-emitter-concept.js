"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_events_1 = __importDefault(require("node:events"));
class MyEmitter extends node_events_1.default {
}
const myEmitter = new MyEmitter();
myEmitter.on("event", function (a, b) {
    console.log(a, b, this, this === myEmitter);
});
myEmitter.emit("event", "a", "b");
