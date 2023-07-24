import Window from '../../components/Window'
import Gallery from '../../components/Gallery/index'

export default function Home() {
    return (
        <>
            <Window isHome={true}/>
            <Gallery />
        </>
    )
}