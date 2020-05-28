import React, { Component } from 'react'
import ContactListRow from './ContactListRow';

export default class ContactTable extends Component {
    render() {
        const { contacts } = this.props;
        return (
           <table className="u-full-width">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                {contacts.map((contact) => (
                    <ContactListRow 
                        key = {contact.id}
                        contact = {contact}
                />
                ))} 
            </tbody>  
           </table>
        )
    }
}
