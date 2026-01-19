"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_process_1 = require("node:process");
node_process_1.argv.forEach((val, index) => {
    console.log(`${index}:${val}}`);
});
