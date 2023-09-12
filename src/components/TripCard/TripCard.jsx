import React from 'react'
import './TripCard.css'
import peopleIconImg from '../../assets/people-icon.svg'

function TripCard(props) {
	return (
		<div 
			className='card' 
			style={{background: `url(${props.image}) center center / cover no-repeat`,}}>
				
			<div className="card__labels-wrapper">
				<p className="label">{props.transport}</p>
				<p className="label">{props.people} <img src={peopleIconImg}/></p>
			</div>
			<p className="card__info">{props.city}, {props.month} — {props.price}</p>

		</div>
	)
}
export default TripCard;