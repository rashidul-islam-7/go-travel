import React from 'react'
import { getDestinations, getIdData } from '@/lib/Data';
import DestinationCard from '@/components/ui/DestinationCard';


async function DestinationPage() {

  const destinations = await getDestinations();
  console.log(destinations)

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
   
      {/* Heading */}
      <div className="mb-10">
        <h2 className="text-5xl font-light text-black">
          Explore All Destinations
        </h2>

        <p className="text-gray-500 mt-3 text-sm">
          Find your perfect travel experience from our curated collection
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {destinations.map((item) => <DestinationCard key={item._id} getIdData={getIdData} destinationData={item} />)}
      </div>
    </section>
  )
}

export default DestinationPage

