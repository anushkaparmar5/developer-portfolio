import React from 'react'
import { Helmet } from 'react-helmet'
import { Navbar, Footer, Landing, About, Skills, Education, Contacts, Achievement, Experience, Services } from '../../components'
import { headerData } from '../../data/headerData'
import { useHistory } from 'react-router-dom'
import { titleCase } from '../../utils'

function Main() {
    let path = useHistory();
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - {titleCase(path?.location?.hash.replace("#", "")) || titleCase("PORTFolio")}</title>
            </Helmet>
            <Navbar />
            <Landing />
            <About />
            <Skills />
            <Experience />
            <Services />
            <Education />
            {/* <Projects /> */}
            <Achievement />
            <Contacts />
            <Footer />
        </div>
    )
}

export default Main
