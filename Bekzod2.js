function Bekzod(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = Bekzod(2);
const triple = Bekzod(3);

console.log(double(5));
console.log(triple(5));
