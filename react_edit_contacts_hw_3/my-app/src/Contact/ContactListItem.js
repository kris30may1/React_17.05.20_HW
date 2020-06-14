import React, { Component } from 'react'

export default class ContactListItem extends Component {

    onContactClick = () => {
       this.props.onSelect(this.props.contact);
    }

    render() {
        
        const { contact } = this.props;
        
        return (
        <li 
            className="contactListItem u-full-width"
            onClick={this.onContactClick}
            >
            {contact.name}&nbsp;&nbsp;&nbsp;&nbsp;{contact.phone}
        </li>
        );
    }
}
