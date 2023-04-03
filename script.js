// random exercise generator

let exercises = {
    discreet: ["crunches", "Press Ups", "Squats", "Elbow Pull Backs"],
    timed: ["plank", "jogging", "lateral punches"]
}

function randomExercises(num){
    let exerciseChoice = null;
    let exerciseNumber = 0
    let exerciseList = "";
    for (let i = 0; i < num; i++){
        let discreetOrTimed = Math.ceil(Math.random()*2);
        switch (discreetOrTimed){
            case 1:
                exerciseChoice = exercises.discreet[Math.floor(Math.random()*exercises.discreet.length)];
                exerciseNumber = Math.ceil(Math.random()*20) + 10;
                exerciseList += `${exerciseNumber} ${exerciseChoice} <br>`;
                break
            case 2:
                exerciseChoice = exercises.timed[Math.floor(Math.random()*exercises.timed.length)];
                exerciseNumber = Math.ceil(Math.random()*30) + 10;
                exerciseList += `${exerciseNumber} second ${exerciseChoice} <br>`
                break
        }
    }
    document.getElementById("output").innerHTML = exerciseList;
}