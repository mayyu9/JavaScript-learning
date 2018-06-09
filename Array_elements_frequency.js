/*
find the occurence of each element of the array and display the count

this logic is getting the count but duplicate values still exist.
*/


var a = ['mango', 'apple', 'kiwi', 'mango', 'apple',  'mango', 'apple', 'mango'];
function fun(a){
 let res = [];
 debugger;
var b = a.map( (data,i) => {

	let c = data; let count = 0;
  a.filter(x => {
  	if(x === c) {
    	count ++;
    }
  });
  let d ={};
  d.value = c;
  d.count = count;
  res.push(d);
});
return res;
}

console.log(fun(a));
