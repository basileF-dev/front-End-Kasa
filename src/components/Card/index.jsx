import '../../styles/Card.scss'

export default function Card({title, cover}) {

    return (
        <article className="card">
            <img src={cover} alt={title} className="card__img"/>
            <div className='card__overlay'>
                <h3 className="card__overlay__title">{title}</h3>
            </div>
        </article>
    )
}