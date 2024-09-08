// noDouble number
function noReplace(numbers) {
  let num = [];
  for (number of numbers) {
    if (num.includes(number) === false) {
      num.push(number);
    }
  }
  return num;
}

const arrays = noReplace([5, 6, 11, 12, 98, 5, 10, 10]);
console.log(arrays);


