const input = "   fly me   to   the moon  ";

const exerciseTwo = (string) => {
  const arrayOfWords = string.split(/(\s+)/).filter((e) => e.trim().length > 0);
  return arrayOfWords.slice(-1)[0].length;
};

const output = exerciseTwo(input);
console.log(output);
