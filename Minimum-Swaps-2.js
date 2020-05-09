
// --------------------- version 1
// function minimumSwaps(arr) {
//     var origArr = [...arr]
//     var zeros = 0;
//     var swaps = 0;
//     do {
//         zeros=0;
//         let distArr = origArr.map((elem,index)=>{
//           return index-(elem-1)
//         })
//         console.log(distArr)
//         let minElem=0, maxElem = 0, minIx=0, maxIx=0;
//         for (let i=0; i<distArr.length; i++) {
//           if (distArr[i] == 0) {
//               zeros++;
//               continue;
//           }
//           if (distArr[i]<minElem) {
//                 minElem = distArr[i];
//                 minIx = i;
//             } 
//         }
//         if (zeros < arr.length){
//           for (let j=minIx+1; j<distArr.length; j++) {
//             if (distArr[j]>maxElem) {
//                 maxElem= distArr[j]
//                 maxIx = j ;
//             }           
//           }
//         }
        
//         console.log("maxElem ",maxElem, " maxIx ", maxIx)
//         console.log("minElem ", minElem, " minIx ",minIx)
//         if (minElem!=0 && maxElem!=0) {
//             let lefted = origArr[minIx];
//             let righted = origArr[maxIx];
//             origArr.splice(minIx,1,righted);
//             origArr.splice(maxIx,1,lefted);
//             swaps++;
//         }
//         console.log(origArr)

//     } while (zeros < arr.length)

//     // return swaps;    
//     console.log(swaps)

// }


// --------------------  version 2
// function MinSwaps (arr) {
//   var origArr = [...arr]
//     var ordered = 0;
//     var swaps = 0;
//     do {
//         console.log(origArr)
//         ordered=0;
//         let distArr = origArr.map((elem,index)=>{
//           return index-elem
//         })
//         console.log(distArr)
//         let minElem=0, maxElem = 0, minIx=null, maxIx=0, secondElem=null, secondIx=null;
//         for (let i=0; i<distArr.length; i++) {
//           if (distArr[i] === -1) {
//               ordered++;
//               continue;
//           }
//           if (distArr[i] > maxElem) {
//             maxElem= distArr[i]
//             maxIx = i ;
//           } else if (distArr[i]===0 && i>maxIx){
//             maxElem= distArr[i]
//             maxIx = i ;
//           }
//         }
//         if (ordered < arr.length){
//           for (let i=0; i<maxIx; i++ ){
//             if (distArr[i] === -1) continue;
//             if (distArr[i]+maxElem===0){
//               secondElem=distArr[i];
//               secondIx=i;
//             }
//           }
//           if (secondElem===null){
//             for (let j=0; j<maxIx; j++) {
//               if (distArr[j] === -1) continue;
//               if (distArr[j] < minElem) {
//                   minElem = distArr[j];
//                   minIx = j;
//               }             
//             }
//             secondElem = minElem;
//             secondIx = minIx;
//           }           
//         }             
//         console.log("maxElem ",maxElem, " maxIx ", maxIx)
//         console.log("minElem ", minElem, " minIx ",minIx)
//         console.log("secondElem ", secondElem, " secondIx ",secondIx)
//         if (secondElem!=null && maxElem!=null) {
//             let lefted = origArr[secondIx];
//             let righted = origArr[maxIx];
//             origArr.splice(secondIx,1,righted);
//             origArr.splice(maxIx,1,lefted);
//             swaps++;
//         }
//         // console.log(origArr)

//     } while (ordered < arr.length)

//     console.log (swaps)
//     // return swaps;
  
// }

// -----------------final
// -----------------no solution is too stupid or too easy to be considered!!!
function minimumSwaps(arr) {
  var swaps=0;
  for (let i=0; i<arr.length; i++) {
      if (arr[i]==i+1){
      continue;
      } else {
          for (let j=i+1; j<arr.length; j++){
              if (arr[j]==i+1) {
                  let currentOne = arr[i];
                  let newOne = arr[j];
                  arr.splice(i,1,newOne);
                  arr.splice(j,1,currentOne);
                  swaps++;
                  break;
              }
          }
      
      }
      
  }
  console.log (swaps)
  return swaps;    

}

let testArr = [3, 7, 6, 9, 1, 8, 10, 4, 2, 5]

minimumSwaps(testArr);