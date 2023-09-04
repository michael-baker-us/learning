let story =
    'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a stunning 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(" ");
let unnecessaryWord = "literally";
let misspelledWord = "beautifull";
let misspelledCorrection = "beautiful";
let badWord = "freaking";
let badWordCorrection = "really";

//empty function to show how many words are in storyWords
let count = 0;
storyWords.forEach((word) => {
    count++;
});
console.log(count);

// reomve words using variable
storyWords = storyWords.filter((word) => {
    return word !== unnecessaryWord;
});

//replace misspelled words using variables
storyWords = storyWords.map((word) => {
    if (word === misspelledWord) return misspelledCorrection;
    else return word;
});
// find the index of a variable
const badWordIndex = storyWords.findIndex((word) => {
    return word === badWord;
});
//output the bad work index
console.log(badWordIndex);
// double check the bad word index is correct
console.log(storyWords[badWordIndex]);
// replace the bad word with a not so bad word
storyWords[badWordIndex] = badWordCorrection;
//checks if all words are less than 10 letters
const lengthCheck = storyWords.every((word) => {
    return word.length < 10;
});
console.log(lengthCheck);
// identitify words that are longer than 10 words and replace them manually...weird
const longWords = storyWords.filter((word) => {
    return word.length > 10;
});
console.log(longWords);

// view story as an array
console.log(storyWords);

//view story as a readable paragraph
console.log(storyWords.join(" "));