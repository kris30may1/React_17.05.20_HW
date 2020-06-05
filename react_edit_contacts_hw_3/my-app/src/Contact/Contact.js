import React, { Component } from 'react'
import ContactList from './ContactList'
import ContactListForm from './ContactListForm'

export default class Contact extends Component {
    render() {
        return (
            <>
            <div className="split left">
                <div className="list-container">
                    <ContactList />
                </div>
            <div className="split right">
                <div className="form-container">
                    <ContactListForm />
                </div>
            </div>
            </div> 
            </>
        )
    }
}
