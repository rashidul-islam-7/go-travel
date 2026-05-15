import { getDestinations } from '@/lib/Data';
import React from 'react'

async function DestinationPage() {
  const destinations = await getDestinations();
  console.log(destinations);

  return (
    <div>
      <h1 className='text-2xl font-bold'>Destinations</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5'>
        {destinations.map((destination) => (
          <div key={destination._id} className='border rounded-lg p-4'>
            <h2 className='text-xl font-semibold'>{destination.destinationName}</h2>
            <p className='text-gray-600'>{destination.country}</p>
            <p className='text-gray-800 mt-2'>${destination.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DestinationPage