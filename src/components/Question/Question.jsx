import {useState} from 'react';
import { useHistory } from 'react-router';

import './Question.css';

import ErrorMessage from '../ErrorMessage/ErrorMessage';


const Question = ({
  questions,
  currentQuestion,
  setCurrentQuestion,
  options,
  correctAnswer,
  score,
  setScore,
}) => {
  const [selected, setSelected] = useState()
  const [error, setError] = useState(false)

  const history = useHistory();

  const handleSelect = (i) => {
    if(selected === i && selected === correctAnswer) {
      return 'select';
    } else if(selected === i && selected !== correctAnswer) {
      return 'wrong';
    } else if(i === correctAnswer) {
      return 'select';
    }
  };

  const handleCheck = (i) => {
    setSelected(i);
    if(i === correctAnswer) setScore(score + 1);
    setError(false)
  }

  const handleQuit = () => {
    history.push('/')
  };

  const handleNext = () => {
    if(currentQuestion>8) {
      setCurrentQuestion(currentQuestion + 1)
      history.push('/result')
    } else if(selected) {
      setCurrentQuestion(currentQuestion + 1)
      setSelected()
    } else {
      setError('Please Select An Option First');
    }
  }

  return(
    <div className='question'>
      <h1>Question {currentQuestion + 1}</h1>

      <div className='question-container'>
        <h2 className='current-question'>{questions[currentQuestion]?.question}</h2>
        <div className='options'>
        {options && options.map(i => (
          <button 
            onClick={() => handleCheck(i)}
            className={`single-option ${selected && handleSelect(i)}`}
            key={i}
            disabled={selected}
          >{i}</button>
          )
        )}
      </div>

      <div className='controls'>
        <button
          className='quit-button'
          onClick={handleQuit}
        >Quit
        </button>

        {error && <ErrorMessage errorMessage={error} />}

        <button
          className='next-button'
          onClick={handleNext}
        >Next Question
        </button>
      </div>

      </div>
    </div>
  )
}

export default Question;