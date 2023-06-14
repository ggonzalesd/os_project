import Loading from '../components/Loading';
import Error from '../components/Error';
import UserComponent from '../components/UserComponent';
import environment from './../config/env';
import useApi from './../hooks/useApi';

import './route.sass';

function Users() {
  const url = `http://${environment.apihost}:${environment.apiport}/api/v1`;
  const users = useApi(url + '/users');

  return (
    <div className={`container ${(users.loading || users.error) && 'container-center'}`}>
      {
        users.loading && <Loading/>
      }
      {
        users.error && <Error error={users.error}/>
      }
      {
        users.data && users.data.map(u => (
          <UserComponent key={u._id} user={u}/>
        ))
      }
    </div>
  )
}

export default Users;