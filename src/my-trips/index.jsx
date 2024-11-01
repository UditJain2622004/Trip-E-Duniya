import { useEffect } from "react";
import { db } from "@/service/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useNavigation } from "react-router-dom";
import UserTripsCardItem from "./components/UserTripCarditem";
import { useState } from "react";

function MyTrips() {
  const navigate = useNavigation();
  const [userTrips, setUserTrips] = useState([]);

  useEffect(() => {
    GetUserTrips();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const GetUserTrips = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      navigate("/");
      return;
    }
    const q = query(
      collection(db, "AITrips"),
      where("userEmail", "==", user?.email)
    );
    const querySnapshot = await getDocs(q);
    setUserTrips([]);
    querySnapshot.forEach((doc) => {
      // console.log(doc.id, " => ", doc.data());
      setUserTrips((prev) => [...prev, doc.data()]);
    });
  };
  return (
    <div className="p-10 sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10">
      <h2 className="font-bold text-3xl">My Trips</h2>
      <div className="grid grid-cols-2 mt-10 md:grid-cols-3 gap-5">
        {userTrips?.length > 0
          ? userTrips.map((trip, index) => (
              <UserTripsCardItem trip={trip} key={index} />
            ))
          : // : [1, 2, 3].map((trip, index) => (
            //     <div
            //       key={index}
            //       className="h-[220px] w-full bg-slate-200 animate-pulse rounded-xl"
            //     ></div>
            //   ))
            "No Trips Found..."}
      </div>
    </div>
  );
}

export default MyTrips;
