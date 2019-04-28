const CREATURE_NAMES = {
    DONKEY: "donkey",
    FAIRY: "fairy",
    GNOME: "gnome",
    UNICORN: "unicorn"
}

let BASE_ENEMY = {
    turnProb: 0.05,
    knockbackVelocityX: 200,
    knockbackVelocityY: -200,
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
    baseSpeed: 50,
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

const CREATURE_LIST = [DONKEY, FAIRY, GNOME, UNICORN];
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
    CREATURE_LIST,
    CREATURE_NAME_MAP
};

export default CreatureConstants;