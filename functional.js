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
const hasColor = c => figure => figure.color == c;

const argsToArray = fn => (...args) => fn(args)

// Identity Value
// a + 0 = a
// a * 1 = a
// a.concat([])  = a
// a.concat('')  = a
// a || false = a
// a && true = a
// and(a, _ => true) = a
// or(a, _ => false) = a
// identity = a => a

const filter = predicate => figures => figures.filter(predicate);
const map = projection => list => list.map(projection);
const reduce = (reducer, initValue) => list => list.reduce(reducer, initValue);

const and = (p1, p2) => value => p1(value) && p2(value);
const or = (func_1, func_2) => value => func_1(value) || func_2(value);
const all = argsToArray(reduce(and));
const any = argsToArray(reduce(or));

const isSquare = figure => figure.width == figure.height;
const isRectangle = figure => figure.width != figure.height;

const calcArea = figure => figure.width * figure.height;
const calcPerimeter = figure => (figure.width + figure.height) * 2;


const add = (a, b) => a + b;
const max = reduce((a, b) => Math.max(a, b), -Infinity);
const sum = reduce(add, 0)

const flow = (...steps) => value => steps.reduce((result , step) => step(result), value);
const combine = (...listValue) => value => listValue.reduceRight((acc , func) => func(acc), value);
const combineFlow = (...steps) => flow(...steps.reverse());

let Red = 'red';
let sumOfPerimetersRedRectangles = flow(
    filter(and(hasColor(Red), isRectangle)),
    map(calcPerimeter),
    sum
)(shapes);
console.log("Perimeter sums", sumOfPerimetersRedRectangles);


let Black = 'black';
let maxAreaFromAllBlackSquare = flow(
    filter(and(hasColor(Black), isSquare)),
    map(calcArea),
    max
)(shapes)
console.log("Max area", maxAreaFromAllBlackSquare);

let maxAreaFromAllBlackSquareRevers = combineFlow(
    max,
    map(calcArea),
    filter(and(hasColor(Black), isSquare))
)(shapes)
console.log("Max area", maxAreaFromAllBlackSquareRevers);