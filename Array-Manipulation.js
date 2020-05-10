// version 1 ---------------- not fast enough
// function arrayManipulation(n, queries) {
//     var arr=[];
    // var max=0;
    // for (let i=0; i<n; i++) {
    //     arr.push(0)
    // }
    // for (let i=0; i<queries.length; i++) {
    //     for (let j=queries[i][0]-1; j<queries[i][1]; j++){
    //         arr[j]=arr[j]+queries[i][2];
    //         if (arr[j]>max) {max = arr[j]}
    //     }
    //     console.log(arr)
    // }
    // console.log(max);
    // return max;
  
//   }
  
// version 2 ---------------- tricky fast version
function arrayManipulation(n, queries) {
    var arr = [];
    var max = 0;
    for (let l = 0; l < n; l++) {
        arr[l] = 0; //apparently, this works as push
    }
    for (let i = 0; i < queries.length; i++) {
       // add target number to the arr element at index=queries[i][0]  and subtract target number from the arr element at index=queries[i][0]+1 => this will allow us to build each element of the final array by summing all elements before it. The aim of this trick is to lower time complexity
        arr[queries[i][0]-1] += queries[i][2];
        if (queries[i][1] < arr.length) {
            arr[queries[i][1]] -= queries[i][2];
        }
    }
    for (let j = 1; j < n; j++) {
        arr[j] += arr[j-1];
    }
    for (let k = 0; k < arr.length; k++) {
        max = Math.max(max, arr[k]);
    }
    return max;
}

  var m=5;
  var q=[
  [1, 2, 100],
  [2, 5, 100],
  [3, 4, 100]
  ]
  
  arrayManipulation(m,q);