import { Link } from 'react-router-dom'
import '../../styles/Error.scss'

export default function Error() {

    return (
        <section className='error'>
            <h2 className='error__404'>404</h2>
            <p className='error__p'>Oups! La page que vous demandez n'existe pas</p>
            <Link to="/" className='error__link'>Retourner sur la page d'acceuil</Link>
        </section>
    )
}