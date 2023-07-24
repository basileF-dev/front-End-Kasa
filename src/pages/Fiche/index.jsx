import data from '../../Data/data.json'
import { useParams, Navigate } from 'react-router-dom'
import Slider from '../../components/Slider/index'
import FicheInfo from '../../components/Fiche-info'

export default function Fiche() {
    const {id} = useParams()


    const fiche = data.reduce((acc, el) => {
        return el.id === id ? acc = el : acc
    }, null)

    const imgArr = fiche?.pictures

    return ( fiche ? 
            <section className="fiche">
                <Slider imgArr={imgArr}/>
                <FicheInfo title={fiche.title} location={fiche.location} tags={fiche.tags} host={fiche.host} rating={fiche.rating} description={fiche.description} equipements={fiche.equipments}/>
            </section> 
            : 
            <Navigate to={"/*"} />
    )
}