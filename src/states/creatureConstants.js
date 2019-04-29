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
    flier: false,
    altitude: 0, // height above ground level
    minDistance: 250, // minimum spawn distance from store
};

let DONKEY = {
    ...BASE_ENEMY,
    name: CREATURE_NAMES.DONKEY,
    price: 20,
    baseSpeed: 200,
    baseHealth: 3,
    baseSpawnRate: 3600,
    minDistance: 1200
};

let FAIRY = {
    ...BASE_ENEMY,
    name: CREATURE_NAMES.FAIRY,
    price: 10,
    baseSpeed: 60,
    baseHealth: 1,
    baseSpawnRate: 2400,
    flier: true,
    altitude: 100,
    knockbackVelocityY: 0,
};

let UNICORN = {
    ...BASE_ENEMY,
    name: CREATURE_NAMES.UNICORN,
    price: 40,
    baseSpeed: 150,
    baseHealth: 3,
    baseSpawnRate: 4200,
    minDistance: 2400
};

let GNOME = {
    ...BASE_ENEMY,
    name: CREATURE_NAMES.GNOME,
    price: 20,
    baseSpeed: 100,
    baseHealth: 2,
    baseSpawnRate: 3600,
    minDistance: 1200
};

let PHOENIX = {
    ...BASE_ENEMY,
    name: CREATURE_NAMES.PHOENIX,
    price: 60,
    baseSpeed: 125,
    baseHealth: 2,
    baseSpawnRate: 4200,
    altitude: 400,
    flier: true,
};

let IMP = {
    ...BASE_ENEMY,
    name: CREATURE_NAMES.IMP,
    price: 10,
    baseSpeed: 125,
    baseHealth: 1,
    baseSpawnRate: 2400,
};

let GOBLIN = {
    ...BASE_ENEMY,
    name: CREATURE_NAMES.GOBLIN,
    price: 40,
    baseSpeed: 85,
    baseHealth: 4,
    baseSpawnRate: 4200,
    minDistance: 2400
};

const CREATURE_LIST = [DONKEY, FAIRY, GNOME, UNICORN, PHOENIX, IMP, GOBLIN];
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
    IMP,
    GOBLIN,
    CREATURE_LIST,
    CREATURE_NAME_MAP
};

export default CreatureConstants;