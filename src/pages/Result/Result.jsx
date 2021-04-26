import { useEffect } from 'react';
import { useHistory } from 'react-router';

import './Result.css';

const Result = ({ name, score, currentQuestion }) => {
  const history = useHistory();

  useEffect(() => {
    if(!name) {
      history.push('/')
    }
  }, [name, history]);

  return(
    <div className='result'>
      <div>
        <p className='title'>{name}, Your Final Score Is: {score}/{currentQuestion}</p>
        <button
          className='play-again-button'
          onClick={() => history.push('/')}
        >Play Again
        </button>
      </div>
    </div>
  )
}

export default Result;