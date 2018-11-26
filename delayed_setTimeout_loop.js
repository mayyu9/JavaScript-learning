function delayedIteration(index, iterableArray) { 
  if (index >= iterableArray.length) { 
    return; 
  }  
  console.log(iterableArray[index]); 
  index += 1; 
  setTimeout(delayedIteration.bind({}, index, iterableArray), 2000); 
} 
 delayedIteration(0, [4,3,2,5,6]);
