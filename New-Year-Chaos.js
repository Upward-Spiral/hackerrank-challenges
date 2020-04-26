
// It's New Year's Day and everyone's in line for the Wonderland rollercoaster ride! There are a number of people queued up, and each person wears a sticker indicating their initial position in the queue. Initial positions increment by  from  at the front of the line to  at the back.

// Any person in the queue can bribe the person directly in front of them to swap positions. If two people swap positions, they still wear the same sticker denoting their original places in line. One person can bribe at most two others. For example, if  and  bribes , the queue will look like this: .

// Fascinated by this chaotic queue, you decide you must know the minimum number of bribes that took place to get the queue into its current state!

// Function Description

// Complete the function minimumBribes in the editor below. It must print an integer representing the minimum number of bribes necessary, or Too chaotic if the line configuration is not possible.

// minimumBribes has the following parameter(s):

// q: an array of integers
// Input Format

// The first line contains an integer , the number of test cases.

// Each of the next  pairs of lines are as follows:
// - The first line contains an integer , the number of people in the queue
// - The second line has  space-separated integers describing the final state of the queue.

// Constraints

// Subtasks

// For  score 
// For  score 

// Output Format

// Print an integer denoting the minimum number of bribes needed to get the queue into its final state. Print Too chaotic if the state is invalid, i.e. it requires a person to have bribed more than  people.

// Sample Input

// 2
// 5
// 2 1 5 3 4
// 5
// 2 5 1 3 4
// Sample Output

// 3
// Too chaotic

// First version - slow
// function minimumBribes(q) {
//     let min = 0;
//     let chaotic = 0;
//     for (let i=0; i<q.length; i++) {
//         let others = q.slice(i+1)
//         let take = others.filter(num=>num<q[i])
//         if (take.length>2) {
//             chaotic = 1;
//         } else {
//             min = min + take.length
//         }
//     }
//     // for (let i=0; i<q.length; i++) {
//     //     if (q[i]>i+1 || q[i]>q[i+1]) {
//     //         if (i>=q[i]-3) {
//     //             min = min + q[i]-1-i;
//     //         } else if (i<q[i]-3){ 
//     //             chaotic = 1;
//     //             break;
//     //         }
//     //     }
        
//     // }
//     if (chaotic == 0) {
//         console.log(min) ;
//     } else { console.log("Too chaotic") }
    
// }

// Second version - still slow
// function minimumBribes(q) {
//     var min = 0;
//     var chaotic = 0;
//     for (let i=0; i<q.length; i++) {
//         var others = q.slice(i+1);
//         var passed = 0;
//         for (let j=0; j<others.length; j++) {
//             if (others[j]<q[i]) {
//                 passed++;
//                 if (passed>2) {
//                     chaotic = 1;
//                 }  
//             }
//             if (chaotic == 1) {break;}
//         }
//         if (chaotic == 1) {break;}
//         min = min + passed
//     }
//     if (chaotic == 0) {
//         console.log(min) ;
//     } else { console.log("Too chaotic") }
    
// }

// 3rd version - slooooow
// function minimumBribes(q) {
//     var min = 0;
//     var chaotic = 0;
//      var passed = 0;
//     for (let i=0; i<q.length; i++) {
//       passed = 0;
//       if (i<q[i]-3) {
//         chaotic = 1;
//         break;
//       } else {         
//         for (let j=i+1; j<q.length; j++){          
//           if (q[j]<q[i]) {
//             passed++;
//             console.log(i,q[i],j, q[j],passed)
//           }      
//           if (passed>2) {
//               chaotic = 1;
//               break;
//           }       
//         }
//       }
//       if (chaotic == 1) {break;}
//       min = min + passed
//       console.log (i,min)
//     }
//     if (chaotic == 0) {
//         console.log(min) ;
//     } else { console.log("Too chaotic") }
    
// }

// function minimumBribes(q) {
//     var min = 0;
//     var chaotic = 0;
//      var passed = 0;
//     for (let i=0; i<q.length; i++) {
//       passed = 0;
//       if (i<q[i]-3) {
//         chaotic = 1;
//         break;
//       } else if (0 <= q[i]-1-i && q[i]-1-i <= 2) {         
//         passed = q[i]-1-i
//       } else if (q[i]-1-i > 2) {
//         chaotic = 1;
//         break;
//       } 

//       min = min + passed
//       console.log (i,min)
//     }
//     if (chaotic == 0) {
//         console.log(min) ;
//     } else { console.log("Too chaotic") }
    
// }

// fastest version -  35.40 points out of 40
function minimumBribes(q) {
    var bribes = 0;
    var chaotic = 0;
    var passed = 0;
    var smin, bmin;
    if (q[q.length-1]<q[q.length-2]) {
      smin = q[q.length-1]
      bmin = q[q.length-2]
    } else {
      smin = q[q.length-2]
      bmin = q[q.length-1]
    }
    for (let i=q.length-2; i>=0; i--) {
      passed = 0;
      if (i<q[i]-3) {
        chaotic = 1;
        break;
      } else {         
        if (q[i]> bmin) {
          bribes+=2
        } else if (q[i]>smin) {
          bribes++
          bmin = q[i]
        } else {
          bmin = smin
          smin = q[i]
        }
      }
    }
    if (chaotic == 0) {
        console.log(bribes) ;
    } else { console.log("Too chaotic") }   
}


