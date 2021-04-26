import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
import Loader from '../../components/Loader/Loader';

import './Home.css';

import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

const Home = ({ setScore, name, setName, fetchQuestions, setCurrentQuestion }) => {

  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [difficulty, setDifficulty] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const history = useHistory();

  useEffect(() => {
    axios.get(`https://opentdb.com/api_category.php`)
      .then((res) => {
        setCategories(res.data.trivia_categories)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  },[])

  const handleSubmit = () => {
    if(!category || !difficulty || !name) {
      setError(true)
      return;
    } else {
      setError(false);
      setCurrentQuestion(0);
      setScore(0);
      fetchQuestions(category, difficulty)
      history.push("/quiz")
    }
  }

  if(loading) return <Loader />

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
            {categories.map(category => <option key={category.id} value={category.id}>{category.name}</option>)}
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