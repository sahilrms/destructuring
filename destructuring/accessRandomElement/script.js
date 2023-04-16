let myList = [1, 1, 2, 3, 45, 5, 6, 2, 2, 2, 9, 70, 77, 55, 32, 221, 753, 123, 0987, 3432];
function accessRandom(myList){
    let newList= [myList[0],myList[1],myList[myList.length-1]]
    return newList
}
console.log(accessRandom(myList))