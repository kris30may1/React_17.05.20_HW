import React, { Component } from 'react'
import ContactList from './ContactList'
import ContactListForm from './ContactListForm'

const CONTACT_URL = 'https://jsonplaceholder.typicode.com/users'

export default class Contact extends Component {

    state = {
        contacts: []
    }

    componentDidMount() {
        return fetch(CONTACT_URL) 
        .then(resp => resp.json())
        .then(contacts => this.setState({ contacts }))
    }

    addNewContact = (newContact) => {
        return fetch(CONTACT_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newContact)
        })
        .then(resp => resp.json())
        .then(
            this.setState({
            contacts: [...this.state.contacts, newContact]
        })
        )
    }

    setDataToForm = (contact) => {
        console.log(contact)
    }
    
    render() {
        return (
            <>
            <div className="split left">
                <div className="list-container centered">
                    <ContactList 
                    contacts = {this.state.contacts}
                    onSelect={this.setDataToForm}
                    />
                </div>
            <div className="split right">
                <div className="form-container centered">
                    <ContactListForm 
                    onSubmit={this.addNewContact} 
                    />
                </div>
            </div>
            </div> 
            </>
        )
    }
}
