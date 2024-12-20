/* eslint-disable react/prop-types */
// import { Button } from "@/components/ui/button";
// import React from "react";
// import { IoIosSend } from "react-icons/io";
import { GetPlacesDetails, PHOTO_REF_URL } from "@/service/GlobalAPI";
import { useEffect, useState } from "react";

function InfoSection({ trip }) {
  const [photoUrl, setPhotoUrl] = useState("");
  useEffect(() => {
    trip && GetPlacePhoto();
  }, [trip]);

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: trip?.userSelection?.location?.label,
    };
    // console.log("========================================" + data.textQuery);
    // console.log(trip?.userSelection?.location?.label);

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
    <div>
      <img
        src={photoUrl ? photoUrl : "/Placeholder.jpg"}
        className="h-[300px] w-full object-cover rounded-xl "
      />

      <div className="flex justify-between items-center">
        <div className="my-5 flex flex-col gap-2">
          <h2 className="font-bold text-2xl">
            {trip?.userSelection?.location?.label}
          </h2>
          <div className="flex gap-5">
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md">
              📆{trip.userSelection?.noOfDays} Day
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md">
              🪙{trip.userSelection?.budget} Budget
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md">
              🥂No. Of Traveler: {trip.userSelection?.traveller}
            </h2>
          </div>
        </div>
        {/* <Button>
          <IoIosSend />
        </Button> */}
      </div>
    </div>
  );
}

export default InfoSection;
