import React, { Component } from 'react';
import logo from '../common/close-icon.svg';

export default class ContactForm extends Component {

    state = {
        contactName: '',
        contactSurname: '',
        contactPhone: ''
    }
    
    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.onSubmit({
            name: this.state.contactName,
            surname: this.state.contactSurname,
            phone: this.state.contactPhone
        })

        this.setState({
            contactName: '',
            contactSurname: '',
            contactPhone: ''
        })
    }

    onNameInputChange = (e) => {
        this.setState({
            contactName: e.target.value
        });
    };

    onSurnameInputChange = (e) => {
        this.setState({
            contactSurname: e.target.value
        });
    };

    onPhoneInputChange = (e) => {
        this.setState({
            contactPhone: e.target.value
        });
    };

    onCloseIconClick = () => {
        this.props.onClick(this.props.show);
    }
    
    render() {
        if(!this.props.show) {
            return null;

        }
        return (
            <div className="formContainer">
                <img onClick={this.onCloseIconClick} src={logo} className="closeIcon" alt="close" />
                <form onSubmit={this.onFormSubmit} >
                    <label>Contact Form</label>
                    <input 
                        className="u-full-width" 
                        type="text"
                        name="contactName" 
                        value={this.state.contactName}
                        placeholder="First Name"
                        autoComplete="off"
                        onChange={this.onNameInputChange}
                        required={true}
                        />
                 
                    <input
                        className="u-full-width" 
                        type="text"
                        name="contactSurname"
                        value={this.state.contactSurname} 
                        placeholder="Last Name"
                        autoComplete="off"
                        onChange={this.onSurnameInputChange}
                        required={true}
                        />
                        
                    <input
                        className="u-full-width" 
                        type="text"
                        name="contactPhone" 
                        value={this.state.contactPhone}
                        placeholder="Phone Number"
                        autoComplete="off"
                        onChange={this.onPhoneInputChange}
                        required={true}
                        />

                    <button className="button-primary">Save</button>  
                </form>       
            </div>
        )
    }
}
