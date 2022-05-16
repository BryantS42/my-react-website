import '../compstyle/Resumestyle.css'
import Nav from './Navigation';

function Resume(){
    return(
        <div className="main-container">
            <Nav/>
            <div className="resume-container">
                <div className="resume_column">
                    <div className="header">My Resume</div>
                    <a className="res-link" target="_blank" href="myResume.pdf">Download Resume</a>
                </div> 
            </div>
        </div>
    )
}

export default Resume;