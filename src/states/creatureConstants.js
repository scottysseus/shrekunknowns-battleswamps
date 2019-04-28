const CREATURE_NAMES = {
    DONKEY: "donkey",
    FAIRY: "fairy",
    GNOME: "gnome",
    UNICORN: "unicorn"
}

const DONKEY = {
    name: CREATURE_NAMES.DONKEY,
    price: 500,
    baseSpeed: 200,
    baseHealth: 3,
    baseSpawnRate: 1800
};

const FAIRY = {
    name: CREATURE_NAMES.FAIRY,
    price: 50,
    baseSpeed: 150,
    baseHealth: 1,
    baseSpawnRate: 900
};

const UNICORN = {
    name: CREATURE_NAMES.UNICORN,
    price: 150,
    baseSpeed: 150,
    baseHealth: 3,
    baseSpawnRate: 1600
};

const GNOME = {
    name: CREATURE_NAMES.GNOME,
    price: 100,
    baseSpeed: 100,
    baseHealth: 2,
    baseSpawnRate: 1200
};

const CREATURE_LIST = [DONKEY, FAIRY, GNOME, UNICORN];

const CreatureConstants = {
    CREATURE_NAMES,
    DONKEY,
    UNICORN,
    FAIRY,
    GNOME,
    CREATURE_LIST
};

export default CreatureConstants;