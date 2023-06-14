import loadingPng from './../../assets/loading.png';
import './Loading.sass';

function Loading() {
  return <div className='loading-container'>
    <img src={loadingPng} alt='#'/>
    <span>Loading</span>
  </div>
}

export default Loading