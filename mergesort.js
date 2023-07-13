let arr = [2,5,4,3,0,1,7,6,9,8]
function split(wholeArray=[]) {
    let middleArr = wholeArray.length / 2;
    let firstHalf = wholeArray.splice(0,middleArr)
    let secondHalf = wholeArray;
    /* tu código acá para definir el firstHalf y secondHalf array */
    console.log(secondHalf)
    //return [firstHalf, secondHalf];
  }


  split(arr)