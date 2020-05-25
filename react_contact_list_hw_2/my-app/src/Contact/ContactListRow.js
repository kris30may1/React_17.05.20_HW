import React, { Component } from 'react'
import { TableRow, TableCell } from '@material-ui/core'

export default class ContactListRow extends Component {
    render() {
        return (
            <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Surname</TableCell>
                <TableCell>Phone</TableCell>
            </TableRow>
        )
    }
}
