import React from 'react'
import peopleIconImg from '../../assets/people-icon.svg'

function TripCardLabel({transport, people}) {
	return(
		
		<div className="card__labels-wrapper">
			<p className="label">{transport}</p>
			{
				(people > 0) ? 
					<p className="label a">{people} <img src={peopleIconImg}/></p> : 
					"" 
			}

		</div>
	)
	
}
export default TripCardLabel