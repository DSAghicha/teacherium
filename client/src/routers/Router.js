import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* PUBLIC ROUTES */}
                <Route path='/'/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router
