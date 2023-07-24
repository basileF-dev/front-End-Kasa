import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/index'
import APropos from '../pages/A-Propos/index'
import Header from '../components/Header/index'
import Footer from '../components/Footer/index'
import Fiche from '../pages/Fiche'
import Error from '../pages/Error/Error'

export default function Router() {
    return (
        <BrowserRouter>
            <Header />
            <main className='main'>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Fiche/:id" element={<Fiche />} />
                    <Route path="/APropos" element={<APropos />} />
                    <Route path="/*" element={<Error />}/>
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    )
}