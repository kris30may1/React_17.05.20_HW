import React, { Component } from 'react'
import ContactTable from './ContactTable'
import ContactForm from './ContactForm'

export default class Contact extends Component {
    render() {
        return (
            <>
            <ContactTable />
            <ContactForm />
            </>
        )
    }
}
