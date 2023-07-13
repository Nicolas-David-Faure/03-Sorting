
function bubbleSort(arr) {

    var len = arr.length;
 
    for (var i = 0; i < len; i++) {
      for (var j = 0; j < len - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            counter+=1
          swap(arr, j, j + 1);
        }
      }
    }

    return arr.flat();
  }
  
  function swap(arr, i, j) {
    // Intercambia los elementos en las posiciones i y j del array
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
