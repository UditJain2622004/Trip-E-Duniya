import React from "react";
import { useEffect, useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { FcGoogle } from "react-icons/fc";
//import { useEffect } from "react";
import { Button } from "../button";
import { googleLogout } from "@react-oauth/google";
import { useNavigation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import MyTrips from "@/my-trips";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogClose,
  DialogFooter,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  // DialogTrigger,
} from "@/components/ui/dialog";

function Header() {
  const navigate = useNavigate();
  const [openDialogue, setopenDialogue] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));
  // const [user, setUser] = useState(null);
  // useEffect(() => {
  //   const storedUser = JSON.parse(localStorage.getItem("user"));
  //   if (storedUser) {
  //     setUser(storedUser);
  //   }
  // }, []);

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
      .then((response) => {
        console.log(response);
        localStorage.setItem("user", JSON.stringify(response.data));
        // setUser(response.data);
        setopenDialogue(false);
        //onGenerateTrip();
        window.location.reload();
      });
  };

  // const handleClose = () => {
  //   setopenDialogue(false);
  // };

  return (
    <div className="p-3 shadow-sm flex justify-between items-center px-5">
      <img src="/logo6.png" alt="" />
      <div>
        {user ? (
          <div className="flex item-center gap-3">
            <a href="/my-trips">
              <Button variant="outline" className="rounded-full">
                My Trips
              </Button>
            </a>
            {/* <img
              src={user?.picture}
              className="h-[35px] w-[35px] rounded-full"
            /> */}
            <Popover>
              <PopoverTrigger className="rounded-full p-0 border-0 focus:outline-none">
                <img
                  src={user?.picture}
                  className="h-[35px] w-[35px] rounded-full"
                />
              </PopoverTrigger>
              <PopoverContent>
                <h2
                  className="cursor-pointer"
                  onClick={() => {
                    googleLogout();
                    localStorage.clear();
                    // setUser(null);
                    navigate("/");
                    window.location.reload();
                  }}
                >
                  Logout
                </h2>
              </PopoverContent>
            </Popover>
          </div>
        ) : (
          <Button onClick={() => setopenDialogue(true)}>Sign In</Button>
        )}
      </div>

      <Dialog open={openDialogue}>
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

export default Header;
