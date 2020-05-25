import React, { Component } from 'react'
import ContactListHeader from './ContactListHeader'
import ContactList from './ContactList'
import { Table } from '@material-ui/core'

export default class ContactTable extends Component {
    render() {
        return (
           <Table>
                <ContactListHeader />
                <ContactList />  
           </Table>
        )
    }
}
