let person = {
    name:"Mithun",
    age:21,
    address:{
        street:"14/1 pan street",
        city:"sector 12 bangar town, noida",
        state:"Uttar Pradesh"
    }
}

function extractData(person){
    let name=person.name;
    let street=person.address.street
    return {name,street}
}
console.log(extractData(person))