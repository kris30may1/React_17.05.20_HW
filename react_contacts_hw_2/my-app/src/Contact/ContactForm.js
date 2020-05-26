import React, { Component } from 'react'

export default class ContactForm extends Component {
    render() {
        return (
            <div hidden={true}>
                <form>
                    <label>Contact Form</label>
                    <input 
                        type="text"
                        name="fistName" 
                        placeholder="First Name"
                        autoComplete="off"/>
                    <input
                        type="text"
                        name="lastName" 
                        placeholder="Last Name"
                        autoComplete="off"/>
                    <input
                        type="text"
                        name="phoneNumber" 
                        placeholder="Phone Number"
                        autoComplete="off"/>
                    <button>Cancel</button> 
                    <button>Save</button> 
                </form>       
            </div>
        )
    }
}
