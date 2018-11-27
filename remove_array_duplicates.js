
let arr =[
  {
    fname:'abc',
    lname: 'xyz',
    age: 23
  },
  {
    fname:'abc1',
    lname: 'xyz1',
    age: 20
  },
  {
    fname:'abc',
    lname: 'xyz',
    age: 23
  }
];

/* reomval of duplicates using the object property*/
function removeDuplicates(myArr, prop) {
debugger;
    return myArr.filter((obj, pos, arr) => {
        return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
    });
}

console.log( removeDuplicates(arr, "fname"));
console.log( removeDuplicates(arr, "lname"));
console.log( removeDuplicates(arr, "age"));


/* uaing Set, first stringify the object then apply set on it. parse the object to make it object*/
let x= Array.from(new Set(arr.map(JSON.stringify))).map(JSON.parse);
console.log(x);
