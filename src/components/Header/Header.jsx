import { Link } from 'react-router-dom';

import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <Link to='/' className='header-title'>QUIZ - let's Check Your Knowledge</Link>
    </div>
  )
}

export default Header;