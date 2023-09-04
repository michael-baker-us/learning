let username = "Michael";
let userQuestion = "Will I beceome a software engineer?";
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = "";

switch (randomNumber) {
    case 0:
        eightBall = "Signs point to yes";
        break;
    case 1:
        eightBall = "It is certain";
        break;
    case 2:
        eightBall = "It is decidedly so";
        break;
    case 3:
        eightBall = "Reply hazy try again";
        break;
    case 4:
        eightBall = "Cannot predict now";
        break;
    case 5:
        eightBall = "Do not count on it";
        break;
    case 6:
        eightBall = "My sources say no";
        break;
    case 7:
        eightBall = "Outlook not so good";
}

username ? console.log(`Hello ${username}!`) : console.log("Hello!");
console.log(userQuestion);
console.log(eightBall);
