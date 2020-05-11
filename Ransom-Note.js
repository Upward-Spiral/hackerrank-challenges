// first version ----------------- a bit slow
// function checkMagazine(magazine, note) {
    // var tempMag=[...magazine]
    // var result = [];
    // for (let i=0; i<note.length; i++) {
    //   for (let j=0; j<tempMag.length; j++){
    //     if (note[i]===tempMag[j]){
    //       result.push("y");
    //       console.log(result)
    //       tempMag.splice(j,1);
    //       console.log(tempMag)
    //       break;
    //     }
    //     console.log("j",j)
    //   }
    //   console.log("i",i)
    // }
//     if (result.length==note.length) {
//       console.log("yes")
//       return("yes")
//     } else { 
//       console.log("no")
//       return("no")}
//   }


// second version ------------------ even slower!
// function checkMagazine(magazine, note) {
//     var tempMag=[...magazine];
//     var tempNote=[...note];
//     tempMag.sort();
//     tempNote.sort();
//     console.log(tempMag)
//     console.log(tempNote)
//     var result = [];
//     for (let i=0; i<tempNote.length; i++) {
//       for (let j=0; j<tempMag.length; j++){
//         if (tempNote[i].localeCompare(tempMag[j])==1){
//           tempMag.splice(j,1);
//           console.log(tempMag)
//           j--;
//           // break;
//         } else if (tempNote[i]===tempMag[j]){
//           result.push("y");
//           console.log(result)
//           tempMag.splice(j,1);
//           console.log(tempMag)
//           break;
//         }
//         console.log("j",j)
//       }
//       console.log("i",i)
//     }
//     if (result.length==note.length) {
//       console.log("yes")
//       // return("yes")
//     } else { 
//       console.log("no")
//       // return("no")
//     }
//   }

// Third version ----------------- basically refined version of the first algorithm
function checkMagazine(magazine, note) {
    var tempMag=[...magazine]
    var result = 0;
    if (magazine.length==note.length){
        magazine.sort();
        note.sort();
        for (let i=0; i<note.length; i++){
            if (magazine[i]!=note[i]){
                break;
            } else { result++}
        }   
    } else {
        for (let i=0; i<note.length; i++) {
            for (let j=0; j<tempMag.length; j++){
                if (note[i]===tempMag[j]){
                    result++;
                    tempMag.splice(j,1);
                    break;
                }
            }
        }
    }
    
    if (result==note.length) {
        console.log("Yes")
    } else { 
        console.log("No")
    }

}

  

