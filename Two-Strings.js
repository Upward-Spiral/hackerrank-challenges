function twoStrings(s1, s2) {
    let result="NO";

    for (let j=97; j<123; j++) {
      if (s1.includes(String.fromCharCode(j)) && s2.includes(String.fromCharCode(j))) {
        result="YES";
      }
    }
    console.log(result)
    return(result)

}