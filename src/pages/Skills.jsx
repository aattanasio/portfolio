import React from 'react'

const Skills = () => {
    const skillsData = {
        'Frontend Development': {
            skills: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Redux', 'Next.js'],
            level: 95
        },
        'Backend Development': {
            skills: ['Node.js', 'Express', 'Python', 'Django', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL'],
            level: 85
        },
        'Tools & DevOps': {
            skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Jenkins', 'Kubernetes', 'Linux', 'Nginx'],
            level: 80
        },
        'Design & UI/UX': {
            skills: ['Figma', 'Adobe XD', 'Responsive Design', 'Accessibility', 'Wireframing', 'Prototyping'],
            level: 75
        },
        'Mobile Development': {
            skills: ['React Native', 'iOS', 'Android', 'Flutter', 'Progressive Web Apps'],
            level: 70
        },
        'Other': {
            skills: ['Agile/Scrum', 'Testing (Jest, Cypress)', 'SEO', 'Performance Optimization', 'Security Best Practices'],
            level: 85
        }
    }

    return (
        <div className="page-container">
            <section className="section">
                <div className="container">
                    {/*
                    <h1 className="page-title">Certifications</h1>
                    <div className="certifications">
                        <div className="cert-grid">
                            <div className="cert-card">
                                <h4>AWS Certified Solutions Architect</h4>
                                <p>Amazon Web Services</p>
                                <span className="cert-year">2023</span>
                            </div>
                            <div className="cert-card">
                                <h4>React Advanced Certification</h4>
                                <p>Meta (Facebook)</p>
                                <span className="cert-year">2022</span>
                            </div>
                            <div className="cert-card">
                                <h4>Full Stack Web Development</h4>
                                <p>freeCodeCamp</p>
                                <span className="cert-year">2021</span>
                            </div>
                        </div>
                    </div>
                    */}

                    <h1 className="page-title">Skills & Expertise</h1>

                    <div className="skills-container">

                        {Object.entries(skillsData).map(([category, data]) => (
                            <div key={category} className="skill-category-card">
                                <div className="skill-header">
                                    <h3>{category}</h3>
                                    <span className="skill-level">{data.level}%</span>
                                </div>
                                <div className="skill-progress">
                                    <div
                                        className="skill-progress-bar"
                                        style={{ width: `${data.level}%` }}
                                    ></div>
                                </div>
                                <div className="skill-tags">
                                    {data.skills.map((skill, index) => (
                                        <span key={index} className="skill-tag">{skill}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Skills
