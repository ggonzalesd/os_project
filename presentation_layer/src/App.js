import { environment } from './config/env';
import useApi from './hooks/useApi';

import './App.css';

function App() {
  const url = `http://${environment.apihost}:${environment.apiport}/api/v1`;
  const users = useApi(url+'/users');

  return (
    <>
      {users.data && users.data.map(user => <p key={user.username}>{user.username}</p>)}
      {users.loading && <p>loading...</p> }
    </>
  );
}

export default App;
