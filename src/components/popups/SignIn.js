"use client";

import { GlobalContext } from "@/context";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation"; // For navigation within Next.js
import SignUp from "./SignUp";
import Verify from "./VerifyOTP";
import { loginApi } from "@/action/sign-in";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false); // To toggle password visibility
  const [signUpForm, setsignUpForm] = useState({
    email: "",
    password: "",
  }); // Form state for email and password
  const [error, setError] = useState(""); // State for error messages

  // Destructure global states and functions from GlobalContext
  const {
    forgatePopup, // Whether forgot password popup is active
    setforgatePopup,
    isSignUp, // Whether SignUp form should be displayed
    setisSignUp,
    verifyPopup, // Whether Verify OTP form should be displayed
    setverifyPopup,
    setlogin,
    setisNavpopupOpen, // Function to set login status
  } = useContext(GlobalContext);

  const router = useRouter(); // Initialize Next.js router

  // Handle the "Forgot Password" action
  const handleForgate = () => {
    setforgatePopup(true); // Open forgot password popup
  };

  // Handle login form submission
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setError(null); // Reset error state

    try {
      const response = await loginApi(signUpForm); // Send login request
      if (response.success) {
        // alert("Login successful!");
        setlogin(true); // Update login state
        setisNavpopupOpen(false); // Show
        router.push("/account"); // Navigate to secure account page
      } else {
        setError(response.message || "Something went wrong."); // Display server error message
      }
    } catch (err) {
      setError("Unable to login. Please try again."); // Handle API request errors
    }
  };

  // Handle input field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setsignUpForm((prev) => ({ ...prev, [name]: value })); // Update form state
  };

  // Conditional rendering for SignUp or Verify forms
  if (isSignUp) {
    return <SignUp />;
  }

  if (verifyPopup) {
    return <Verify />;
  }

  return (
    <>
      {forgatePopup ? (
        // Forgot Password Popup
        <>
          <h2 className="text-center text-2xl font-bold text-gray-800">
            Forgot Password?
          </h2>
          <p>
            Enter the email address associated with your account, and we'll send
            you a reset link.
          </p>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-bold text-gray-700"
              >
                Registered Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full px-3 py-2 mt-1 border rounded-3xl border-gray-400 text-gray-900 focus:outline-none focus:ring focus:ring-green-200"
              />
            </div>
            <button
              type="button"
              onClick={() => setverifyPopup(true)} // Open Verify OTP popup
              className="w-full py-2 flex items-center justify-center font-semibold text-white bg-green-600 rounded-3xl hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-300"
            >
              Continue
            </button>
            <div className="flex text-gray-700 gap-2 font-semibold justify-center items-center text-sm">
              Back to
              <button
                type="button"
                onClick={() => setforgatePopup(false)} // Return to SignIn form
                className="text-sm text-green-600 hover:text-green-700"
              >
                Sign In
              </button>
            </div>
          </form>
        </>
      ) : (
        // Sign In Form
        <>
          <h2 className="text-center text-2xl font-bold text-gray-800">
            Sign in to your account
          </h2>
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-bold text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={signUpForm.email}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 mt-1 border rounded-3xl border-gray-400 text-gray-900 focus:outline-none focus:ring focus:ring-green-200"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-bold text-gray-700"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  value={signUpForm.password}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 mt-1 border rounded-3xl border-gray-400 text-gray-900 focus:outline-none focus:ring focus:ring-green-200"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex justify-center mt-1 items-center text-gray-500"
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20px"
                      viewBox="0 -960 960 960"
                      width="20px"
                      fill="#666666"
                    >
                      <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20px"
                      viewBox="0 -960 960 960"
                      width="20px"
                      fill="#666666"
                    >
                      <path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm text-gray-600">
                <input type="checkbox" className="mr-2" /> Remember me for 30
                Days
              </label>
              <button
                type="button"
                onClick={handleForgate} // Open Forgot Password popup
                className="text-sm text-green-600 font-semibold"
              >
                Forgot password
              </button>
            </div>
            <button
              type="submit"
              className="w-full py-2 flex items-center justify-center font-semibold text-white bg-green-600 rounded-3xl hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-300"
            >
              Sign in
            </button>
            <div className="flex text-gray-700 gap-2 font-semibold justify-center items-center text-sm">
              Don't have an account?
              <button
                type="button"
                onClick={() => setisSignUp(true)} // Open SignUp form
                className="text-sm text-green-600 hover:text-green-700"
              >
                Sign up
              </button>
            </div>
          </form>
          {/* Separator and Google Sign In Button */}
          <div className="relative flex items-center justify-center my-4">
            <span className="absolute px-4 font-bold bg-white text-gray-400">
              OR
            </span>
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <button className="w-full py-2 bg-slate-50 border border-gray-400 rounded-3xl font-bold text-gray-800">
            <img
              src="/google.png"
              alt="Google"
              className="inline w-5 h-5 mr-2"
            />
            Sign In with Google
          </button>
        </>
      )}
    </>
  );
}
