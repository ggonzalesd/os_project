import Error from '../components/Error';
import CommentComponent from '../components/CommentComponent';
import Loading from '../components/Loading';
import environment from './../config/env';
import useApi from './../hooks/useApi';

import './route.sass';

function Comments() {
  const url = `http://${environment.apihost}:${environment.apiport}/api/v1`;
  const comments = useApi(url + '/comments');

  console.log(process.env.API_HOST);

  return (
    <div className={`container ${(comments.loading || comments.error) && 'container-center'}`}>
      {
        comments.loading && <Loading/>
      }
      {
        comments.error && <Error error={comments.error}/>
      }
      {
        comments.data && comments.data.map( c => (
          <CommentComponent key={c._id} comment={c} />
        ))
      }
    </div>
  )
}

export default Comments;