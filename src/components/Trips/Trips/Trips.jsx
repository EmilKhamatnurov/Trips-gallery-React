import React from 'react'
import TripCard from '../../TripCard/TripCard'
import tripImage_1 from '../../../assets//tripImage_1.png'
import tripImage_2 from '../../../assets//tripImage_2.png'
import tripImage_3 from '../../../assets//tripImage_3.png'
import tripImage_4 from '../../../assets//tripImage_4.png'

const trips = [
	{
		id: 1,
		city: 'Тбилиси',
		month: 'апрель',
		price: '83.000',
		transport: 'на автобусе',
		people: 10,
		image: tripImage_1
	},
	{
		id: 2,
		city: 'Стамбул',
		month: 'март',
		price: '110.000',
		transport: 'на самолете',
		people: 0,
		image: tripImage_2
	},
	{
		id: 3,
		city: 'Дубай',
		month: 'июнь',
		price: '220.000',
		transport: 'на самолете',
		people: 15,
		image: tripImage_3
	},
	{
		id: 4,
		city: 'Дубай',
		month: 'июнь',
		price: '220.000',
		transport: 'на самолете',
		people: 15,
		image: tripImage_4
	},
]

function Trips() {
	{return (
		trips.map(trip => (
		<TripCard
			key = {trip.id}
			city = {trip.city}
			month= {trip.month}
			price = {trip.price}
			transport = {trip.transport}
			people = {trip.people}
			image = {trip.image}
		/>))
		
	)}
}
export default Trips