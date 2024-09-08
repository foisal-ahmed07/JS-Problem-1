function vowelsNumber(string) {
    const str = string.toLowerCase();

  let count = 0;

  for (let char of str) {
    if (vowel.includes(char)) {
      count++;
    }
  }
  return count;
}

const vowel = ["a", "e", "i", "o", "u"];
const string = "My name id Foisal Ahmed";
const called = vowelsNumber(string.length);
console.log(called);
