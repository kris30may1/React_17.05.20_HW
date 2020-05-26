import React, { Component } from 'react'

export default class ContactListHeader extends Component {
    render() {
        return (
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone Number</th>
                </tr>
            </thead>
        )
    }
}
