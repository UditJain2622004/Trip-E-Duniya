import { useEffect, useState } from "react";
import { Input } from "../components/ui/input";
import { SelectBudgetOptions } from "./../constants/options.jsx";
import { SelectTravelesList } from "./../constants/options.jsx";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { toast } from "sonner";
import { AI_PROMPT } from "./../constants/options.jsx";
import { chatSession } from "@/service/aiModel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  // DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

import { setDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";
import { db } from "@/service/firebaseConfig";

import { AiOutlineLoading3Quarters } from "react-icons/ai";
import js from "@eslint/js";
import { useNavigate } from "react-router-dom";

console.log(SelectBudgetOptions);

function CreateTrip() {
  const [place, setPlace] = useState("");
  const [formData, setFormData] = useState([]);
  const [openDialogue, setopenDialogue] = useState(false);

  // maintaining the loading state
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const login = useGoogleLogin({
    onSuccess: (response) => {
      // localStorage.setItem("user", JSON.stringify(response));
      // setopenDialogue(false);
      getUserProfile(response);
      console.log(response);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const onGenerateTrip = async () => {
    const user = localStorage.getItem("user");
    if (!user) {
      setopenDialogue(true);
      return;
    }

    if (
      formData?.noOfDays < 1 ||
      (!formData?.location && !formData?.budget) ||
      !formData?.traveller
    ) {
      toast("Please fill all the fields");
      return;
    }

    //set loading state
    setLoading(true);

    const FinalPrompt = AI_PROMPT.replace(
      "{location}",
      formData.location?.label
    )
      .replace("{noOfDays}", formData?.noOfDays)
      .replace("{noOfDays}", formData?.noOfDays) //noOfDays is 2 times in the prompt
      .replace("{traveller}", formData?.traveller)
      .replace("{budget}", formData?.budget);

    console.log(FinalPrompt);

    const result = await chatSession.sendMessage(FinalPrompt);
    console.log(result?.response?.text());
    const TripData = result?.response?.text();
    setLoading(false);
    SaveAiTrip(TripData);
  };

  const SaveAiTrip = async (TripData) => {
    setLoading(true); // rishabh: set loading state

    const docId = Date.now().toString();
    const user = JSON.parse(localStorage.getItem("user"));

    await setDoc(doc(db, "AITrips", docId), {
      userSelection: formData,
      TripData: JSON.parse(TripData),
      userEmail: user?.email,
      id: docId,
    });

    setLoading(false);
    navigate("/view-trip/" + docId);
    window.location.reload();
  };

  const getUserProfile = async (tokenInfo) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?accesstoken=${tokenInfo.access_token}`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${tokenInfo.access_token}`,
          },
        }
      )
      .then(async (response) => {
        console.log(response);
        localStorage.setItem("user", JSON.stringify(response.data));
        setopenDialogue(false);
        await onGenerateTrip();
        // window.location.reload();
      });
  };

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10">
      <h2 className="font-bold text-3xl">
        Tell us your travel preferences 🏕️🌴
      </h2>
      <p className="mt-3 text-gray-500 text-xl">
        just provide some basic information and we will get you the best and
        affordable itinerary
      </p>

      <div className="mt-20 flex flex-col gap-10">
        <div>
          <h2 className="text-xl my-3 font-medium">
            What is your preferred destination ?
          </h2>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACES_API_KEY}
            selectProps={{
              place,
              onChange: (v) => {
                setPlace(v);
                handleInputChange("location", v);
              },
            }}
          />
          {/* <button style={{ color: "black" }}>Enter destination</button> */}
        </div>
        <div>
          <h2 className="font-bold text-3xl pb-4">
            For how many days you are planning your trip
          </h2>
          <Input
            placeholder={"Ex.3"}
            type="number"
            onChange={(e) => handleInputChange("noOfDays", e.target.value)}
          />
        </div>
      </div>
      <div>
        <h2 className="font-bold text-3xl pt-10  pb-4">What is your budget?</h2>
        <div className="grid grid-cols-3 gap-5">
          {SelectBudgetOptions.map((item, index) => (
            <div
              key={index}
              onClick={() => handleInputChange("budget", item.title)}
              className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg ${
                formData.budget == item.title ? "shadow-lg border-black" : ""
              }`}
            >
              <h2 className="text-4xl">{item.icon}</h2>
              <h2 className="font-bold text-lg">{item.title}</h2>
              <h2 className="text-sm text-gray-500">{item.desc}</h2>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="font-bold text-3xl pt-10  pb-4">
          With whom are you planning your next trip-e ride?
        </h2>
        <div className="grid grid-cols-3 gap-5">
          {SelectTravelesList.map((item, index) => (
            <div
              key={index}
              onClick={() => handleInputChange("traveller", item.people)}
              className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg ${
                formData.traveller == item.people
                  ? "shadow-lg border-black"
                  : ""
              }`}
            >
              <h2 className="text-4xl">{item.icon}</h2>
              <h2 className="font-bold text-lg">{item.title}</h2>
              <h2 className="text-sm text-gray-500">{item.desc}</h2>
            </div>
          ))}
        </div>
      </div>
      <div className="my-10 justify-end flex">
        <button
          className="text-white bg-blue-500"
          disabled={loading}
          onClick={onGenerateTrip}
        >
          {loading ? ( // added by rishabh
            <AiOutlineLoading3Quarters className="h-7 w-7 animate-spin" />
          ) : (
            "Generate Trip"
          )}
        </button>
      </div>

      <Dialog open={openDialogue} onOpenChange={setopenDialogue}>
        {/* <DialogTrigger>Open</DialogTrigger> */}
        <DialogContent>
          <DialogHeader>
            <DialogTitle>You are not signed in!</DialogTitle>
            <DialogDescription>
              {/* <img src="/logo6.png" alt="" /> */}
              {/* <p className="font-bold text-lg mt-7">Sign In With Google</p>
              <p>Sign in to the App with Google authentication securely</p> */}

              <Button
                onClick={login}
                className="w-full mt-5 flex gap-4 items-center"
              >
                <FcGoogle className="h-7 w-7" />
                Sign In With Google
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CreateTrip;
