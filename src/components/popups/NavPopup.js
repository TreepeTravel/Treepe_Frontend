"use client";

import { GlobalContext } from "@/context";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import Verify from "./VerifyOTP";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

export default function NavPopup({ onClose }) {
  // Context values for managing different states of the authentication modals
  const {
    forgatePopup,
    setforgatePopup,
    verifyPopup,
    setverifyPopup,
    isSignUp,
    setisSignUp,
    isSignIn,
    setisSignIn,
  } = useContext(GlobalContext);

  // Local state to track authentication UI state
  const [authState, setAuthState] = useState({
    isSignIn: isSignIn, // Sign-in modal state
    isSignUp: isSignUp, // Sign-up modal state
    forgatePopup: false, // Forgot password state
    verifyPopup: false, // Verify OTP state
  });

  const router = useRouter();

  // Reset the `isSignIn` state when it's toggled
  useEffect(() => {
    if (isSignIn === false) {
      setAuthState({ ...authState, isSignIn: false });
    }
  }, [isSignIn]);

  // Function to handle closing the modal
  const handleOnClose = () => {
    if (onClose) onClose(); // Call the optional onClose prop if provided

    // Reset the global states for all modals
    setforgatePopup(false);
    setisSignIn(false);
    setisSignUp(false);
    setverifyPopup(false);

    // Reset the local state for all modals
    setAuthState({
      ...authState,
      isSignIn: false,
      isSignUp: false,
      forgatePopup: false,
      verifyPopup: false,
    });
  };

  // Listen for the Escape key to close the modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") handleOnClose(); // Close modal on Escape key press
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Function to determine which authentication component to render
  const renderAuthComponent = () => {
    if (authState.isSignIn) {
      if (authState.verifyPopup) return <Verify />; // Show OTP verification
      return <SignIn />; // Show Sign-in page
    }
    if (authState.isSignUp) return <SignUp onClose={handleOnClose} />; // Show Sign-up page
    return null; // No modal to render
  };

  return (
    <div
      className="fixed px-5 inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={handleOnClose} // Close modal on background click
    >
      <div
        className="w-full max-w-md p-8 space-y-6 bg-white rounded-3xl shadow-md"
        onClick={(e) => e.stopPropagation()} // Prevent modal close on modal click
      >
        {/* Modal header with a logo and close button */}
        <div className="flex justify-center">
          <div
            className="flex font-extrabold mr-10 w-full ml-36 text-2xl italic tracking-tight items-center cursor-pointer"
            onClick={() => router.push("/")} // Navigate to home on logo click
          >
            Tripe.com
          </div>
          <button
            onClick={handleOnClose} // Close modal on button click
            className="text-slate-900 hover:bg-red-200 rounded-2xl p-1 font-extrabold text-end mb-5"
          >
            {/* Close icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#EA3323"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </button>
        </div>

        {/* Render the appropriate authentication component */}
        {renderAuthComponent()}
      </div>
    </div>
  );
}
