var a = [0,0,1,1,2,2,1,1,1,0, 0]


function abc(a){
  //debugger;
var newArray=[];
var fullLength = a.length-1;

var counter0end = 0;

for(var i=0; i<a.length; i++ ){
  if(a[i] === 0){
    newArray.unshift(0);
    counter0end++
  }
  else if(a[i] === 2)
    newArray.push(2);
  else{
    newArray.splice(counter0end, 0, 1);
  }

}
  return newArray;
}

console.log(abc(a));


//output: [0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2]
