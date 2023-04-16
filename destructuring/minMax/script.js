let person = [1, 1, 2, 3, 45, 5, 6, 2, 2, 2, 9, 70, 77, 55, 32, 221, 753, 123, 0987, 3432];
function minMax(myList){
    let max= Math.max(...myList)
    let min= Math.min(...myList)
    return {max,min}
}
console.log(minMax(myList))