import { useState } from 'react';
import './ShowInfo.sass';

function ShowInfo({ name, info }) {
  const [ hover, setHover ] = useState(false);

  const mouseIn = () => {
    setHover(true)
  }
  const mouseOut = () => {
    setHover(false)
  }

  return (
    <>
      <div
        className={`show-info ${!info && 'show-info-disabled'}`}
        onMouseEnter={mouseIn}
        onMouseOut={mouseOut}
        >
        {
          (info && hover) &&
          <div className="show-info-pop">
            {name}: {info}
          </div>
        }
        {name}
      </div>
    </>
  )
}

export default ShowInfo;