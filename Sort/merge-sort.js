const merge = (arr1, arr2) => {
  const result = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  return [...result, ...arr1.slice(i), ...arr2.slice(j)]
}

const mergeSort = (arr) => {
  if (arr.length < 2) return arr;
  const middle = Math.round(arr.length / 2);
  const leftArr = arr.slice(0, middle);
  const rightArr = arr.slice(middle);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}


// test

console.log(mergeSort([5, 3, 7, 9, 2, 1]));

console.log(mergeSort([11, 36, 2, -9, 7, -3, 8, 22]));