import React, { Component } from 'react'

export default class ContactListForm extends Component {
    
    state = {
        contactFullName:'',
        contactPhoneNumber: ''
    }

    onFormSubmit = (e) => {
        
        e.preventDefault();

        this.props.onSubmit({
            name: this.state.contactFullName,
            phone: this.state.contactPhoneNumber
        });

        this.setState({ 
            contactFullName: '',
            contactPhoneNumber: ''
        });
    }

    onInputChange = (e) => {

        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div className="formContainer">
                <form onSubmit={this.onFormSubmit}>
                    <label>Contact Form</label>
                    <input 
                        className="u-full-width" 
                        type="text"
                        name="contactFullName" 
                        value={this.state.contactFullName}
                        placeholder="Full Name *"
                        autoComplete="off"
                        onChange={this.onInputChange}
                        />
                    <input
                        className="u-full-width" 
                        type="text"
                        name="contactPhoneNumber"
                        value={this.state.contactPhoneNumber} 
                        placeholder="Phone Number *"
                        autoComplete="off"
                        onChange={this.onInputChange}
                        />               
                    <button className="button-primary">Save</button>  
                </form>       
            </div>
        )
    }
}
