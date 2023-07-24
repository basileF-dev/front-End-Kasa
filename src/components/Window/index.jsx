import '../../styles/Window.scss'
import urlApropos from '../../assets/image-Apropos.png'
import urlHome from '../../assets/image-homepage.png'

export default function Window({isHome}) {

    return (
        <section className='window'>
            <img src={isHome === true ? urlHome : urlApropos} alt="paysage" className='window__img'/>
            {isHome === true && <p className='window__title'>Chez vous, partout et ailleurs</p>}
        </section>
    )
}