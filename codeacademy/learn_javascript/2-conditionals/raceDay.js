let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegister = true;
let age = 18;

if (earlyRegister === true && age > 17) {
    raceNumber += 1000;
} else {
    raceNumber;
}

if (earlyRegister === true && age > 18) {
    console.log(
        `You wil race at 9:30 am. Your assigned race number is ${raceNumber}`
    );
} else if (earlyRegister === false && age > 18) {
    console.log(
        `You wil race at 11:00 am. Your assigned race number is ${raceNumber}`
    );
} else if (age === 18) {
    console.log("Please visit the Registration Desk for more details!");
} else {
    console.log(
        `You wil race at 12:00 pm. Your assigned race number is ${raceNumber}`
    );
}
