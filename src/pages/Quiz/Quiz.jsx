import { useEffect, useState } from "react";

import Question from '../../components/Question/Question';

import './Quiz.css';

const Quiz = ({ name, questions, setQuestions, score, setScore }) => {

  const [options, setOptions] = useState();
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    console.log('Questions', questions);

    setOptions(
      questions && 
        handleShuffle([
          questions[currentQuestion]?.correct_answer,
          ...questions[currentQuestion]?.incorrect_answers,
        ])
    )
  }, [questions]);

  console.log('Options', options)

  const handleShuffle = (optionss) => {
    return optionss.sort(() => Math.random() - 0.5);
  }

  return(
    <div className='quiz'>
      <span className='subtitle'>Good Luck {name}</span>

      {questions ? (
        <>
          <Question
            questions={questions}
            setQuestions={setQuestions}
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
            options={options}
            correctAnswer={questions[currentQuestion]?.correct_answer}
            score={score}
            setScore={setScore}
          />
          <div className='quiz-info'>
            <span>Category: {questions[currentQuestion].category}</span>
            <span>Score: {score}</span>
          </div>
        </>
        ) : (
        <span style={{margin: '100px', color: 'grey'}}>
          Loading...
        </span>
      )}

    </div>
  )
}

export default Quiz;