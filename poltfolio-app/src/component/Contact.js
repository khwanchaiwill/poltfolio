import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const initialFrom = {
    name: '',
    email: '',
    message: '',
}
function Contact () {
    const [formValue, setFormValue] = useState(initialFrom)
 

    const handleChange = e => {
        setFormValue({
          ...formValue,
          [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        axios
        .post('https://khwanchai-portfolio.herokuapp.com/send', formValue)
        .then(res => {
            setFormValue(res.data)
            alert("Your message has been sent")
            window.location.reload(true)

        
        })
    }

    return(
        <div className="mail-section">
            <h4>If you interested to talk more or to work with me</h4>
            <h5>Please contact</h5>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input
                   type="text"
                   name="name"
                   value={formValue.name}
                   onChange={handleChange}
                   placeholder="name"
                   
                />
                <label>E-mail</label>
                <input 
                    type="email"
                    name="email"
                    value={formValue.email}
                    onChange={handleChange}
                    placeholder="yourmail@email.com"
                />
                <div className="message">
                    <label className="message-label">Message</label>
                    <textarea
                        className="message-input"
                        type="text"
                        name="message"
                        value={formValue.message}
                        onChange={handleChange}
                        placeholder="message"
                    /> 
                </div>  
                <button className="btn" type="submit">Send Message</button>  
            </form>
            
        </div>
    )
}
export default Contact;