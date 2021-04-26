import { useEffect, useState } from "react";

import Question from '../../components/Question/Question';
import Loader from '../../components/Loader/Loader';

import './Quiz.css';

const Quiz = ({ name, questions, score, setScore, currentQuestion, setCurrentQuestion }) => {

  const [options, setOptions] = useState();

  const handleShuffle = (optionss) => {
    return optionss.sort(() => Math.random() - 0.5);
  }
  // console.log('options', options)

  useEffect(() => {
    console.log('Questions', questions);
    if(questions 
       && questions[currentQuestion] 
       && questions[currentQuestion].correct_answer 
       && questions[currentQuestion].incorrect_answers) {
        //  console.log('q', questions)
        setOptions(
            handleShuffle([
              questions[currentQuestion].correct_answer,
              ...questions[currentQuestion].incorrect_answers,
            ])
      )
    }
  }, [questions, currentQuestion]);

  // console.log('Options', options)

  return(
    <div className='quiz'>
      <span className='subtitle'>Good Luck {name}</span>

      {questions ? (
        <>
          <Question
            questions={questions}
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
            options={options}
            correctAnswer={questions[currentQuestion]?.correct_answer}
            score={score}
            setScore={setScore}
          />
          <div className='quiz-info'>
            <span>Category: {questions[currentQuestion]?.category}</span>
            <span>Score: {score}/{currentQuestion}</span>
          </div>
        </>
        ) : (
          <Loader />
      )}

    </div>
  )
}

export default Quiz;