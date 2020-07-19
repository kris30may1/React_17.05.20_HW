import React from 'react'
import { List } from '@material-ui/core';
import { connect } from 'react-redux';
import AlbumsListItem from './AlbumsListItem';

function AlbumsList({ items }) {

    return (
        <List>
            {items.map((item) => (
                <AlbumsListItem item={item} key={item.id} />
            ))}
        </List>
    )
}

function mapStateToProps(state) { 
return {
    items: state.albums.albums,
};
}

export default connect(mapStateToProps)(AlbumsList);
