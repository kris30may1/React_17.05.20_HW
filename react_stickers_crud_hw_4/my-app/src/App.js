import React, { useState, useEffect } from 'react'
import './App.css'
import Stickers from './components/Stickers'
import Header from './components/Header'
import api from './api';

const EMPTY_STICKER = {
  description: '',
  x: '',
  y: '',
};

function App() {

  const [stickerItems, setStickerItems] = useState([]);

  useEffect(() => {
    return api.get().then(({ data }) => setStickerItems(data));
}, []);

function getEmptySticker() {
  return { ...EMPTY_STICKER };
}

function updateSticker(item) {
  return api.put(item.id, item)
  .then(( {data} ) => setStickerItems(stickerItems.map(
    item => (item.id === data.id ? data : item
      ))));
}

function addNewSticker() {
  const newSticker = getEmptySticker();
  return api.post('', newSticker).then(( {data} ) => setStickerItems ([...stickerItems, data]));
}

function changeStickerItem(id, data) {
  let sticker = stickerItems.find(item => item.id === id);
  sticker = {
    ...sticker,
    ...data
  }
  const newStickerItems = stickerItems.map(item =>
    item.id === sticker.id ? sticker : item
);
  setStickerItems(newStickerItems)
}

function deleteSticker(id) {
    return api.delete(id)
    .then(( { data } ) => setStickerItems(
      stickerItems.filter(item => item.id !== data.id
        )));
}

  return (
    <>
       <Header 
       onAddBtnClick={addNewSticker}
    />
    <Stickers
       stickerItems={stickerItems}
       onChange={changeStickerItem}
       onBlur={updateSticker}
       onDelete={deleteSticker}
    />
    </>
  )
}

export default App

