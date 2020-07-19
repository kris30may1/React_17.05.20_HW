import React from 'react';
import PhotosList from './PhotosList';
import { useEffect } from 'react';
import { getPhotos } from '../../store/actions/photos';
import { connect } from 'react-redux';

function Photos({ getPhotos }) {
console.log('PHOTOS')
    useEffect(() => {
      getPhotos();
    }, [getPhotos]);

    return (
        <>
            <PhotosList />
        </>
    )
}

const mapDispatchToprops = {
  getPhotos,
};

export default connect(null, mapDispatchToprops)(Photos);
