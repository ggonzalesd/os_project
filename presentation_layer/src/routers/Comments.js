import UserComponent from '../components/UserComponent';
import environment from './../config/env';
import useApi from './../hooks/useApi';

import './route.sass';

function Comments() {
  const url = `http://${environment.apihost}:${environment.apiport}/api/v1`;
  const users = useApi(url + '/comments');

  return (
    <div className={`container ${users.loading && 'container-center'}`}>
      {
        users.loading && <span>loading...</span>
      }
      {
        users.error && <span>¡Error!</span>
      }
      {
        users.data && users.data.map(u => (
          <UserComponent key={u._id} user={u}/>
        ))
      }
    </div>
  )
}

export default Comments;