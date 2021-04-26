import React, {useState} from 'react';
import { useHistory } from 'react-router';

import './Home.css';

import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Categories from '../../Data/Categories';


const Home = ({ name, setName, fetchQuestions }) => {

  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [error, setError] = useState(false);

  const history = useHistory();

  const handleSubmit = () => {
    if(!category || !difficulty || !name) {
      setError(true)
      return;
    } else {
      setError(false);
      fetchQuestions(category, difficulty)
      history.push("/quiz")
    }
  }

  return(
    <div className='content'>
      <div className='settings'>
        <span className='quiz-settings'>Quiz Settings</span>

        <div className='select-settings'>
          {error && <ErrorMessage errorMessage={'Please Fill All The Fields !!!'} />}

          <label style={{fontWeight: 'normal'}} for='enter your name'>Enter Your Name</label>
          <input
            className='name-input' 
            placeholder='Enter Your Name...' 
            type='text'
            onChange={event => setName(event.target.value)}
          />

          <label style={{fontWeight: 'normal', marginTop: '15px'}} for='select category'>Select Category</label>
          <select 
            name="categories" 
            className='select-category'
            onChange={event => setCategory(event.target.value)}
            value={category}
          >
            {category==='' && <option key='Select Category' value='select category'>Select Category</option>}
            {Categories.map(category => <option key={category.value} value={category.value}>{category.category}</option>)}
          </select>

          <label style={{fontWeight: 'normal', marginTop: '15px'}} for='select difficulty'>Select Difficulty</label>
          <select 
            name="categories" 
            className='select-category'
            onChange={event => setDifficulty(event.target.value)}
            value={difficulty}
          >
            {difficulty==='' && <option key='Select Difficulty' value='select difficulty'>Select Difficulty</option>}
            <option key='Easy' value='easy'>Easy</option>
            <option key='Medium' value='medium'>Medium</option>
            <option key='Hard' value='hard'>Hard</option>
          </select>

          <button 
            className='start-quiz-button'
            onClick={handleSubmit}
          >
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home;