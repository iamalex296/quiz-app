import './Home.css'

import Categories from '../../Data/Categories';

const Home = () => {
  return(
    <div className='content'>
      <div className='settings'>
        <span className='quiz-settings'>Quiz Settings</span>

        <div className='select-settings'>
          <label style={{fontWeight: 'normal'}} for='enter your name'>Enter Your Name</label>
          <input
            className='name-input' 
            placeholder='Enter Your Name...' 
            type='text'
            // onChange={}
          />

          <label style={{fontWeight: 'normal', marginTop: '15px'}} for='select category'>Select Category</label>
          <select name="categories" className='select-category'>
            {Categories.map(category => <option key={category.value} value={category.value}>{category.category}</option>)}
          </select>

          <label style={{fontWeight: 'normal', marginTop: '15px'}} for='select difficulty'>Select Difficulty</label>
          <select name="categories" className='select-category'>
            <option key='Easy' value='easy'>Easy</option>
            <option key='Medium' value='medium'>Medium</option>
            <option key='Hard' value='hard'>Hard</option>
          </select>

          <button className='start-quiz-button'>Start Quiz</button>
        </div>
      </div>
    </div>
  )
}

export default Home;