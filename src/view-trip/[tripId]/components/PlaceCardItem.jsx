/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GetPlacesDetails, PHOTO_REF_URL } from "@/service/GlobalAPI";

function PlaceCardItem({ place }) {
  const [photoUrl, setPhotoUrl] = useState("");
  useEffect(() => {
    place && GetPlacePhoto();
  }, []);

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: place?.placeName,
    };
    await GetPlacesDetails(data).then((res) => {
      // console.log(res.data.places[0].photos[3].name);
      const PhotoUrl = PHOTO_REF_URL.replace(
        "{NAME}",
        res.data.places[0].photos[3].name
      );
      setPhotoUrl(PhotoUrl);
      // console.log(PhotoUrl);
    });
  };
  return (
    <Link
      to={`https://www.google.com/maps/search/?api=1&query=centurylink+field${place?.placeName}`}
      target="_blank"
    >
      <div
        className="border rounded-xl p-3 mt-2 flex gap-5
    hover:scale-105 transition-all hover:shadow-md cursor-pointer"
      >
        <img
          src={photoUrl ? photoUrl : "/Placeholder.jpg"}
          className="w-[130px] h-[130px] rounded-xl object-cover"
        />

        <div>
          <h2 className="font-bold text-lg">{place.placeName}</h2>
          <p className="text-sm text-gray-800">{place.placeDetails}</p>
          <h2 className="mt-2">🕑{place.time}</h2>
        </div>
      </div>
    </Link>
  );
}

export default PlaceCardItem;
