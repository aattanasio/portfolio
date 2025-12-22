import React from 'react'

const Skills = () => {
    const skillsData = {
        'Programming Languages': {
            skills: ['JavaScript', 'Python', 'Java', 'C', 'C++', 'PHP', 'Assembly', 'Verilog'],
        },
        'Web and Mobile': {
            skills: ['React', 'HTML5', 'CSS3', 'Node.js', 'Express', 'Flutter', 'Node-RED', 'JSON', 'XML'],
        },
        'Databases and Frameworks': {
            skills: ['SQL', 'MySQL', 'Firestore', 'Apache Spark', 'Akka', 'ContikiNG', 'MQTT', 'Agile/Scrum'],
        },
        'Development Tools': {
            skills: ['Git', 'Visual Studio', 'GCC', 'NetBeans', 'Postman', 'Figma', 'MATLAB', 'MS Office', 'LaTeX'],
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
                    <p className="page-subtitle">Technical expertise in programming languages, frameworks, tools, and technologies.</p>

                    <div className="skills-container">
                        {Object.entries(skillsData).map(([category, data]) => (
                            <div key={category} className="skill-category-card">
                                <div className="skill-header">
                                    <h3>{category}</h3>
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
