const inputStr =
  "“Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers” (Socrates)";

function filterLongestString(stringArr: string[]): string[] {
  const stringSortedByLength = stringArr.sort((a, b) => b.length - a.length);

  const longestString: string[] = [];
  let previousWordLength = stringSortedByLength[0].length;

  for (let i = 0; i < stringSortedByLength.length; i++) {
    if (previousWordLength > stringSortedByLength[i].length) {
      break;
    }

    longestString.push(stringSortedByLength[i]);
  }

  return longestString;
}

function getLongestWord(string: string) {
  const trimmedString = string.trim();

  const filterRegex = /[a-z]| /gi;
  const matchingSymbolArray = trimmedString.match(filterRegex);

  if (!matchingSymbolArray) {
    throw new Error("String did not match '/[a-z]| /gi' regex pattern.");
  }

  const filteredString = matchingSymbolArray.join("");
  const stringArray = filteredString.split(" ");
  const longestWords = filterLongestString(stringArray);

  if (longestWords.length === 1) {
    return longestWords[0];
  }

  const vowelsRegex = /[aeiou]/gi;

  const sortedByVowelLength = longestWords.sort(
    (a, b) =>
      (b.match(vowelsRegex)?.length || 0) - (a.match(vowelsRegex)?.length || 0)
  );

  return sortedByVowelLength[0];
}

console.log(getLongestWord(inputStr));
