import React from 'react'
import { Link } from 'react-router-dom'

function Hotels({ trip }) {
  return (
    <div>
      <h2 className="font-bold text-xl mt-5">Hotel Recommendation</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {trip?.TripData?.hotel_options?.map((hotel, index) => (
          <Link
            key={index} // Add the key prop here
            to={`https://www.google.com/maps/search/?api=1&query=centurylink+field${hotel?.name},${hotel?.address}`}
            target="_blank"
          >
            <div className="hover:scale-105 transition-all cursor-pointer">
              <img src="/ph2.jpg" className="rounded-xl" alt={hotel?.name} />
              <div className="my-2 flex flex-col gap-2">
                <h2 className="font-medium">{hotel?.name}</h2>
                <h2 className="text-xs text-gray-500">📍{hotel?.address}</h2>
                <h2 className="text-sm">💸 {hotel?.price}</h2>
                <h2 className="text-sm">⭐{hotel?.rating} star</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Hotels;
