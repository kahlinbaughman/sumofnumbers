function forAdd(arr) {
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    answer += arr[i];
  }
  return answer;
}

function forWhile(arr) {
  let answer = 0;
  let i = 0;
  while (i < arr.length) {
    answer += arr[i];
    i++;
  }
  return answer;
}

function forUnder(arr) {
  return _.reduce(arr, function (memo, num) { return memo + num; }, 0);
}

function forRec(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    return arr.pop() + forRec(arr);
  }
}

const list = [1, 2, 3, 4, 5];

console.log(forAdd(list));
console.log(forWhile(list));
console.log(forUnder(list));
console.log(forRec(list));
