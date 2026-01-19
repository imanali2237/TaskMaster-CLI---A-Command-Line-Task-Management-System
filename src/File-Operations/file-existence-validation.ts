import fs from "fs"
import path from "path"
const DATA_DIR=path.join(process.cwd(),"data")
const TASK_FILE=path.join(DATA_DIR,"tasks.json")
export async function ensureFileExist() {
    if(!fs.existsSync(DATA_DIR)){
        fs.mkdirSync(DATA_DIR,{recursive:true})
    }
    if(!fs.existsSync(TASK_FILE)){
        fs.writeFileSync(TASK_FILE,JSON.stringify([],null,2))
    }
    return TASK_FILE
}