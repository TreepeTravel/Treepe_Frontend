"use client";
import { GlobalContext } from "@/context";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import SignIn from "./SignIn";
import Verify from "./VerifyOTP";

const { SignUpApi } = require("@/action/sign-in");

export default function SignUp({ onClose }) {
  // States for password visibility toggles
  const [showSignUpPassword, setShowSignUpPassword] = useState(false);
  const [showRepeatPassword, setRepeatShowPassword] = useState(false);

  // State to track password input and its strength
  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState({
    strength: "Weak",
    color: "bg-red-500",
  });

  // Global context values for sign-up and pop-up states
  const { isSignUp, setisSignUp } = useContext(GlobalContext);
  const { login, setlogin, verifyPopup, setverifyPopup } =
    useContext(GlobalContext);

  const router = useRouter();

  // State for form data
  const [signInForm, setsignInForm] = useState({
    email: "",
    password: "",
    name: "",
  });

  // Handles changes in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setsignInForm((form) => ({ ...form, [name]: value }));

    // Updates password strength when the password field changes
    if (name === "password") {
      setPasswordStrength(getPasswordStrength(value));
    }
  };

  // Evaluates password strength
  function getPasswordStrength(password) {
    if (password.length > 10 && /[A-Z]/.test(password) && /\d/.test(password)) {
      return { strength: "Strong", color: "bg-green-500" };
    } else if (password.length > 6) {
      return { strength: "Medium", color: "bg-yellow-500" };
    }
    return { strength: "Weak", color: "bg-red-500" };
  }

  // Handles the sign-up process
  async function handleSignUp(e) {
    e.preventDefault(); // Prevents page reload on form submission
    console.log(signInForm);

    // Calls the sign-up API with form data
    const res = await SignUpApi(signInForm);
    console.log(res);

    // Handles the response from the API
    if (res.success) {
      console.log("Verify page'");
      setverifyPopup(true); // Opens the OTP verification pop-up
    }

    // If user already exists, switch to the sign-in form
    if (
      res.message == "User already exists. Please login." &&
      res.success == false
    ) {
      setisSignUp(false);
    }
  }

  console.log(verifyPopup);

  return (
    <>
      {/* Show verification page if verifyPopup is true */}
      {verifyPopup ? (
        <Verify onClose={onClose} email={signInForm && signInForm.email} />
      ) : (
        <>
          {/* Sign-up form */}
          <h2 className="text-center text-2xl capitalize font-bold text-gray-800">
            Sign Up for Free
          </h2>
          <form className="space-y-6">
            {/* Name field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-bold text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={signInForm.name || ""}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 mt-1 border rounded-3xl border-gray-400 text-gray-900 focus:outline-none focus:ring focus:ring-green-200"
              />
            </div>

            {/* Email field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-bold text-gray-700"
              >
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={signInForm.email || ""}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 mt-1 border rounded-3xl border-gray-400 text-gray-900 focus:outline-none focus:ring focus:ring-green-200"
              />
            </div>

            {/* Password field with strength indicator */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-bold text-gray-700"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showSignUpPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  value={signInForm.password || ""}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 mt-1 border rounded-3xl border-gray-400 text-gray-900 focus:outline-none focus:ring focus:ring-green-200"
                />
                {/* Toggle password visibility */}
                <button
                  type="button"
                  onClick={() => setShowSignUpPassword(!showSignUpPassword)}
                  className="absolute inset-y-0 right-3 flex justify-center items-center text-gray-500"
                >
                  {showSignUpPassword ? (
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

              {/* Password strength indicator */}
              <div className="w-full mt-2">
                <div className="flex space-x-1">
                  <div
                    className={`w-1/3 h-1 ${passwordStrength.color} rounded-full`}
                  ></div>
                  <div
                    className={`w-1/3 h-1 ${
                      password.length > 5
                        ? passwordStrength.color
                        : "bg-gray-300"
                    } rounded-full`}
                  ></div>
                  <div
                    className={`w-1/3 h-1 ${
                      password.length > 8
                        ? passwordStrength.color
                        : "bg-gray-300"
                    } rounded-full`}
                  ></div>
                </div>
                <h1 className="text-sm font-medium text-gray-500 mt-1">
                  Password strength: {passwordStrength.strength}
                </h1>
              </div>
            </div>

            {/* Repeat password field */}
            <div>
              <label
                htmlFor="repeatePassword"
                className="block text-sm font-bold text-gray-700"
              >
                Repeat Password
              </label>
              <div className="relative">
                <input
                  type={showRepeatPassword ? "text" : "password"}
                  name="repeatePassword"
                  id="repeatePassword"
                  required
                  className="w-full px-3 py-2 mt-1 border rounded-3xl border-gray-400 text-gray-900 focus:outline-none focus:ring focus:ring-green-200"
                />
                {/* Toggle repeat password visibility */}
                <button
                  type="button"
                  onClick={() => setRepeatShowPassword(!showRepeatPassword)}
                  className="absolute inset-y-0 right-3 flex justify-center items-center text-gray-500"
                >
                  {showRepeatPassword ? (
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

            {/* Submit button */}
            <button
              type="submit"
              onClick={(e) => handleSignUp(e)}
              className="w-full py-2 flex items-center justify-center font-semibold text-white bg-green-600 rounded-3xl hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-300"
            >
              Sign Up
            </button>

            {/* Switch to sign-in */}
            <div className="flex text-gray-700 gap-2 font-semibold justify-center items-center text-sm">
              Already have an account?
              <button
                type="button"
                onClick={() => setisSignUp(false)}
                className="text-sm text-green-600 hover:text-green-700"
              >
                Sign In
              </button>
            </div>
          </form>

          {/* Divider */}
          <div className="relative flex items-center justify-center my-4">
            <span className="absolute px-4 font-bold bg-white text-gray-400">
              OR
            </span>
            <div className="w-full border-t border-gray-300"></div>
          </div>

          {/* Google sign-in button */}
          <div className="w-full">
            <button className="flex-1 py-2 w-full bg-slate-50 border border-gray-400 rounded-3xl font-bold text-gray-800">
              <img
                src="/google.png"
                alt="Google"
                className="inline w-5 h-5 mr-2"
              />
              Sign In with Google
            </button>
          </div>
        </>
      )}
    </>
  );
}
