import React, { Component } from 'react'
import ContactTable from './ContactTable'
import ContactForm from './ContactForm'
import { Button } from '@material-ui/core'

export default class Contact extends Component {
    render() {
        return (
            <>
            <h1 className="tableTitle">My Contact List</h1>
            <ContactTable />
            <ContactForm />
            <Button className="contactButton" variant="outlined" color="primary">Add New Contact</Button>
            </>
        )
    }
}
