let shapes = [
    { color: 'black', width: 20, height: 20 },
    { color: 'red', width: 12, height: 15 },
    { color: 'red', width: 4, height: 13 },
    { color: 'white', width: 23, height: 34 }
]

const and = (func_1, func_2) => value => func_1(value) && func_2(value);
