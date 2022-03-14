import { Navigate } from "react-router-dom"

const PreventedRoute = ({ children }) => {
    // Condition to check user auth
    const auth = false

    return !auth ? children : <Navigate to='/dashboard' />
}

export default PreventedRoute
