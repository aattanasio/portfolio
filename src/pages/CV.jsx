import React, { useState, useEffect } from 'react'
import { FaFilePdf, FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import CVPdf from '../assets/cv.pdf'

const CV = () => {
    const [showPDF, setShowPDF] = useState(false)

    const isMobile = () => {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
            window.innerWidth <= 768
    }

    const openPDF = () => {
        if (isMobile()) {
            // On mobile, open PDF in a new tab for full screen experience
            window.open(CVPdf, '_blank')
        } else {
            // On desktop, show in modal
            setShowPDF(true)
        }
    }

    const closePDF = () => {
        setShowPDF(false)
    }

    useEffect(() => {
        if (showPDF) {
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
            const navbar = document.querySelector('.navbar')
            if (navbar) {
                navbar.style.transition = 'none'
                navbar.style.paddingRight = `${scrollbarWidth}px`
                setTimeout(() => {
                    navbar.style.transition = ''
                }, 0)
            }
            document.body.style.overflow = 'hidden'
            document.body.style.paddingRight = `${scrollbarWidth}px`
        } else {
            const navbar = document.querySelector('.navbar')
            if (navbar) {
                navbar.style.transition = 'none'
                navbar.style.paddingRight = '0px'
                setTimeout(() => {
                    navbar.style.transition = ''
                }, 0)
            }
            document.body.style.overflow = 'unset'
            document.body.style.paddingRight = '0px'
        }

        return () => {
            document.body.style.overflow = 'unset'
            document.body.style.paddingRight = '0px'
            const navbar = document.querySelector('.navbar')
            if (navbar) {
                navbar.style.transition = 'none'
                navbar.style.paddingRight = '0px'
                setTimeout(() => {
                    navbar.style.transition = ''
                }, 0)
            }
        }
    }, [showPDF])

    return (
        <div className="page-container">
            <section className="section">
                <div className="container cv-container">
                    <div className="cv-header">
                        <h1 className="page-title">Curriculum Vitae</h1>
                        <button className="fancy-button" onClick={openPDF}>
                            <FaFilePdf size={18} />
                            <span>View PDF</span>
                        </button>
                    </div>

                    <div className="cv-section">
                        <h2>Personal Information</h2>
                        <div className="cv-content">
                            <p><strong>Name:</strong> Asja Attanasio</p>
                            <p><strong>Location:</strong> Milan, Italy</p>
                            <p><strong>Email:</strong> <a href="mailto:asja.attanasio@gmail.com">asja.attanasio@gmail.com</a></p>
                            <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/asjaattanasio/" target="_blank" rel="noopener noreferrer">linkedin.com/in/asjaattanasio</a></p>
                            <p><strong>GitHub:</strong> <a href="https://github.com/aattanasio" target="_blank" rel="noopener noreferrer">github.com/aattanasio</a></p>
                        </div>
                    </div>

                    {/*}
                    <div className="cv-section">
                        <h2>Professional Summary</h2>
                        <div className="cv-content">
                            <p>
                                Experienced Full Stack Developer with 5+ years of expertise in building scalable
                                web applications. Proficient in React, Node.js, and modern web technologies.
                                Strong problem-solving skills and a passion for creating user-centric solutions.
                                Proven track record of leading development teams and delivering high-quality projects.
                            </p>
                        </div>
                    </div>
                    */}

                    <div className="cv-section">
                        <h2>Education</h2>
                        <div className="cv-item">
                            <div className="cv-item-header">
                                <h3>Master's in Computer Science Engineering</h3>
                                <span className="cv-period">2023 - 2025</span>
                            </div>
                            <p className="cv-company">Polytechnic University of Milan | Milan, Italy</p>
                            <p>Completed a mixed academic track with a focus on practical software development and AI-related methodologies.</p>
                        </div>

                        <div className="cv-item">
                            <div className="cv-item-header">
                                <h3>Bachelor's in Computer Engineering</h3>
                                <span className="cv-period">2019 - 2023</span>
                            </div>
                            <p className="cv-company">University of Pisa | Pisa, Italy</p>
                            <p>Foundation in computer science, algorithms, and software development.</p>
                        </div>
                    </div>

                    <div className="cv-section">
                        <h2>School-To-Work Experience</h2>
                        <div className="cv-item">
                            <div className="cv-item-header">
                                <h3>Software Developer</h3>
                                <span className="cv-period">11/2018 - 03/2019</span>
                            </div>
                            <p className="cv-company">IDS Georadar S.r.l. | Pisa, Italy</p>
                            <p>
                                Developed control interface for a mechanical arm attachment used in
                                industrial testing equipment within an agile team environment.
                            </p>
                            <ul className="cv-list">
                                <li>Built responsive Qt-based control interface with real-time feedback</li>
                                <li>Implemented multithreaded architecture for system stability</li>
                                <li>Collaborated using Git and Scrum in 2-week sprints</li>
                            </ul>
                        </div>

                        <div className="cv-item">
                            <div className="cv-item-header">
                                <h3>Print Production Assistant</h3>
                                <span className="cv-period">07/2018 - 08/2018</span>
                            </div>
                            <p className="cv-company">Pixel & Co. | Msida, Malta</p>
                            <p>
                                International work experience in print production.
                            </p>
                            <ul className="cv-list">
                                <li>Gained cross-cultural work experience in an international setting</li>
                                <li>Managed client communications and design specifications</li>
                                <li>Developed adaptability working in a new cultural environment</li>
                            </ul>
                        </div>
                    </div>

                    <div className="cv-section">
                        <h2>Technical Skills</h2>
                        <div className="cv-skills-grid">
                            <div>
                                <h4>Programming Languages</h4>
                                <p>JavaScript, Python, Java, C, C++, PHP, Assembly, Verilog</p>
                            </div>
                            <div>
                                <h4>Web and Mobile</h4>
                                <p>React, HTML5, CSS3, Node.js, Express, Flutter, Node-RED, JSON, XML</p>
                            </div>
                            <div>
                                <h4>Databases and Frameworks</h4>
                                <p>SQL, MySQL, Firestore, Apache Spark, Akka, ContikiNG, MQTT, Agile/Scrum</p>
                            </div>
                            <div>
                                <h4>Development Tools</h4>
                                <p>Git, Visual Studio, GCC, NetBeans, Postman, Figma, MATLAB, MS Office, LaTeX</p>
                            </div>
                        </div>
                    </div>

                    <div className="cv-section">
                        <h2>Certifications</h2>
                        <ul className="cv-list">
                            <li>Scaling Networks - Cisco CCNA R&S (2019)</li>
                            <li>Routing and Switching Essential - Cisco CCNA R&S (2018)</li>
                            <li>Introduction to Networks - Cisco CCNA R&S (2017)</li>
                        </ul>
                    </div>

                    <div className="cv-section">
                        <h2>Volunteering</h2>
                        <ul className="cv-list">
                            <li>Ambulance Service (2018 – 2022)</li>
                            <li>UNICEF (2017 – 2018)</li>
                        </ul>
                    </div>

                    <div className="cv-section">
                        <h2>Languages</h2>
                        <ul className="cv-list">
                            <li>Italian - Native</li>
                            <li>English - Cambridge FCE scored at C1 Level</li>
                            <li>German - Beginner</li>
                        </ul>
                    </div>

                    <div className="simple-contact-icons">
                        <a
                            href="mailto:asja.attanasio@gmail.com"
                            className="simple-contact-icon"
                            aria-label="Email"
                        >
                            <MdEmail size={20} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/asjaattanasio/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="simple-contact-icon"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin size={20} />
                        </a>
                        <a
                            href="https://github.com/aattanasio"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="simple-contact-icon"
                            aria-label="GitHub"
                        >
                            <FaGithub size={20} />
                        </a>
                    </div>
                </div>
            </section>

            {/* PDF Modal */}
            {showPDF && (
                <div className="pdf-modal" onClick={closePDF}>
                    <div className="pdf-modal-content" onClick={(e) => e.stopPropagation()}>
                        <iframe
                            src={CVPdf}
                            title="CV PDF"
                            className="pdf-iframe"
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

export default CV
