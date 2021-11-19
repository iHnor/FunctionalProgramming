let shapes = [
    { color: 'black', width: 10, height: 10 },
    { color: 'red', width: 12, height: 15 },
    { color: 'red', width: 6, height: 6 },
    { color: 'red', width: 6, height: 10 },
    { color: 'black', width: 12, height: 6 },
    { color: 'white', width: 23, height: 34 },
    { color: 'black', width: 5, height: 5 },
    { color: 'yellow', width: 23, height: 23 }
];

const and = (func_1, func_2) => value => func_1(value) && func_2(value);
const or = (func_1, func_2) => value => func_1(value) || func_2(value);
const all = list => list.reduce((func_1, func_2) => value => func_1(value) && func_2(value));
const any = list => list.reduce((func_1, func_2) => value => func_1(value) || func_2(value));

const hasColor = c => figure => figure.color == c;

const isSquare = figure => figure.width == figure.height;
const calcArea = figure => figure.width * figure.height;
