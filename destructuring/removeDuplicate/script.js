let myList = [1, 1, 2, 3, 45, 5, 6, 2, 2, 2, 9, 70, 77, 55, 32, 221, 753, 123, 0987, 3432];
console.log("Initial list is ");
console.log(myList)
function removeDuplicate() {
    console.log("removing duplicate elements..........\n");
    let newList = new Set(myList)
    console.log("List after removed duplicat elements are \n");
    console.log(newList);
}
removeDuplicate();

