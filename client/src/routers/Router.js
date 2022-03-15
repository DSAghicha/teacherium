import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, About, StudentLogin } from '../pages'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* PUBLIC ROUTES */}
                <Route path='/' element={ <Home /> }/>
                <Route path='/about' element={ <About /> }/>

                {/* AUTHENTICATION ROUTES */}
                <Route path='/auth'>
                    <Route path='s'>
                        <Route path='login' element={ <StudentLogin /> }/>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router
