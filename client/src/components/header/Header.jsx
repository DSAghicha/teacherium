import './Header.sass'

import { NavLink } from 'react-router-dom'
import { NavHashLink } from 'react-router-hash-link'

import { Logo } from '../../assets'


const Header = () => {

    return (
        <header className='header'>
            <div className="header__logo__cr">
                <NavLink to='/'>
                    <img src={ Logo } alt="Logo Image" />                   
                </NavLink>
            </div>
            <ul className="header__nav__list">
                <li>
                    <NavHashLink to='/#features'>Features</NavHashLink>
                </li>
                <li>
                    <NavHashLink to='/#plans'>Plans</NavHashLink>
                </li>
                <li>
                    <NavLink to='/about'>About us</NavLink>
                </li>
                <li>
                    <NavLink to='/contact'>Contact us</NavLink>
                </li>
            </ul>
            <div className="header__right__cr">
                <NavLink to='/demo'>Get a free demo</NavLink>
                <NavLink to='/auth/s/login'>Candidate Login</NavLink>
            </div>
            
        </header>
    )
}

export default Header
