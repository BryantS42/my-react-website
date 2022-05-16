import '../compstyle/navstyle.css'
import {Outlet, Link} from "react-router-dom";
function Nav(){
    return (
        <div>
        <div className="nav-wrapper">
            <div className="name-wrapper">
                 <img className="name-img" src={require("../img/name.PNG")} alt='could not load'/>
            </div>
            <ul id="navigation">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/resume">Resume</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
        <Outlet/>
        </div>
    )
}
export default Nav;