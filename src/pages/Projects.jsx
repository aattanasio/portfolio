import React from 'react'
import { FaGithub, FaExternalLinkAlt, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const Projects = () => {
    const projects = [
        {
            id: 2,
            title: 'Air Quality Dashboard - React Web Application',
            description: 'A responsive web application for monitoring real-time air quality and weather conditions worldwide. Features interactive search, current AQI readings with health recommendations, 5-day weather forecasts, and animated data visualizations. Includes pollutant breakdowns (PM2.5, PM10, CO, NO₂, O₃, SO₂) with gradient charts and smooth transitions.',
            technologies: ['React', 'TypeScript', 'Vite', 'Recharts', 'OpenWeather API', 'Vercel', 'CSS3'],
            timeline: '01/2026',
            github: 'https://github.com/aattanasio/air-quality-dashboard',
            demo: 'https://aqi-dashboard.asjaattanasio.it/'
        },
        {
            id: 2,
            title: 'GymMe - Flutter Application',
            description: 'A cross-platform Flutter application for managing gym networks, activities, and user bookings. Features role-based access with admin controls for gym management and user interfaces for browsing and booking workout sessions. Includes real-time schedules, location-based search, and integrated payment processing.',
            technologies: ['Flutter', 'Dart', 'Firebase', 'Google Maps API', 'Stripe', 'Cloud Functions', 'Google OAuth'],
            timeline: '03/2025 - 06/2025',
            github: 'https://github.com/sampozz/GymMe',
            demo: 'https://app.sampoz.tech'
        },
        {
            id: 3,
            title: 'RAG-based Question Answering System',
            description: 'Comprehensive implementation of advanced NLP techniques for question answering using Retrieval-Augmented Generation (RAG), toxicity detection, topic modeling, and large language model evaluation.',
            technologies: ['Python', 'Hugging Face', 'PyTorch', 'Natural Language Processing'],
            timeline: '05/2025 - 06/2025',
            github: 'https://github.com/martinimarcello00/NLP-project'
        },
        {
            id: 4,
            title: 'TCP/IP Client-Server application',
            description: 'Socket programming in C. Implemented a client-server communication system using TCP/IP sockets in C. Features robust protocol handling and message exchange logic. Includes a detailed project report explaining the architecture, protocol design, and testing methodology.',
            technologies: ['C', 'TCP/IP', 'Socket Programming', 'Client-Server Architecture', 'Protocol Design'],
            timeline: '09/2022 - 01/2023',
            github: 'https://github.com/aattanasio/UniPi/tree/main/Reti%20Informatiche'
        },
        {
            id: 5,
            title: 'Business Economics and Organization',
            description: 'Study of Geox S.p.A. business model: SWOT, costs/revenues, financial indicators, balance sheets, strategic projections. Deliverable: full report and suggestions.',
            technologies: ['Business Model Development', 'Cost and Revenue Analysis', 'Income Statement', 'Financial Statement Analysis', 'Economic and Financial Condition Assessment'],
            timeline: '03/2021 - 06/2021',
        },
        {
            id: 6,
            title: 'Robocup Jr. - Rescue Maze',
            description: 'Design of autonomous LEGO EV3 robots: sensors, pathfinding, object grabbing.',
            technologies: ['Robotics', 'LEGO Mindstorms EV3', 'Path Navigation Algorithms', 'Object Retrieval', 'C++', 'C'],
            timeline: '01/2018 - 10/2018',
        },
        {
            id: 7,
            title: 'ZeroRobotics',
            description: 'Competition with simulators for SPHERES microrobots on the ISS: orbit control, docking, cooperative control.',
            technologies: ['Aerospace Robotics', 'Satellite Programming', 'SPHERES Robots', 'International Space Station', 'C', 'Algorithm Design'],
            timeline: '06/2017 - 07/2017',
        },
        {
            id: 8,
            title: 'Programming the Turing Machine',
            description: 'Turing machine simulator: tape, states, transitions, step-by-step. Motivation: understanding computation models.',
            technologies: ['Turing Machine', 'Automata Theory', 'Computability', 'Algorithm Design', 'Simulator Development'],
            timeline: '02/2017 - 04/2017',
        },
        {
            id: 9,
            title: 'Rome Cup',
            description: 'LEGO NXT robot for Rescue Line competitions: autonomous navigation, object collection, reactive sequences. Strengths: team cohesion, rapid iteration.',
            technologies: ['Robotics', 'LEGO Mindstorms NX', 'Path Navigation Algorithms', 'Object Retrieval', 'C++'],
            timeline: '01/2017 - 03/2017',
        }
    ]

    return (
        <div className="page-container">
            <section className="section">
                <div className="container">
                    <h1 className="page-title">My Projects</h1>
                    <p className="page-subtitle">
                        A collection of academic coursework, competitions, and personal projects showcasing my technical skills and problem-solving abilities
                    </p>

                    <div className="projects-grid">
                        {projects.map(project => (
                            <div key={project.id} className="project-card">
                                <div className="project-header">
                                    <h3>{project.title}</h3>
                                    <span className="project-timeline">{project.timeline}</span>
                                </div>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tech">
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="fancy-button"
                                        >
                                            <FaGithub size={18} />
                                            GitHub
                                        </a>
                                    )}
                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="fancy-button demo-button"
                                        >
                                            <FaExternalLinkAlt size={16} />
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
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
        </div>
    )
}

export default Projects
