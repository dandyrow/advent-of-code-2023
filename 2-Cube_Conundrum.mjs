import readLines from "./fileReader.mjs";

function isGamePossible(gameSets) {
    const maxCubes = new Map([["red", 12], ["green", 13], ["blue", 14]])
    return gameSets.every(set => set.split(",").every(cubes => {
        const [cubeAmount, cubeColour] = cubes.trim().split(" ");
        return cubeAmount <= maxCubes.get(cubeColour);
    }));
}

readLines("./inputs/2-input.txt")
    .then(input => {
        const output = input.split("\r\n")
            .map(line => {
                const [gameId, gameSets] = line.split(":");
                return [parseInt(gameId.split(" ")[1]), gameSets.split(";")]
            })
            .filter(([_, gameSets]) => isGamePossible(gameSets))
            .reduce((sum, [gameId, _]) => sum + gameId, 0);

        console.log(`Part One: ${output}`);
    })
    .catch((err) => console.error(err));

function powerOfMinimumCubeSet(line) {
    const gameSets = line.split(":")[1].split(";");
    const minimumCubes = new Map([["red", 0], ["green", 0], ["blue", 0]]);

    gameSets.map(set => set.split(",").map(cubes => {
        const [cubeAmount, cubeColour] = cubes.trim().split(" ");
        if (cubeAmount > minimumCubes.get(cubeColour)) {
            minimumCubes.set(cubeColour, parseInt(cubeAmount));
        }
    }));

    let power = 1;
    minimumCubes.forEach((v, _) => power *= v);
    return power;
}

readLines("./inputs/2-input.txt")
    .then(input => {
        const output = input.split("\r\n")
            .map(line => powerOfMinimumCubeSet(line))
            .reduce((a, b) => a + b);

        console.log(`Part Two: ${output}`);
    })
    .catch((err) => console.error(err));
