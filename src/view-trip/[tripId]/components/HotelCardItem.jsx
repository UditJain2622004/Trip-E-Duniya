import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GetPlacesDetails, PHOTO_REF_URL } from "@/service/GlobalAPI";

function HotelCardItem({ hotel }) {
  const [photoUrl, setPhotoUrl] = useState("");
  useEffect(() => {
    hotel && GetPlacePhoto();
  }, []);

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: hotel?.name,
    };
    const result = await GetPlacesDetails(data).then((res) => {
      console.log(res.data.places[0].photos[3].name);
      const PhotoUrl = PHOTO_REF_URL.replace(
        "{NAME}",
        res.data.places[0].photos[3].name
      );
      setPhotoUrl(PhotoUrl);
      console.log(PhotoUrl);
    });
  };

  return (
    <Link
      //   key={index} // Add the key prop here
      to={`https://www.google.com/maps/search/?api=1&query=centurylink+field${hotel?.name},${hotel?.address}`}
      target="_blank"
    >
      <div className="hover:scale-105 transition-all cursor-pointer">
        <img
          src={photoUrl ? photoUrl : "/Placeholder.jpg"}
          className="rounded-xl h-[180px] w-full object-cover"
          alt={hotel?.name}
        />
        <div className="my-2 flex flex-col gap-2">
          <h2 className="font-medium">{hotel?.name}</h2>
          <h2 className="text-xs text-gray-500">📍{hotel?.address}</h2>
          <h2 className="text-sm">💸 {hotel?.price}</h2>
          <h2 className="text-sm">⭐{hotel?.rating} star</h2>
        </div>
      </div>
    </Link>
  );
}

export default HotelCardItem;
