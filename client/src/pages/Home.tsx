import { icon } from '@fortawesome/fontawesome-svg-core';
import { brands, regular, solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../styles/home.css'

const Home = () => {
    return (
        <div className="homeWrapper">
            <div className="bio">
            <img src="/profile.jpeg" className='profilePicture' alt="profile_picture" />
            <h1>Bio</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultrices eros nibh, et aliquet dui ullamcorper vitae. Quisque dolor lacus, vulputate eget rhoncus at, vehicula id nisi. Cras in bibendum lectus.</p>
            </div>
            <div className="education">
                <h1>Education</h1>
                    <div className="educationContainer">
                        <div className="institutionYear">
                            <p className="institution">NTNU</p>
                            <p>2021-2023</p>
                        </div>
                        <span className="educationDivider"></span>
                         <p>B.Sc Informatics</p>
                    </div>
            <div className="educationContainer">
                <div className="institutionYear">
                    <p className="institution">HINN</p>
                    <p>2018-2020</p>
                </div>
                <span className="educationDivider"></span>
                <p>Serviceledelse og markedsføring</p>
            </div>
            </div>
            <div className="techStackWrapper">
                <h1>Tech stack</h1>
                <div className="techStackRow">
                <div className="techItem">
                    <FontAwesomeIcon size='2x' icon={brands('react')} />
                    <p>React</p>
                </div>
                <div className="techItem">
                    <FontAwesomeIcon size='2x' icon={brands('node')} />
                    <p>Node.JS</p>
                </div>
                <div className="techItem">
                    <FontAwesomeIcon size='2x' icon={brands('linux')} />
                    <p>Linux</p>
                </div>
                <div className="techItem">
                    <FontAwesomeIcon size='2x' icon={brands('java')} />
                    <p>Java</p>
                </div>
                <div className="techItem">
                    <FontAwesomeIcon size='2x' icon={brands('js')} />
                    <p>JS</p>
                </div>
                <div className="techItem">
                    <FontAwesomeIcon size='2x' icon={brands('python')} />
                    <p>Python</p>
                </div>
                <div className="techItem">
                    <FontAwesomeIcon size='2x' icon={brands('git')} />
                    <p>Git</p>
                </div>
                <div className="techItem">
                    <FontAwesomeIcon size='2x' icon={solid('c')} />
                    <p>C</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Home;