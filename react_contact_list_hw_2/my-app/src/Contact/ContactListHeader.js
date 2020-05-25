import React, { Component } from 'react'
import { TableHead, TableRow, TableCell } from '@material-ui/core'

export default class ContactListHeader extends Component {
    render() {
        return (
            <TableHead>
                <TableRow>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Phone Number</TableCell>
                </TableRow>
            </TableHead>
        )
    }
}
