import '../compstyle/Homestyle.css'
import Nav from './Navigation';

function Home(){
    return(
        <div>
            <Nav/>
            <section className="s1">
                <div className="main-container">
                    <div className="second-container">
                        <div className="left_column">
                            <img className="pic" src={require("../img/profile.jpg")} alt='could not load'/>
                            <div className="header" >Bryant Saavedra</div>
                        </div> 

                        <div className="right-column">
                            <div id="msg-shadow">
                                <div id="message">
                                    <div className='header'>Hello! Welcome to my website</div>
                                    <p>I'm currently a CS student at Lehman College interested in becoming a software engineer.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        <section className="s2">
            <div className="main-container">
                <div className="about-wrap">
                    <div className="about-me">
                        <header>About Me</header>
                        <p>I enjoy exploring different ways to create projects on the internet. I recently took a course in web development where I created websites using React.</p>
                        <p>One of my hobbies is jogging. I've been able to meet new people by jogging which is fun. It also helps clear my mind and get a breath of fresh air.</p>
                    </div>
                    <div className="social-links">
                        <p className="social-text">Social Links</p>
                        <a target="_blank" href="https://www.linkedin.com/in/bryant-saavedra/" rel="noreferrer">
                            <img id="linked" src={require("../img/linkedin.png")} alt="Linkedin"/>
                        </a>
                        <a target="_blank" href="https://github.com/BryantS42" rel="noreferrer">
                            <img id="github" src={require("../img/github.png")} alt="Github"/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Home;