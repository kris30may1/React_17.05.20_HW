import React, { Component } from 'react'
import Contact from './Contact'

export default class ContactListRow extends Component {
    
    render() {
        const { contact } = this.props;
        return (
            <tr>
                <td>{contact.name}</td>
                <td>{contact.surname}</td>
                <td>{contact.phone}</td>
            </tr>
        )
    }
}
