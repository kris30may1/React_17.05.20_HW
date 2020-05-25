import React, { Component } from 'react'
import { Button, FormControl, FormLabel, Input } from '@material-ui/core'

export default class ContactForm extends Component {
    render() {
        return (
            <div hidden="true">
                <FormControl>
                    <FormLabel>Contact Form</FormLabel>
                    <Input
                        name="fistName" 
                        placeholder="First Name"
                        autoComplete="off">
                    </Input>
                    <Input
                        name="lastName" 
                        placeholder="Last Name"
                        autoComplete="off">
                    </Input>
                    <Input
                        name="phoneNumber" 
                        placeholder="Phone Number"
                        autoComplete="off">
                    </Input>
                    <Button variant="contained" color="inherit">Cancel</Button> 
                    <Button variant="contained" color="primary">Save</Button> 
                </FormControl>       
            </div>
        )
    }
}
