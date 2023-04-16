let x=10,y=8
console.log("Initial values are ");
console.log(`x=${x} and y=${y}`);
function swapValues(x,y){
  x=x+y;
  y=x-y;
  x=x-y;
  return ([x,y])
}
let swapped=swapValues(x,y);
console.log(`Returned values are x=${swapped[0]} and y=${swapped[1]}`);