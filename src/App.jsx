import {HeaderAndNavigation} from "./components/headerAndNavigation/HeaderAndNavigation.jsx";
import './styles/utilities.sass'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';

function App() {

    return (
        <>
            <BrowserRouter>
                <HeaderAndNavigation/>
                <Routes>
                    <Route path="/" element={<Navigate to="advantages" />}/>
                    <Route path="advantages" component={<></>} />
                    <Route path="tariffs" component={<></>} />
                    <Route path="sales" component={<></>} />
                    <Route path="promotional-tariff" component={<></>} />
                    <Route path="eSIM" component={<></>} />
                    <Route path="new-subscriber" component={<></>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
