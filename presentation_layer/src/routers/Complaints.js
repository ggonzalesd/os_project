import environment from './../config/env';
import Error from '../components/Error';
import useApi from '../hooks/useApi';
import './route.sass';
import { useEffect } from 'react';
import Loading from '../components/Loading';
import ComplaintComponent from '../components/ComplaintComponent';

function Complaints() {
  const url = `http://${environment.apihost}:${environment.apiport}/api/v1`;
  const complaints = useApi(url + '/complaints');
  
  useEffect(()=>{
    console.log(complaints);
  }, [complaints])

  return (
    <div className={`container ${(complaints.loading || complaints.error) && 'container-center'}`}>
      {
        complaints.loading && <Loading/>
      }
      {
        complaints.error && <Error error={complaints.error} />
      }
      {
        complaints.data && complaints.data.map( c => (
          <ComplaintComponent key={c._id} complaint={c} />
        ))
      }
    </div>
  )
}

export default Complaints;