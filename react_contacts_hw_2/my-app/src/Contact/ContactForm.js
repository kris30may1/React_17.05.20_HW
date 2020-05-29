import React, { Component } from 'react';
import logo from '../common/close-icon.svg';

export default class ContactForm extends Component {

    state = {
        contactName: '',
        contactSurname: '',
        contactPhone: '',
        isDisabled: true
    }

    handleChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });

        if(e.target.name === 'contactName') {
            if(e.target.value === '' || e.target.value === null) {
                this.setState({
                    nameError: true
                })
            } else {
                this.setState({
                    nameError: false,
                    contactName: e.target.value
                })
            }
        }

        if(e.target.name === 'contactSurname') {
            if(e.target.value === '' || e.target.value === null) {
                this.setState({
                    surnameError: true
                })
            } else {
                this.setState({
                    surnameError: false,
                    contactSurname: e.target.value
                })
            }
        }

        if(e.target.name === 'contactPhone') {
            if(e.target.value === '' || e.target.value === null) {
                this.setState({
                    phoneError: true
                })
            } else {
                this.setState({
                    phoneError: false,
                    contactPhone: e.target.value
                })
            }
        }
        
        if(this.state.nameError === false && this.state.surnameError === false 
            && this.state.phoneError === false) {
            this.setState({
                isDisabled: false
            })
        }  
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
            contactPhone: '',
            isDisabled: true
        })
    }

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
                        placeholder="First Name *"
                        autoComplete="off"
                        onChange={this.handleChange}
                        />
                        {this.state.nameError ? <span className="errorMsg">First Name is required</span> : ''}
                 
                    <input
                        className="u-full-width" 
                        type="text"
                        name="contactSurname"
                        value={this.state.contactSurname} 
                        placeholder="Last Name *"
                        autoComplete="off"
                        onChange={this.handleChange}
                        />
                        {this.state.surnameError ? <span className="errorMsg">Last Name is required</span> : ''}

                    <input
                        className="u-full-width" 
                        type="text"
                        name="contactPhone" 
                        value={this.state.contactPhone}
                        placeholder="Phone Number *"
                        autoComplete="off"
                        onChange={this.handleChange}
                        />
                        {this.state.phoneError ? <span className="errorMsg">Phone Number is required</span> : ''}                     

                    <button className="button-primary btn-block" disabled={this.state.isDisabled}>Save</button>  
                </form>       
            </div>
        )
    }
}
