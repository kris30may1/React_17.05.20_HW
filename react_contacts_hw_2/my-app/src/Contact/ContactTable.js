import React, { Component } from 'react'
import ContactListHeader from './ContactListHeader'
import ContactListRow from './ContactListRow';

export default class ContactTable extends Component {
    render() {
        const { contacts } = this.props;
        return (
           <table>
                <ContactListHeader />
                <tbody>
                {contacts.map((item) => (
                    <ContactListRow 
                        key = {item.id}
                        name = {item.name}
                        surname = {item.surname}
                        phone = {item.phone}
                />
                ))} 
            </tbody>  
           </table>
        )
    }
}
