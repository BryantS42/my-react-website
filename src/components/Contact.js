import { Component } from 'react';
import '../compstyle/contactstyle.css';
import Nav from './Navigation';

class Contact extends Component{
    constructor(props){
        super(props)
        this.state = {submitValue: false}
    }

    OnformSubmit = (e) =>{
        e.preventDefault();
        this.setState({submitValue: true});
    } 

    newPopup = () =>{
        return <div className='header'>Form submitted!</div>
    }

    render(){
        const submitValue = this.state.submitValue;
        let popup;
        if(submitValue){
            popup = <this.newPopup/>
        }
        return(
            <div className="main-container">
             <Nav/>
             <div className="contact-container">
                 <div className="contact_column">
                     <div className='header'>Contact Me</div>
                     <form onSubmit={this.OnformSubmit} id="contact-form">
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
                     {popup}
                 </div> 
            </div>
            </div>
        )
    }
}

export default Contact;