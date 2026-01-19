import { Command } from "../enums/enums";
import { Task } from "../File-Operations/interfaces";
import { writeIntoFile } from "../File-Operations/read-write";
import { validateAddTaskCommand } from "./commands-validations";

export async function handleCommand(command: Command, args: string[]) {
    switch (command) {
        case Command.ADD:
            await handleAddCommand(args);
            break;
        
        default:
            console.error(`Command '${command}' is not yet implemented.`);
            process.exit(1);
    }
}

async function handleAddCommand(args: string[]) {
    // args[0] = command, args[1] = taskName, args[2] = description, args[3] = time, args[4] = completed
    const validation = validateAddTaskCommand(args);
    
    if (!validation.isValid) {
        console.error(`❌ ${validation.error}`);
        process.exit(1);
    }
    
    const task: Task = {
        userId: "user1", // TODO: Get from user session
        taskId: Date.now(), // Generate unique ID
        taskName: args[1],
        description: args[2],
        time: args[3],
        completed: args[4].toLowerCase() === 'true'
    };
    
    await writeIntoFile(Command.ADD, task);
}
