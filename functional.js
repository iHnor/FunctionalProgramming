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
const isRectangle = figure => figure.width != figure.height;

const calcArea = figure => figure.width * figure.height;
const calcPerimeter = figure => (figure.width + figure.height) * 2;

const add = (a, b) => a + b;
const max = list => list.reduce((a, b) => Math.max(a, b));
const sum = list => list.reduce(add, 0);

const map = value => list => list.map(value);
const reduce = (func, value) => list => list.reduce(func, value);
const filter = func => figures => figures.filter(func);
