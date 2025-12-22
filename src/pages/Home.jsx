import React, { useState, useContext } from 'react'
import { useTheme } from '../context/ThemeContext'
import { FaFilePdf, FaLinkedin, FaGithub } from 'react-icons/fa'
import { MdEmail, MdLocationOn } from 'react-icons/md'
import BachelorThesis from '../assets/thesis-bachelor.pdf'
import MasterThesis from '../assets/thesis-master.pdf'
import introVideoLight from '../assets/intro-light.mp4'
import introVideoDark from '../assets/intro-dark.mp4'

const Home = () => {
    const [showPDF, setShowPDF] = useState(null)
    const { darkMode, toggleTheme } = useTheme()

    const openPDF = (pdfUrl) => {
        setShowPDF(pdfUrl)
    }

    const closePDF = () => {
        setShowPDF(null)
    }

    return (
        <div className="page-container">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <div className="hero-video-container">
                        <video
                            className="hero-video"
                            src={darkMode ? introVideoDark : introVideoLight}
                            autoPlay
                            muted
                            playsInline
                            key={darkMode}
                        />
                    </div>
                    <p className="hero-subtitle">Software Engineer | Developer | Problem Solver</p>
                </div>
            </section>


            {/* Education Section */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">Education</h2>
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <h3>Master's in Computer Science Engineering</h3>
                                <span className="institution">Polytechnic University of Milan</span>
                                <span className="period">2023 - 2025</span>
                                <p>Completed a mixed academic track with a focus on practical software development and AI-related methodologies.</p>
                                <button
                                    className="thesis-button"
                                    onClick={() => openPDF(MasterThesis)}
                                >
                                    <FaFilePdf size={18} />
                                    Master's Thesis
                                </button>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <h3>Bachelor's in Computer Engineering</h3>
                                <span className="institution">University of Pisa</span>
                                <span className="period">2019 - 2023</span>
                                <p>Foundation in computer science, algorithms, and software development.</p>
                                <button
                                    className="thesis-button"
                                    onClick={() => openPDF(BachelorThesis)}
                                >
                                    <FaFilePdf size={18} />
                                    Bachelor's Thesis
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Work Experience Section */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">School-To-Work Experience</h2>
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <h3>Software Developer</h3>
                                <span className="institution">IDS Georadar S.r.l. - Pisa, Italy</span>
                                <span className="period">11/2018 - 03/2019</span>
                                <p>
                                    Developed control interface for a mechanical arm attachment used in
                                    industrial testing equipment within an agile team environment.
                                </p>
                                <ul className="achievements">
                                    <li>Built responsive Qt-based control interface with real-time feedback</li>
                                    <li>Implemented multithreaded architecture for system stability</li>
                                    <li>Collaborated using Git and Scrum in 2-week sprints</li>
                                </ul>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <h3>Print Production Assistant</h3>
                                <span className="institution">Pixel & Co. - Msida, Malta</span>
                                <span className="period">07/2018 - 08/2018</span>
                                <p>
                                    International work experience in print production.
                                </p>
                                <ul className="achievements">
                                    <li>Gained cross-cultural work experience in an international setting</li>
                                    <li>Managed client communications and design specifications</li>
                                    <li>Developed adaptability working in a new cultural environment</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Information Section */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">Contact me</h2>
                    <div className="contact-info-section">
                        <div className="contact-buttons">
                            <a
                                href="mailto:asja.attanasio@gmail.com"
                                className="contact-button"
                            >
                                <MdEmail size={20} />
                                <span>Email</span>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/asjaattanasio/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-button"
                            >
                                <FaLinkedin size={20} />
                                <span>LinkedIn</span>
                            </a>
                            <a
                                href="https://github.com/aattanasio"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-button"
                            >
                                <FaGithub size={20} />
                                <span>GitHub</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* PDF Modal */}
            {showPDF && (
                <div className="pdf-modal" onClick={closePDF}>
                    <div className="pdf-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="pdf-close-button" onClick={closePDF}>
                            ✕
                        </button>
                        <iframe
                            src={showPDF}
                            title="Thesis PDF"
                            className="pdf-iframe"
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Home
