import "./Login.scss"

import { Logo, ShowPasswordSVG, HidePasswordSVG } from "../../../../assets"
import { useState } from "react"
import { Link } from 'react-router-dom'

const StudentLogin = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [id, setID] = useState('')
    const [password, setPassword] = useState('')

    const handlePasswordToggle = () => setShowPassword(!showPassword)

    return (
        <>
            <section id="studentLoginCr" className="fwh bg-grey">
                <div className="s__login__central__cr">
                    <Link to='/'>
                        <img src={ Logo } alt="Logo Image" />
                    </Link>
                    <h1>Welcome Back,</h1>
                    <p>Please enter your Student ID and Password to continue.</p>

                    <form action="" method="post">
                        <div className="login__input__cr">
                            <label htmlFor="">Student ID:</label>
                            <div className="in-cr">
                                <input
                                    type="text"
                                    minLength="3"
                                    maxLength="10"
                                    name="login__id"
                                    id="login__id"
                                    value={id}
                                    onChange={(e) => setID(e.target.value)}
                                    required />
                            </div>
                        </div>
                        <div className="login__input__cr">
                            <label htmlFor="login__password">Password:</label>
                            <div className="in-cr">
                                <input 
                                    type={showPassword ? "text" : "password"} 
                                    minLength="8"
                                    maxLength="20"
                                    name="login__password" 
                                    id="login__password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required />
                                <div className="login__password_cr" onClick={handlePasswordToggle}>
                                    {showPassword ? <HidePasswordSVG/> : <ShowPasswordSVG/>}
                                </div>
                            </div>
                        </div>
                        <input type="submit" value="Login" disabled={!(id && password)}/>
                    </form>

                </div>
            </section>
        </>
    )
}

export default StudentLogin
