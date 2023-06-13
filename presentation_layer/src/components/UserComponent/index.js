import './UserComponent.sass';

export default function UserComponent({ user }) {
  const { dni, fullname, username, joined_at } = user;

  const time = new Date(joined_at);
  const [year, month, day] = [time.getFullYear(), time.getMonth()+1, time.getDay()+1];

  return <div className='user-item'>
    <div className='user-name'>
      <span>{fullname}</span>
      <span>({username})</span>
    </div>
    <div className='user-info'>
      <span>{dni}</span>
      <span>{year}/{month}/{day}</span>
    </div>
  </div>
};