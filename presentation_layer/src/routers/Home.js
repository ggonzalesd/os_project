import './route.sass';

function Home() {
  return (
    <div className={`container container-center`}>
      <div className='home'>
        <div className='home-titles'>
          <h2>Sistemas Operativos</h2>
          <h5>Trabajo final</h5>
        </div>
        <div className='home-names'>
          <span>Gonzales De La Cruz, Grober Ericson</span>
          <span>Quispe Palacín, Diego Eloy</span>
          <span>Castro Ataucusi, Gleider Venancio</span>
        </div>
      </div>
    </div>
  )
}

export default Home;