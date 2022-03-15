import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, About } from '../pages'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* PUBLIC ROUTES */}
                <Route path='/' element={ <Home /> }/>
                <Route path='/about' element={ <About /> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router
