import './style.css'
import { useState, useRef } from 'react'

function QuizGame(){

    const[counter, setCounter] = useState(0);
    const [score, setScore] = useState(0)
    const Questions = [
        {
          header: `Question #1`,
          question: "What is the capital of France?",
          choices: {
            ChoiceA: { isCorrect: true, text: "Paris" },
            ChoiceB: { isCorrect: false, text: "Rome" },
            ChoiceC: { isCorrect: false, text: "Berlin" },
            ChoiceD: { isCorrect: false, text: "London" }
          }
        },
        {
          header: `Question #2`,
          question: "Which planet is known as the \"Red Planet\"?",
          choices: {
            ChoiceA: { isCorrect: false, text: "Venus" },
            ChoiceB: { isCorrect: true, text: "Mars" },
            ChoiceC: { isCorrect: false, text: "Jupiter" },
            ChoiceD: { isCorrect: false, text: "Saturn" }
          }
        },
        {
          header: `Question #3`,
          question: "Who painted the Mona Lisa?",
          choices: {
            ChoiceA: { isCorrect: false, text: "Michelangelo" },
            ChoiceB: { isCorrect: false, text: "Vincent van Gogh" },
            ChoiceC: { isCorrect: true, text: "Leonardo da Vinci" },
            ChoiceD: { isCorrect: false, text: "Pablo Picasso" }
          }
        },
        {
          header: `Question #4`,
          question: "What is the chemical symbol for gold?",
          choices: {
            ChoiceA: { isCorrect: false, text: "Ag" },
            ChoiceB: { isCorrect: true, text: "Au" },
            ChoiceC: { isCorrect: false, text: "Fe" },
            ChoiceD: { isCorrect: false, text: "Hg" }
          }
        },
        {
          header: `Question #5`,
          question: "How many bones are in the human body?",
          choices: {
            ChoiceA: { isCorrect: true, text: "206" },
            ChoiceB: { isCorrect: false, text: "306" },
            ChoiceC: { isCorrect: false, text: "406" },
            ChoiceD: { isCorrect: false, text: "506" }
          }
        },
        {
          header: `Question #6`,
          question: "Which animal is known as the \"King of the Jungle\"?",
          choices: {
            ChoiceA: { isCorrect: false, text: "Elephant" },
            ChoiceB: { isCorrect: true, text: "Lion" },
            ChoiceC: { isCorrect: false, text: "Tiger" },
            ChoiceD: { isCorrect: false, text: "Gorilla" }
          }
        },
        {
          header: `Question #7`,
          question: "What is the largest ocean on Earth?",
          choices: {
            ChoiceA: { isCorrect: false, text: "Atlantic Ocean" },
            ChoiceB: { isCorrect: false, text: "Indian Ocean" },
            ChoiceC: { isCorrect: false, text: "Arctic Ocean" },
            ChoiceD: { isCorrect: true, text: "Pacific Ocean" }
          }
        },
        {
          header: `Question #8`,
          question: "In which year did World War II end?",
          choices: {
            ChoiceA: { isCorrect: true, text: "1945" },
            ChoiceB: { isCorrect: false, text: "1939" },
            ChoiceC: { isCorrect: false, text: "1918" },
            ChoiceD: { isCorrect: false, text: "1914" }
          }
        },
        {
          header: `Question #9`,
          question: "Who wrote the play \"Hamlet\"?",
          choices: {
            ChoiceA: { isCorrect: true, text: "William Shakespeare" },
            ChoiceB: { isCorrect: false, text: "Charles Dickens" },
            ChoiceC: { isCorrect: false, text: "Jane Austen" },
            ChoiceD: { isCorrect: false, text: "Mark Twain" }
          }
        },
        {
          header: `Question #10`,
          question: "What is the tallest mammal on Earth?",
          choices: {
            ChoiceA: { isCorrect: true, text: "Giraffe" },
            ChoiceB: { isCorrect: false, text: "Elephant" },
            ChoiceC: { isCorrect: false, text: "Zebra" },
            ChoiceD: { isCorrect: false, text: "Rhino" }
          }
        }
      ];
    const headerRef = useRef();
    const wrapperRef = useRef();
    const scoreRef = useRef();

    const ResetGame = () =>{
        setScore(0)
        setCounter(0)

        scoreRef.current.style.display ="none"
        headerRef.current.style.display ="block"
        wrapperRef.current.style.display ="block"
    }

    const Answer = (answer) =>{
        if(counter >= (Questions.length - 1)){
            
            if(answer){
                setScore(s => s + 1);
            }
            scoreRef.current.style.display ="block"
            headerRef.current.style.display ="none"
            wrapperRef.current.style.display ="none"
        }
        else{
            if(answer){
               
              
                setCounter(s => s + 1)
                setScore(s => s + 1);
            }
            else{
                setCounter(s => s + 1)
            }
          
           
        }
     
    }
    return(
        <>
            <div className="quiz-wrapper">
                <div ref={scoreRef} className='score-wrapper'>
                    <h2>Score</h2>
                    <p> {score}/{Questions.length}</p>
                   
                </div>
                <div ref={headerRef} className='quiz-header'>
                    {Questions[counter].header}
                </div>
                <div className='container'>
                <div ref={wrapperRef} className='question-wrapper'>
                    <div className='question-text'>  {Questions[counter].question}</div>
                    <div className='choice-wrapper'>
                        <button onClick={() => Answer(Questions[counter].choices.ChoiceA.isCorrect)}>A. {Questions[counter].choices.ChoiceA.text}</button>
                        <button onClick={() => Answer(Questions[counter].choices.ChoiceB.isCorrect)}>B. {Questions[counter].choices.ChoiceB.text}</button>
                        <button onClick={() => Answer(Questions[counter].choices.ChoiceC.isCorrect)}>C. {Questions[counter].choices.ChoiceC.text}</button>
                        <button onClick={() => Answer(Questions[counter].choices.ChoiceD.isCorrect)}>D. {Questions[counter].choices.ChoiceD.text}</button>
                    </div>
                </div>
                </div>
               
                <button className='resetBtn' onClick={ResetGame}>Reset</button>
            </div>
        </>
    )   
}

export default QuizGame