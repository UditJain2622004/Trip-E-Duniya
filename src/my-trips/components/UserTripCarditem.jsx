/* eslint-disable react/prop-types */
// import React from "react";
// import "./index.css";
import { GetPlacesDetails } from "./../../service/GlobalAPI";
import { PHOTO_REF_URL } from "./../../service/GlobalAPI";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function UserTripsCardItem({ trip }) {
  const [photoUrl, setPhotoUrl] = useState("");
  useEffect(() => {
    trip && GetPlacePhoto();
  }, []);

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: trip?.userSelection?.location?.label,
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
    <Link to={"/view-trip/" + trip?.id}>
      <div className="hover:scale-105 transition-all ">
        <img
          src={photoUrl ? photoUrl : "/placeholder.jpg"}
          className="object-cover rounded-xl h-[220px] w-[280px]"
        />
        <div>
          <h2 className="font-bold text-lg text-black">
            {trip?.userSelection?.location?.label}
          </h2>
          <h2 className="text-sm text-gray-500">
            {trip?.userSelection?.noOfDays} Days trip with{" "}
            {trip?.userSelection?.budget} budget
          </h2>
        </div>
      </div>
    </Link>
  );
}
export default UserTripsCardItem;
