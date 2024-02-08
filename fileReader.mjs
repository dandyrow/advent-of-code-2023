import { readFile } from "node:fs/promises"
import { resolve } from "node:path"

async function readLines(path) {
    const filePath = resolve(path);
    return await readFile(filePath, { encoding: "utf8" });
}

export default readLines;