import ShowInfo from './../ShowInfo';

import './ComplaintComponent.sass';

function ComplaintComponent({ complaint }) {
  const {
    assistant_dni,
    clothes_uuid,
    created_at,
    message,
    sede_code,
    user_dni
  } = complaint;

  const date = new Date(created_at);
  const dateText = `${date.getFullYear()}/${date.getMonth()}/${date.getDay()}`

  return (
    <div className='complaint-item'>
      <div className='complaint-basics'>
        <span>DNI: {user_dni}</span>
        <span>{dateText}</span>
      </div>
      <div className='complaint-info'>
        <ShowInfo name='Assistant' info={assistant_dni}/>
        <ShowInfo name='Sede' info={sede_code} />
        <ShowInfo name='Clothes' info={clothes_uuid} />
      </div>
      <span className='complaint-msg'>{message}</span>
    </div>
  )
}

export default ComplaintComponent;