import Logo from '../../assets/LOGO-Dark.png'
import '../../styles/Footer.scss'

export default function  Footer() {

    return (
        <footer className='footer'>
            <img src={Logo} alt='logo kasa' className='footer__logo'/>
            <h2 className='footer__rights'>© 2020 Kasa. All rights reserved</h2>
        </footer>

    )
}