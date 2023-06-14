import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.sass';
import Menu from './components/Menu';
import Home from './routers/Home';
import NotFound from './routers/NotFound';
import Users from './routers/Users';
import Comments from './routers/Comments';
import Complaints from './routers/Complaints';

function App() {
  return (
    <HashRouter>
      <Menu />
      <div className='router-container'>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />

          <Route
            path='/users'
            element={<Users />}
          />

          <Route
            path='/comments'
            element={<Comments />}
          />

          <Route
            path='/complaints'
            element={<Complaints />}
          />

          <Route
            path='*'
            element={<NotFound />}
          />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
