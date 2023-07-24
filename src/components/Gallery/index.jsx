import data from '../../Data/data.json'
import Card from '../Card/index'
import { Link } from 'react-router-dom'
import '../../styles/Gallery.scss'

export default function Gallery() {

    return (
        <section className="gallery">
            {data.map((el) =>
                <Link to={`/Fiche/${el.id}`} key={el.id} className='gallery__article-link'>
                    <Card title={el.title} cover={el.cover}/>
                </Link>
            )}
        </section>
    )
}