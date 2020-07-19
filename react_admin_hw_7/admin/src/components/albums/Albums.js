import React from 'react';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { fetchAlbums } from '../../store/actions/albums';
import AlbumsList from './AlbumsList';
import Photos from '../photos/Photos';
import { Paper } from '@material-ui/core';
import { Switch, useRouteMatch, Route } from 'react-router-dom';

function Albums({ fetchAlbums }) {
    
    useEffect(() => {
      fetchAlbums();
    }, [fetchAlbums]);

    const { path } = useRouteMatch();
    
    return (
      <Paper>
        <Switch>
          <Route path={path + '/'} exact>
            <AlbumsList />
          </Route>
          <Route path={path + '/:id'}>
            <Photos />
          </Route>
        </Switch>
      </Paper>
    );
}

const mapDispatchToprops = {
  fetchAlbums,
};

export default connect(null, mapDispatchToprops)(Albums);
