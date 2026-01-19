"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("../enums/enums");
const command_services_1 = require("../command-services/command-services");
// Ignoring first 2 arguments as first gives us path of executable that was used to execute our project e.g ts-node or npm
// second tells us the path of file that was run by executable let's say index.js
const args = process.argv.slice(2);
if (args.length === 0) {
    console.error("❌ No command provided");
    console.info(`✓ Valid commands: ${Object.values(enums_1.Command).join(", ")}`);
    process.exit(1);
}
const command = args[0];
if (!Object.values(enums_1.Command).includes(command)) {
    console.error(`❌ Invalid command: '${command}'`);
    console.info(`✓ Valid commands: ${Object.values(enums_1.Command).join(", ")}`);
    process.exit(1);
}
// Handle the command
(0, command_services_1.handleCommand)(command, args).catch(error => {
    console.error("❌ Error:", error.message);
    process.exit(1);
});
