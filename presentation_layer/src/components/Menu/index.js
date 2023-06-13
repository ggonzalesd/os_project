import { NavLink } from 'react-router-dom';
import routes from '../../routers/routers';
import './Menu.sass';

function Menu() {
  return (
    <header className='app-menu'>
      <h1 className='app-menu-title'>
        <span>Os Project</span>
      </h1>
      <nav className='app-menu-nav'>
        <ul className='app-menu-list'>
          {
            routes
            .map( r => (
              <li key={r.path} className='nav-item'>
                <NavLink
                  to={r.path}
                  className={({ isActive }) => isActive ? 'link-active' : undefined }
                  >
                  <span>{r.display}</span>
                </NavLink>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  )
}

export default Menu;