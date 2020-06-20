import React from 'react'
import StickerItem from './StickerItem';

function Stickers({ stickerItems, onChange, onBlur, onDelete }) {
    return (
        <div> 
            {stickerItems.map((item) => (
                <StickerItem 
                key={item.id} 
                item={item} 
                onChange={onChange}
                onBlur={onBlur}
                onDelete={onDelete}
                />
            ))}
        </div>
    );
};

export default Stickers;
