import { readFile } from "node:fs/promises"
import { resolve } from "node:path"

const NEWLINE = "\r\n";

async function readLines(path) {
    const filePath = resolve(path);
    return await readFile(filePath, { encoding: "utf8" });
}

const execute = (path, func) => {
    readLines(path)
        .then(input => func(input))
        .catch(err => console.err(err));
};

export { execute, NEWLINE };