import React, { Component } from 'react'
import ContactListRow from './ContactListRow'

export default class ContactList extends Component {
    render() {
        return (
            <tbody>
                <ContactListRow />
            </tbody>
        )
    }
}
