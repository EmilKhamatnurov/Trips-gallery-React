import React from 'react'
import './App.css'
import Trips from './components/Trips/Trips/Trips'
function App() {
  return (
	<div className='container'>
		<h1 className='page-title'>Галерея путешествий</h1>
		<Trips/>
	</div>
  )
}

export default App
