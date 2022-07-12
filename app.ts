const inputStr =
  "“Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers” (Socrates)";

function getWordsArr(string: string): string[] {
  const filterRegex = /[^a-z]/gi;

  return string.trim().split(filterRegex).filter(Boolean);
}

function filterLongestString(stringArr: string[]): string[] {
  let results: string[] = [];

  stringArr.forEach((string) => {
    if (!results[0] || string.length > results[0].length) {
      results = [string];
    }

    if (string.length === results[0].length) {
      results.push(string);
    }
  });

  return results;
}

function getStringWithMostVowels(stringArr: string[]): string {
  const nonVowelsRegex = /[^aeiou]/gi;
  const stringsVowelsOnly = stringArr.map((s) => s.replace(nonVowelsRegex, ""));

  let result = "";
  let biggestLength = 0;

  stringsVowelsOnly.forEach((string, i) => {
    if (string.length > biggestLength) {
      result = stringArr[i];
      biggestLength = string.length;
    }
  });

  return result;
}

function getLongestWord(string: string) {
  const alphabetCharacters = getWordsArr(string);
  const longestWords = filterLongestString(alphabetCharacters);

  if (longestWords.length === 1) {
    return longestWords[0];
  }

  return getStringWithMostVowels(longestWords);
}

console.log(getLongestWord(inputStr));
