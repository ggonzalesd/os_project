import './Error.sass';
import errorImg from './../../assets/error.png';

function Error ({ error }) {
  return (
    <div className='error-container'>
      <img src={errorImg} alt='#'/>
      <span>{error.code}: {error.message}</span>
    </div>
  )
}

export default Error