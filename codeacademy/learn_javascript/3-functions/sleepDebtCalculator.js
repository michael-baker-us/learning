const getSleepHours = (day) => {
    if (day === "Monday") {
        return 8;
    } else if (day === "Tuesday") {
        return 8;
    } else if (day === "Wednesday") {
        return 8;
    } else if (day === "Thursday") {
        return 8;
    } else if (day === "Friday") {
        return 8;
    } else if (day === "Saturday") {
        return 8;
    } else if (day === "Sunday") {
        return 8;
    }
};

const getActualSleepHours = () =>
    getSleepHours("Monday") +
    getSleepHours("Tuesday") +
    getSleepHours("Wednesday") +
    getSleepHours("Thursday") +
    getSleepHours("Friday") +
    getSleepHours("Saturday") +
    getSleepHours("Sunday");

const getIdealSleepHours = () => {
    const idealHours = 7.5;
    return idealHours * 7;
};
// test get getActualSleepHours
// console.log(getActualSleepHours()); // should print the sum of all sleep hours in the week
// test getIdealSleepHours
// console.log(getIdealSleepHours()); // if idealHours is 8, should print 56

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
        console.log(
            "You got your planned " +
            actualSleepHours +
            " hour(s) of sleep. Nice job."
        );
    } else if (actualSleepHours > idealSleepHours) {
        console.log(
            "You got " +
            (actualSleepHours - idealSleepHours) +
            " hour(s) more sleep than you needed this week. Nice job."
        );
    } else {
        console.log(
            "You got " +
            (idealSleepHours - actualSleepHours) +
            " hour(s) less sleep than you needed this week. Get some rest."
        );
    }
};

calculateSleepDebt();
