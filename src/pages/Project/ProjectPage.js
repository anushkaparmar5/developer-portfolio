import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiSearch } from 'react-icons/fi';
import Fade from 'react-reveal/Fade';

import './ProjectPage.css';
import SingleProject from '../../components/Projects/SingleProject/SingleProject';
import { projectsData } from '../../data/projectsData';
import { headerData } from '../../data/headerData';

function ProjectPage() {
    const [search, setSearch] = useState('');

    const filteredArticles = projectsData.filter((project) => {
        const content = project.projectName + ' ' + project.projectDesc + ' ' + (project.tags ? project.tags.join(' ') : '');
        return content.toLowerCase().includes(search.toLowerCase());
    });

    return (
        <div className='projectPage'>
            <Helmet>
                <title>{headerData.name} | Projects Archive</title>
            </Helmet>

            {/* Background Grid & Ambient Glows */}
            <div className='projectPage-bg-grid' />
            <div className='projectPage-glow projectPage-glow-1' />
            <div className='projectPage-glow projectPage-glow-2' />

            {/* Header */}
            <header className='projectPage-header'>
                <Link to='/' className='projectPage-back-btn' aria-label='Back to Home'>
                    <FiArrowLeft className='back-btn-icon' />
                    <span>Back to Home</span>
                </Link>

                <Fade bottom duration={700}>
                    <div className='projectPage-header-content'>
                        <span className='projectPage-badge'>Portfolio Archive</span>
                        <h1 className='projectPage-title'>All Projects</h1>
                        <p className='projectPage-subtitle'>
                            A comprehensive showcase of web applications, client solutions, and frontend architectures.
                        </p>
                    </div>
                </Fade>
            </header>

            {/* Main Container */}
            <main className='projectPage-container'>
                {/* Search Bar */}
                <Fade bottom duration={700} delay={150}>
                    <div className='projectPage-search-wrapper'>
                        <FiSearch className='search-input-icon' />
                        <input
                            type='text'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder='Search by name, technology, or keywords (e.g. React, Redux, API)...'
                            className='projectPage-search-input'
                        />
                        {search && (
                            <button
                                className='search-clear-btn'
                                onClick={() => setSearch('')}
                                aria-label='Clear search'
                            >
                                ✕
                            </button>
                        )}
                    </div>
                </Fade>

                {/* Projects Grid */}
                <div className='projectPage-grid-wrapper'>
                    {filteredArticles.length > 0 ? (
                        <div className='projectPage-grid'>
                            {filteredArticles.map((project, idx) => (
                                <Fade bottom duration={650} delay={(idx % 6) * 100} key={project.id}>
                                    <SingleProject
                                        id={project.id}
                                        name={project.projectName}
                                        desc={project.projectDesc}
                                        tags={project.tags}
                                        code={project.code}
                                        demo={project.demo}
                                        image={project.image}
                                    />
                                </Fade>
                            ))}
                        </div>
                    ) : (
                        <Fade bottom duration={600}>
                            <div className='projectPage-no-results'>
                                <span className='no-results-emoji'>🔍</span>
                                <h3>No projects found</h3>
                                <p>No matching projects found for "<strong>{search}</strong>". Try another search keyword.</p>
                                <button className='reset-search-btn' onClick={() => setSearch('')}>
                                    Clear Search Filter
                                </button>
                            </div>
                        </Fade>
                    )}
                </div>
            </main>
        </div>
    );
}

export default ProjectPage;
