import React from 'react'

function StickerItem({ item, onChange, onBlur, onDelete }) {

    function onDescriptionChange(e) {
        onChange( item.id, { [e.target.name]: e.target.value } );
    }

    return (
        <div className="sticker-item">
            <div>
                <div>
                    <span 
                        className="close-icon"
                        onClick={onDelete.bind(null, item.id)}
                        >
                    X
                    </span>
                    <span 
                        className="move-icon"
                        >
                    O
                    </span>
                </div>
                <textarea 
                type="text"
                placeholder="Enter some text..."
                name="description"
                value={item.description}
                onChange={onDescriptionChange}
                onBlur={onBlur.bind(null, item)}
                />
            </div>
        </div>
    )
}

export default StickerItem;



