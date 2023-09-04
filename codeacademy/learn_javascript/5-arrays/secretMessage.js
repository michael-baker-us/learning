let secretMessage = [
    "Learning",
    "is",
    "not",
    "about",
    "what",
    "you",
    "get",
    "easily",
    "the",
    "first",
    "time,",
    "it",
    "is",
    "about",
    "what",
    "you",
    "can",
    "figure",
    "out.",
    "-2015,",
    "Chris",
    "Pine,",
    "Learn",
    "JavaScript",
];
// remove last item
secretMessage.pop();
// add last item
secretMessage.push("to");
// add last item
secretMessage.push("Program");
// replace 8th item (easily) with right
secretMessage[7] = 'right';
// remove first item
secretMessage.shift();
// add first item
secretMessage.unshift("Programming");
// replace 5 items starting from index 6 with 'know'
secretMessage.splice(6, 5, "know")

// join todether the list of items (removing ,) and add a space
console.log(secretMessage.join(' '));
// reveal the length of the index
console.log(secretMessage.length);
