import React, { Component } from 'react'
import ContactTable from './ContactTable'
import ContactForm from './ContactForm'

export default class Contact extends Component {
    state = {
        show: false,
        contacts: [
            { id: 1, name: 'Kristina', surname: 'Korzh', phone: 8888888888 },
            { id: 2, name: 'Misha', surname: 'Korzh', phone: 1111111118 },
            { id: 3, name: 'Polya', surname: 'Korzh', phone: 1111121258 }            
        ]
    }

    addNewContact = (newContact) => {
        newContact.id = Date.now();

        this.setState({
            contacts: [...this.state.contacts, newContact]
        });
    }

    showModal = () => {
        this.setState({
            show: true
        });
    }

    render() {
        return (
            <>
            <h1 className="tableTitle">My Contact List</h1>
            <ContactTable 
                contacts = {this.state.contacts}
                />
            <ContactForm onSubmit={this.addNewContact} show={this.state.show}/>
            <button onClick ={this.showModal} className="button-primary">Add New Contact</button>
            </>
        )
    }
}
