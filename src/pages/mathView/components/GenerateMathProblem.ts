export const generateMathProblem = () => {
    
    const firstNr = Math.floor(Math.random() * (10 - 1 + 1) + 1)
    const secondNr = Math.floor(Math.random() * (10 - 1 + 1) + 1)

    const answer = firstNr * secondNr
    const question = `${firstNr} x ${secondNr}`

    let newMathProblem = {answer, question}
    console.log(`FROM FUNCTION - The math is ${question} and the answer is ${answer}`)

    return newMathProblem

}