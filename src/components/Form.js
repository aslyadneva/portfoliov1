import React, { Component } from 'react'
import Button from '../ui/Button'


class Form extends Component {
  state = {
    status: '',
    name: '', 
    email: '', 
    message: ''
  }

  handleSubmit = e => {
    // e.preventDefault()
    const form = e.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }

  handleChange = ({target: {name, value}}) => {
    this.setState({ [name]: value })
  }

  render() {
    const {name, email, message} = this.state
    return (
      <form 
        autoComplete='off' 
        onSubmit={this.handleSubmit} 
        action="https://formspree.io/xrgykdbp"
        method="POST" 
        className="ContactForm"
      >
        <div className="ContactForm__section">

          <div className="ContactForm__group">
            
            <input
              value={name}
              name="name"
              id='name'
              type='text'
              onChange={this.handleChange}
              required
            />
            <label htmlFor="name">Name</label>
          </div>

          <div className="ContactForm__group">
            
            <input
              value={email}
              name="email"
              id='email'
              type='email'
              required
              onChange={this.handleChange}
            />
            <label htmlFor="email">Email</label>
          </div>
          
        </div>

        <div className="ContactForm__section">
          <div className="ContactForm__group">
            <textarea 
              value={message}    
              name="message"  
              id='message'
              onChange={this.handleChange}
              required
              rows="5"
            >
            </textarea>
            <label htmlFor="message">Your message</label>
          </div>
        </div>

        <div className="ContactForm__button">
          <Button title="Send Message" />
        </div>    
      </form>
    )
  }
}

export default Form
