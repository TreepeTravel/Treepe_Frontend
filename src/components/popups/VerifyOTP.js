"use client";

import { VerifyApi } from "@/action/sign-in";
import { GlobalContext } from "@/context";
import { useContext, useState } from "react";

export default function Verify({ email, onClose }) {
  // Access global state using the context
  const {
    setlogin, // To update login status
    setforgatePopup, // To control Forgot Password popup visibility
    setverifyPopup, // To control OTP verification popup visibility
    setisSignUp, // To toggle between Sign Up and Sign In
    setisSignIn,
    isNavpopupOpen,
    setisNavpopupOpen, // To control Sign In popup visibility
  } = useContext(GlobalContext);

  // Local state for managing OTP input, error messages, and loading status
  const [otp, setOtp] = useState(new Array(6).fill("")); // Initialize OTP with 6 empty fields
  const [errorMessage, setErrorMessage] = useState(""); // Error message display
  const [isLoading, setIsLoading] = useState(false); // Loading state for verification button

  // Function to handle OTP input changes
  const handleOtpChange = (value, index) => {
    if (isNaN(value)) return; // Only allow numeric input

    const newOtp = [...otp]; // Clone the OTP array
    newOtp[index] = value.slice(-1); // Keep only the last digit entered
    setOtp(newOtp); // Update the OTP state

    // Focus on the next input field if a value is entered
    if (value && index < otp.length - 1) {
      document.getElementById(`otp-${index + 1}`).focus();
    }

    // Focus on the previous input field if cleared
    if (!value && index > 0) {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  // Function to handle OTP verification
  const handleVerify = async (e) => {
    e.preventDefault(); // Prevent form submission
    setErrorMessage(""); // Reset any previous errors
    const enteredOtp = otp.join(""); // Combine OTP digits into a single string

    // Validate OTP length
    if (enteredOtp.length !== 6) {
      setErrorMessage("Please enter a valid 6-digit OTP.");
      return;
    }

    setIsLoading(true); // Show loading state
    try {
      console.log(enteredOtp);
      const res = await VerifyApi({ code: enteredOtp }); // Call API to verify OTP
      console.log(res);
      if (res.success) {
        // If OTP is valid
        // alert("OTP Verified Successfully!");
        setlogin(true); // Mark user as logged in
        setisNavpopupOpen(false);
        setverifyPopup(false); // Close verification popup
        setforgatePopup(false); // Close Forgot Password popup
        setisSignIn(false); // Close Sign In popup
        setisSignUp(false); // Close Sign Up form if open
      } else {
        // Display error message from API response
        setErrorMessage(res.message || "Invalid OTP. Please try again.");
      }
    } catch (error) {
      // Handle API errors
      setErrorMessage(
        error.message || "Something went wrong. Please try again."
      );
    } finally {
      setIsLoading(false); // Stop loading state
    }
  };

  return (
    <div className="flex flex-col items-center  justify-center py-4">
      {/* Header */}
      <h2 className="text-center text-2xl font-bold text-gray-800">
        Verify Email
      </h2>
      <p className="flex justify-center w-full mb-4 mt-2 text-sm text-gray-700 gap-2 items-center">
        <span className="">Verification email has been sent to</span>
        <span className="font-semibold text-gray-900">{email}</span>
      </p>

      {/* OTP Input Form */}
      <form
        className="space-y-4 flex flex-col items-center justify-center"
        onSubmit={handleVerify}
      >
        {/* OTP Input Fields */}
        <label htmlFor="otp" className="block text-md font-bold text-gray-700">
          Enter OTP
        </label>
        <div className="flex items-center justify-center gap-2">
          {otp.map((value, index) => (
            <input
              key={index}
              id={`otp-${index}`} // Unique ID for each input
              type="text"
              maxLength="1" // Restrict each field to a single character
              value={value}
              onChange={(e) => handleOtpChange(e.target.value, index)}
              className="w-12 h-12 text-center px-2 py-1 border rounded-lg border-gray-400 text-gray-900 focus:outline-none focus:ring focus:ring-green-200"
            />
          ))}
        </div>

        {/* Error Message */}
        {errorMessage && (
          <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
        )}

        {/* Verify Button */}
        <button
          type="submit"
          disabled={isLoading} // Disable button during loading
          className={`w-full py-2 flex mt-5 items-center justify-center font-semibold text-white rounded-3xl ${
            isLoading
              ? "bg-gray-400 cursor-not-allowed" // Style when loading
              : "bg-green-600 hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-300"
          }`}
        >
          {isLoading ? "Verifying..." : "Verify"}{" "}
          {/* Change button text based on loading state */}
        </button>

        {/* Back to Sign In */}
        <div className="flex mt-5 text-gray-700 gap-2 font-semibold justify-center items-center text-sm">
          Back to
          <button
            type="button"
            onClick={() => setisSignUp(false)} // Close OTP verification and return to Sign In
            className="text-sm text-green-600 hover:text-green-700"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}
