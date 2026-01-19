import fs from "fs"
import path from "path"
import { Command } from "../enums/enums";
import { Task } from "./interfaces";
import { ensureFileExist } from "./file-existence-validation";


export async function writeIntoFile(command:Command, payload:Task) {
    const TASK_FILE = await ensureFileExist()
    switch (command) {
        case Command.ADD:
            const tasks = JSON.parse(fs.readFileSync(TASK_FILE, 'utf-8'))
            tasks.push(payload)
            fs.writeFileSync(TASK_FILE, JSON.stringify(tasks, null, 2))
            console.log(`✓ Task added successfully!`)
            break;
    
        default:
            break;
    }
}