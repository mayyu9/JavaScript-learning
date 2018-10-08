// Initialize:
//     max_so_far = 0
//     max_end = 0

// Loop for each element of the array
//   (a) max_end = max_ending_here + a[i]
//   (b) if(max_end < 0)
//             max_end = 0
//   (c) if(max_so_far < max_end)
//             max_so_far = max_end
// return max_so_far

// max_end- look for all positive contiguous segments of the array (max_ending_here is used for this).

// max_so_far - maximum sum contiguous segment among all positive segments (max_so_far is used for this)

//Each time we get a positive sum compare it with max_so_far and update max_so_far if it is greater than max_so_far


var a = [-2, -3, 4, -1, -2, 1, 5, -3];
//console.log(a.length)

function largestContigiousSum(b){

  var len = b.length;
  var max_end=0, max_so_far=0,start=0,end=0,s=0;

  for(let i =0; i<len; i++){
    max_end += b[i];

    if(max_so_far < max_end){
      max_so_far = max_end;
      start =s;
      end =i;
    }

    if(max_end < 0) {
      max_end = 0;
      s = i + 1;
    }
  }

  return {
    max: max_so_far,
    start: start,
    end: end,
  };
}

console.log(largestContigiousSum(a));
