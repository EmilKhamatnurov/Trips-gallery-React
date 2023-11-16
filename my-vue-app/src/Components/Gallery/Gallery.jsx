import React from 'react'
import './Gallery.css'
import TripImage_1 from '../../../assets/1_trip_image.png'
import TripImage_2 from '../../../assets/2_trip_image.png'
import TripImage_3 from '../../../assets/3_trip_image.png'
import TripImage_4 from '../../../assets/4_trip_image.png'
import peopleIcon from '../../../assets/people-icon.svg'

const GalleryItemsData = [
    {   
        id: 0,
        transport: 'на автобусе',
        peopleQuantity: 10,
        city: 'Тбилиси',
        month: 'апрель', 
        price: '83.000',
        TripImage: TripImage_1
    }, 
    {
        id: 1,
        transport: 'на автобусе',
        peopleQuantity: 0,
        city: 'Стамбул',
        month: 'март', 
        price: '110.000',
        TripImage: TripImage_2
    }, 
    {
        id: 2,
        transport: 'на самолете',
        peopleQuantity: 15,
        city: 'Дубай',
        month: 'июнь', 
        price: '220.000',
        TripImage: TripImage_3
    }, 
    {
        id: 3,
        transport: 'самолет + паром',
        peopleQuantity: 11,
        city: 'Пхукет',
        month: 'сентябрь', 
        price: '135.000',
        TripImage: TripImage_4
    }, 
]

function Gallery() {
    const GalleryItems = GalleryItemsData.map(ItemData => {   
        // Создаем стиль заднего фона для блока item
        const iten_style ={
            background: `url(${ItemData.TripImage}) center center / cover no-repeat`,
            width: "100%", 
            height: "538px"
        }

        return(
        <li 
            key={ItemData.id} 
            className="item"
            style={iten_style}>

            <div className="item__label">
                <p className='item__transport'>{ItemData.transport}</p>
                {/* Условие рендера количества человек */}
                {ItemData.peopleQuantity > 0 && (
                    <p className='item__peopleQuantity'>
                        {ItemData.peopleQuantity}
                        <img src={peopleIcon} alt="иконка человека"/> 
                    </p>)}
            </div>
            <div className="item__info">
                {ItemData.city}, {ItemData.month} — {ItemData.price}
            </div>

        </li>
        )}
    );

    return (
        <ul className='items-list'>{GalleryItems}</ul>
    )
}

export default Gallery;