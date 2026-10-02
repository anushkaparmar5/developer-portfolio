import React from 'react'
import { Helmet } from 'react-helmet'
import { Navbar, Footer, Landing, About, Skills, Education, Contacts, Achievement, Experience, Projects } from '../../components'
import { headerData } from '../../data/headerData'
import { useHistory } from 'react-router-dom'
import { titleCase } from '../../utils'

function Main() {
    let path = useHistory();
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - {titleCase(path?.location?.hash.replace("#", "")) || titleCase("Portfolio")}</title>
            </Helmet>
            <Navbar />
            <Landing />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Education />
            <Achievement />
            <Contacts />
            <Footer />
        </div>
    )
}

export default Main
