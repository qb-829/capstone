
import { Link }from 'react-router-dom';
import '../assets/styles/baselayout.css'

export default function Nav() {

  return <>
     <div>
        <nav className='nav'>
          <Link to='/' > Home </Link> &nbsp;
          <Link to='/about' > About </Link> &nbsp;
          <Link to='/myplaylist' > My Playlist </Link> &nbsp;
          <Link to='/create' > Create Playlist </Link> &nbsp;
          <Link to='/contact' > Contact </Link>
        </nav>
      </div>
  </>
  
}
