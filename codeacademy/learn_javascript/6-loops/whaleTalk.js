const input = "turpentine and turtles";
const vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];

for (let i = 0; i < input.length; i++) {
    //test we are counting the index positions throughout the input
    //console.log(i);
    for (let j = 0; j < vowels.length; j++) {
        //test we are counting the index positions throughout the input per each vowel index position
        //console.log(j);
        if (input[i] === vowels[j]) {
            //push results to resultArray
            resultArray.push(input[i]);
            // double the e's we add to the resultArray
            if (input[i] === "e") {
                resultArray.push(input[i]);
            }
            // double the u's we add to the result array
            if (input[i] === "u") {
                resultArray.push(input[i]);
            }
        }
    }
}
//declare a variable to join the array and uppercase
let resultString = resultArray.join('').toUpperCase();
console.log(resultString);
