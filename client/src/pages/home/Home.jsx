import "./Home.sass"

import { HomeSVG } from '../../assets'
import { Header } from '../../components'

const Home = () => {
    return (
        <>
            <Header /> 
            <section id="home" className="fwh bg-grey">
                <div className="home__left__cr">
                    <h1>Digitize your school and become future ready now</h1>
                    <p>Teacherium is an end to end institute management and learning management venture that helps educational institutions
                        manage their core activities. Embracing the digital-first ideology, we have a website along with its desktop counterpart equipped with
                        best-in-class features and in-depth functionality.
                    </p>
                    <a href="/auth/i/register">Get Started</a>
                </div>
                <HomeSVG className="home__right__cr" />
            </section>
            <div className="quick__ov">
                <div className="quick__ov__info__cr"></div>
            </div>
            <section id="features" className="fwh bg-grey">
                <h1>Everything at One Place</h1>
                <p>Explore everything that your institute needs only at Teacherium</p>
                <div className="cr features__lcr">
                    <h1>Hybrid Operating Model</h1>
                    <p>Run your school online and offline</p>
                    
                </div>
            </section>
            <section id="plans" className="fwh bg-grey"></section>
        </>
    )
}

export default Home
