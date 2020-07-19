import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import FolderIcon from '@material-ui/icons/FolderOpen';
import { connect } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';

function AlbumsListItem({ item, items }) {

const history = useHistory();
const { url } = useRouteMatch();

function onListItemClick() {
  history.push(url + '/' + item.id);
}

    return (
      <div>
        {items.map((user) => (
          <ListItem onClick={onListItemClick}>
            <FolderIcon />
            {item.title} + {user.name}
          </ListItem>
        ))}
      </div>
    );
}

function mapStateToProps(state) {
  return {
    items: state.users.users,
  };
}

export default connect(mapStateToProps)(AlbumsListItem);
