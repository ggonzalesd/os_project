import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.sass';
import Menu from './components/Menu';
import Home from './routers/Home';
import NotFound from './routers/NotFound';
import Users from './routers/Users';

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
            path='*'
            element={<NotFound />}
          />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
