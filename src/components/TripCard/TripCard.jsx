import React from 'react'
import './TripCard.css'
import TripCardLabel from '../TripCardLabel/TripCardLabel';

function TripCard(props) {
	return (
		<div 
			className='card' 
			style={{background: `url(${props.image}) center center / cover no-repeat`,}}>
			
			<TripCardLabel 
				transport = {props.transport} 
				people = {props.people}/>
			<p 
				className="card__info">{props.city}, {props.month} — {props.price}
			</p>
 
		</div>
	)
}
export default TripCard;