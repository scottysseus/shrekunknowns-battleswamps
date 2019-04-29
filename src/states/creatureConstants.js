const CREATURE_NAMES = {
    DONKEY: "donkey",
    FAIRY: "fairy",
    GNOME: "gnome",
    UNICORN: "unicorn",
    PHOENIX: "phoenix",
    IMP: "imp",
    GOBLIN: "goblinWarrior"
}

let BASE_ENEMY = {
    turnProb: 0.02,
    knockbackVelocityX: 200,
    knockbackVelocityY: -200,
    spawnHeight: 0, // height above ground level
    spawnDistance: 0, // minimum spawn distance from store
};

let DONKEY = {
    ...BASE_ENEMY,
    name: CREATURE_NAMES.DONKEY,
    price: 500,
    baseSpeed: 200,
    baseHealth: 3,
    baseSpawnRate: 1800,
};

let FAIRY = {
    ...BASE_ENEMY,
    name: CREATURE_NAMES.FAIRY,
    price: 50,
    baseSpeed: 60,
    baseHealth: 1,
    baseSpawnRate: 900,
    flier: true,
    knockbackVelocityY: 0,
};

let UNICORN = {
    ...BASE_ENEMY,
    name: CREATURE_NAMES.UNICORN,
    price: 150,
    baseSpeed: 150,
    baseHealth: 3,
    baseSpawnRate: 1600,
};

let GNOME = {
    ...BASE_ENEMY,
    name: CREATURE_NAMES.GNOME,
    price: 100,
    baseSpeed: 100,
    baseHealth: 2,
    baseSpawnRate: 1200,
};

let PHOENIX = {
    ...BASE_ENEMY,
    name: CREATURE_NAMES.PHOENIX,
    price: 100,
    baseSpeed: 125,
    baseHealth: 2,
    baseSpawnRate: 1200,
};

let IMP = {
    ...BASE_ENEMY,
    name: CREATURE_NAMES.IMP,
    price: 100,
    baseSpeed: 125,
    baseHealth: 1,
    baseSpawnRate: 1200,
};

let GOBLIN = {
    ...BASE_ENEMY,
    name: CREATURE_NAMES.GOBLIN,
    price: 100,
    baseSpeed: 85,
    baseHealth: 4,
    baseSpawnRate: 1200,
};

const CREATURE_LIST = [DONKEY, FAIRY, GNOME, UNICORN, PHOENIX];
const CREATURE_NAME_MAP = {};

CREATURE_LIST.forEach((creature) => {
    CREATURE_NAME_MAP[creature.name] = creature;
});

const CreatureConstants = {
    CREATURE_NAMES,
    DONKEY,
    UNICORN,
    FAIRY,
    GNOME,
    PHOENIX,
    CREATURE_LIST,
    CREATURE_NAME_MAP
};

export default CreatureConstants;