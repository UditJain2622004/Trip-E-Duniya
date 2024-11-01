/* eslint-disable react/prop-types */
import HotelCardItem from "./HotelCardItem";

function Hotels({ trip }) {
  // console.log("========================================");
  // console.log(trip);
  return (
    <div>
      <h2 className="font-bold text-xl mt-5">Hotel Recommendation</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {trip?.TripData?.hotel_options?.map((hotel, index) => (
          <HotelCardItem key={index} hotel={hotel} />
        ))}
      </div>
    </div>
  );
}

export default Hotels;
