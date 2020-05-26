import React, { Component } from 'react'
import ContactListHeader from './ContactListHeader'
import ContactList from './ContactList'

export default class ContactTable extends Component {
    render() {
        return (
           <table>
                <ContactListHeader />
                <ContactList />  
           </table>
        )
    }
}
