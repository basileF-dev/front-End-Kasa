import Logo from '../../assets/LOGO.png'
import { NavLink } from 'react-router-dom'
import '../../styles/Header.scss'

export default function  Header() {

    return (
        <nav className='navbar'>
            <NavLink to="/" >
                <img src={Logo} alt='logo kasa' className='navbar__home'/>
            </NavLink>
            <div className='navbar__links'>
                <NavLink to="/" className='navbar__links__link'>Accueil</NavLink>
                <NavLink to="/APropos" className='navbar__links__link'>A Propos</NavLink>
            </div>
        </nav>

    )
}