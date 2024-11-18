import {HeaderAndNavigation} from "./components/headerAndNavigation/HeaderAndNavigation.jsx";
import './styles/utilities.sass'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';

function App() {

    return (
        <>
            <BrowserRouter basename="/Forkitech">
                <HeaderAndNavigation/>
                <Routes>
                    <Route path="/" element={<Navigate to="advantages" />}/>
                    <Route path="advantages" element={<></>} />
                    <Route path="tariffs" element={<></>} />
                    <Route path="sales" element={<></>} />
                    <Route path="promotional-tariff" element={<></>} />
                    <Route path="eSIM" element={<></>} />
                    <Route path="new-subscriber" element={<></>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
