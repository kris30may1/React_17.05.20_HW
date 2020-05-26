import React, { Component } from 'react'
import ContactTable from './ContactTable'
import ContactForm from './ContactForm'

export default class Contact extends Component {
    render() {
        return (
            <>
            <h1 className="tableTitle">My Contact List</h1>
            <ContactTable />
            <ContactForm />
            <button className="button">Add New Contact</button>
            </>
        )
    }
}
