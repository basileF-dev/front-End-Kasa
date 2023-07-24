import Window from '../../components/Window'
import Collapse from '../../components/Collapse'
import '../../styles/APropos.scss'

export default function APropos() {
    const fiabilité = 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.'
    const respect = 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
    const service = 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
    const securite = 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'aulocataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.'


    return (
        <>
            <section className='a-propos-window'>
                <Window className="window-a-propos" isHome={false}/>
            </section>
            <section className='scroll-bar-section'>
                <Collapse title={'Fiabilité'} element={fiabilité}/>
                <Collapse title={'Respect'} element={respect}/>
                <Collapse title={'Service'} element={service}/>
                <Collapse title={'Sécurité'} element={securite}/>
            </section>
        </>
    )
}