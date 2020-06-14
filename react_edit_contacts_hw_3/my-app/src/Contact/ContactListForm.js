import React, { Component } from 'react'

export default class ContactListForm extends Component {

    state = {
        ...this.props.contact
    }

    onFormSubmit = (e) => {
        
        e.preventDefault();

        this.props.onSubmit(this.state);

        this.setState({ 
            name: '',
            phone: ''
        });
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onDeleteClick = () => {
        this.props.onDelete(this.props.contact);
    }

    render() {
        return (
            <div className="formContainer">
                <form 
                onSubmit={this.onFormSubmit}
                >
                    <label>Contact Form</label>
                    <input 
                        className="u-full-width" 
                        type="text"
                        name="name" 
                        value={this.state.name}
                        placeholder="Full Name *"
                        autoComplete="off"
                        onChange={this.onInputChange}
                        required
                        />
                    <input
                        className="u-full-width" 
                        type="text"
                        name="phone"
                        value={this.state.phone} 
                        placeholder="Phone Number *"
                        autoComplete="off"
                        onChange={this.onInputChange}
                        required
                        />               
                    <button type="submit" className="button-primary">Save</button>
                    {this.state.id ? (
                    <button
                        type="button" 
                        className="button-primary"
                        onClick={this.onDeleteClick}
                    >
                        Delete
                    </button>
                    ) : (
                        ''
                    )}    
                </form>       
            </div>
        )
    }
}
