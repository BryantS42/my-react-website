import '../compstyle/contactstyle.css';
import Nav from './Navigation';

function Contact(){
    return(
        <div className="main-container">
            <Nav/>
            <div className="contact-container">
                <div className="contact_column">
                    <div className='header'>Contact Me</div>
                    <form id="contact-form">
                        <label>Name</label>
                        <input className="input-field" type="text" name="name"/>

                        <label>Subject</label>
                        <input className="input-field" type="text" name="email"/>

                        <label>Email</label>
                        <input className="input-field" type="text" name="email"/>

                        <label>Message</label>
                        <textarea className="input-field" name="message"></textarea>

                        <input id="submit-btn" type="submit" value="Send"/>
                    </form>
                </div> 
            </div>
        </div>
    )
}

export default Contact;