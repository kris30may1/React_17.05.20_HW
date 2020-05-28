import React, { Component } from 'react'
import ContactTable from './ContactTable'
import ContactForm from './ContactForm'

export default class Contact extends Component {
    state = {
        contacts: [
            { id: 1, name: 'Kristina', surname: 'Korzh', phone: 8888888888 },
            { id: 1, name: 'Misha', surname: 'Korzh', phone: 1111111118 },
            { id: 1, name: 'Polya', surname: 'Korzh', phone: 1111121258 }            
        ]
    }

    render() {
        return (
            <>
            <h1 className="tableTitle">My Contact List</h1>
            <ContactTable 
                contacts = {this.state.contacts}
                />
            <ContactForm />
            <button className="button">Add New Contact</button>
            </>
        )
    }
}
