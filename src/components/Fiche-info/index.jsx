import emptyStar from '../../assets/empty-star.svg'
import fullStar from '../../assets/full-star.svg'
import '../../styles/Fiche-info.scss'
import Collapse from '../Collapse'

export default function FicheInfo({title, location, tags, host, rating, description, equipements}) {
    const nameArr = host.name.split(' ')

    return (
        <>
            <div className='fiche__container'>
                <div className="fiche__container__ti-ta">
                    <h1 className="fiche__container__ti-ta__title">{title}</h1>
                    <p className='fiche__container__ti-ta__loc'>{location}</p>
                    <div className="fiche__container__ti-ta__tags">
                        {tags.map((tag, index) => 
                        <div key={index} className='fiche__container__ti-ta__tags__tag'>{tag}</div>
                        )}
                    </div>
                </div>
                <div className="fiche__container__host">
                    <div className="fiche__container__host__container">
                        <h2 className="fiche__container__host__container__name">{nameArr[0]}<br></br>{nameArr[1]}</h2>
                        <img className="fiche__container__host__container__img" src={host.picture} alt="hôte" />
                    </div>
                    <div className="fiche__container__host__rating">
                        <img className='fiche__container__host__rating__star' src={rating <= 0 ? emptyStar : fullStar} alt="etoile de note" />
                        <img className='fiche__container__host__rating__star' src={rating <= 1 ? emptyStar : fullStar} alt="etoile de note" />
                        <img className='fiche__container__host__rating__star' src={rating <= 2 ? emptyStar : fullStar} alt="etoile de note" />
                        <img className='fiche__container__host__rating__star' src={rating <= 3 ? emptyStar : fullStar} alt="etoile de note" />
                        <img className='fiche__container__host__rating__star' src={rating <= 4 ? emptyStar : fullStar} alt="etoile de note" />
                    </div>
                </div>
            </div>
            <div className="fiche__desc">
                    <Collapse title={'Description'} element={description}/>
                    <Collapse title={'Équipement'} element={equipements}/>
            </div>
        </>
    )
}