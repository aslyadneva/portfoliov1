import React, { Component } from 'react'
import Button from '../ui/Button'

class Form extends Component {
  state = {
    name: '', 
    email: '', 
    message: ''
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log(this.state)
    this.setState({ name: '', email: '', message: '' })
  }

  handleChange = ({target: {name, value}}) => {
    this.setState({ [name]: value })
  }

  render() {
    const {name, email, message} = this.state
    return (
      <form autoComplete='off' onSubmit={this.handleSubmit} className="ContactForm">
        <div className="ContactForm__section">

          <div className="ContactForm__group">
            
            <input
              value={name}
              name="name"
              id='name'
              type='text'
              onChange={this.handleChange}
            />
            <label htmlFor="name">Name</label>
          </div>

          <div className="ContactForm__group">
            
            <input
              value={email}
              name="email"
              id='email'
              type='email'
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
