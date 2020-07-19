import React from 'react'
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import PhotosItem from './PhotosItem';

function PhotosList({ items }) {
    return (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {items.map((item) => (
            <PhotosItem item={item} key={item.id} />
          ))}
        </Grid>
      </Grid>
    );
}

function mapStateToProps(state) { 
    return {
        items: state.photos.photos,
    }
}

export default connect(mapStateToProps)(PhotosList);
