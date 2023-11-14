import React from 'react'
import './GalleryItem.css'

function GalleryItem({itemData}) {
    return(
        <div className="item">
            <div className="item__label">
                {itemData.transport}{itemData.peopleQuantity}
            </div>
            <div className="item__info">
                {itemData.city}, {itemData.month} — {itemData.price}
            </div>
        </div>
    )
}
export default GalleryItem