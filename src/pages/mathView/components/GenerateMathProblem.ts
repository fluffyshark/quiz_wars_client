export const generateMathProblem = (gameType:string) => {
    
    let firstNr = Math.floor(Math.random() * (10 - 1 + 1) + 1)
    let secondNr = Math.floor(Math.random() * (10 - 1 + 1) + 1)
    let answer = firstNr * secondNr
    let question = `${firstNr} x ${secondNr}`


    if (gameType === "addition") {
        firstNr = Math.floor(Math.random() * (20 - 1 + 1) + 1)
        secondNr = Math.floor(Math.random() * (20 - 1 + 1) + 1)
        answer = firstNr + secondNr
        question = `${firstNr} + ${secondNr}`
    } 
    if (gameType === "substraction") {
        firstNr = Math.floor(Math.random() * (20 - 1 + 1) + 1)
        secondNr = Math.floor(Math.random() * (firstNr - 1 + 1) + 1)
        answer = firstNr - secondNr
        question = `${firstNr} - ${secondNr}`
    }
    if (gameType === "multiplication") {
        firstNr = Math.floor(Math.random() * (10 - 1 + 1) + 1)
        secondNr = Math.floor(Math.random() * (10 - 1 + 1) + 1)
        answer = firstNr * secondNr
        question = `${firstNr} x ${secondNr}`
    }
    if (gameType === "division") {
        do {
            secondNr = Math.floor(Math.random() * 8) + 2;
            firstNr = Math.floor(Math.random() * (secondNr * 9) + 1);
        } while (firstNr % secondNr !== 0 || firstNr / secondNr === 1);

        console.log(`${firstNr} x ${secondNr}`, (firstNr / secondNr))
        answer = firstNr / secondNr
        question = `${firstNr} / ${secondNr}`
    }
    

    let newMathProblem = {answer, question}
//    console.log(`FROM FUNCTION - The math is ${question} and the answer is ${answer}`)

    return newMathProblem

}