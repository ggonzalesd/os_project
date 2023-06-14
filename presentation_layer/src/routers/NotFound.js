import './route.sass';
import notFoundImg from './../assets/not-found.png'
import { useLocation } from 'react-router-dom';

function NotFound() {
  const location = useLocation();
  return (
    <div className="container container-center">
      <div className='not-found'>
        <img src={notFoundImg} alt=''></img>
        <span>{location.pathname} Not Found</span>
      </div>
    </div>
  )
}

export default NotFound;