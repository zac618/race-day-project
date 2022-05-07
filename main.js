let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;
let runnerAge = 18;

if(registeredEarly === true && runnerAge >= 18) {
    raceNumber += 1000
}

console.log(raceNumber);

if(runnerAge >= 18 && registeredEarly === true) {
    console.log(`Hello racer ${raceNumber}! You will race at 9:30 am`)
} else if(runnerAge >= 18 && registeredEarly === false) {
    console.log(`Hello racer ${raceNumber}! You will race at 11:00 am`)
}

if(runnerAge < 18) {
    console.log(`Hello racer ${raceNumber}! You will race at 12:30 pm`)
}
