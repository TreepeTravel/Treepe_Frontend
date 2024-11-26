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
  const {
    isSignUp,
    setisSignUp,
    login,
    setlogin,
    verifyPopup,
    setverifyPopup,
  } = useContext(GlobalContext);

  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [resMessage, setResMessage] = useState({
    show: false,
    message: "",
  });

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
      return { strength: "Strong", color: "bg-green-500", block: 3 };
    } else if (password.length > 6) {
      return { strength: "Medium", color: "bg-yellow-500", block: 2 };
    }
    return { strength: "Weak", color: "bg-red-500", block: 1 };
  }

  // Handles the sign-up process
  async function handleSignUp(e) {
    e.preventDefault(); // Prevent page reload on form submission
    setIsLoading(true); // Show loading indicator

    try {
      // Call the sign-up API with form data
      const res = await SignUpApi(signInForm);

      if (res?.success) {
        // If sign-up is successful, show OTP verification pop-up
        setverifyPopup(true);
      } else if (res?.message === "User already exists. Please login.") {
        // Handle case where user already exists
        setResMessage({ show: true, message: res.message });

        // Automatically switch to the sign-in page after a delay
        setTimeout(() => {
          setisSignUp(false);
          setResMessage({ show: false, message: "" });
        }, 3000);
      } else {
        // Handle other errors returned by the API
        console.error("Unexpected response:", res);
      }
    } catch (error) {
      // Handle network or unexpected errors
      console.error("Sign-up failed:", error);
    } finally {
      // Ensure the loading state is reset regardless of success or failure
      setIsLoading(false);
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
          <form className="space-y-4" onSubmit={(e) => handleSignUp(e)}>
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
                  {/* Block 1 */}
                  <div
                    className={`w-1/3 h-1 ${
                      passwordStrength.block >= 1
                        ? "bg-green-500"
                        : "bg-gray-300"
                    } rounded-full`}
                  ></div>
                  {/* Block 2 */}
                  <div
                    className={`w-1/3 h-1 ${
                      passwordStrength.block >= 2
                        ? "bg-green-500"
                        : "bg-gray-300"
                    } rounded-full`}
                  ></div>
                  {/* Block 3 */}
                  <div
                    className={`w-1/3 h-1 ${
                      passwordStrength.block === 3
                        ? "bg-green-500"
                        : "bg-gray-300"
                    } rounded-full`}
                  ></div>
                </div>
                {/* Password strength label */}
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

            <div>
              {resMessage.show ? (
                <h3 className="text-red-600 mb-2 text-center text-xs font-medium  ">
                  {resMessage.message}
                </h3>
              ) : null}

              {/* Submit button */}
              <button
                type="submit"
                // onClick={(e) => handleSignUp(e)}
                className={`w-full py-2 flex gap-1 items-center justify-center font-semibold text-white  rounded-3xl   ${
                  isLoading
                    ? "bg-gray-400 cursor-not-allowed" // Style when loading
                    : "bg-green-600 hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-300"
                }`}
              >
                {isLoading ? "SignUp..." : "Sign Up "}{" "}
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.1875 17.2246C10.1875 17.4732 10.0887 17.7117 9.91291 17.8875C9.7371 18.0633 9.49864 18.1621 9.25 18.1621H4.25C4.00136 18.1621 3.7629 18.0633 3.58709 17.8875C3.41127 17.7117 3.3125 17.4732 3.3125 17.2246V3.47461C3.3125 3.22597 3.41127 2.98751 3.58709 2.8117C3.7629 2.63588 4.00136 2.53711 4.25 2.53711H9.25C9.49864 2.53711 9.7371 2.63588 9.91291 2.8117C10.0887 2.98751 10.1875 3.22597 10.1875 3.47461C10.1875 3.72325 10.0887 3.96171 9.91291 4.13752C9.7371 4.31334 9.49864 4.41211 9.25 4.41211H5.1875V16.2871H9.25C9.49864 16.2871 9.7371 16.3859 9.91291 16.5617C10.0887 16.7375 10.1875 16.976 10.1875 17.2246ZM18.6633 9.68633L15.5383 6.56133C15.3622 6.38521 15.1233 6.28626 14.8742 6.28626C14.6251 6.28626 14.3863 6.38521 14.2102 6.56133C14.034 6.73745 13.9351 6.97632 13.9351 7.22539C13.9351 7.47446 14.034 7.71333 14.2102 7.88945L15.7344 9.41211H9.25C9.00136 9.41211 8.7629 9.51088 8.58709 9.6867C8.41127 9.86251 8.3125 10.101 8.3125 10.3496C8.3125 10.5982 8.41127 10.8367 8.58709 11.0125C8.7629 11.1883 9.00136 11.2871 9.25 11.2871H15.7344L14.2094 12.8113C14.0333 12.9874 13.9343 13.2263 13.9343 13.4754C13.9343 13.7245 14.0333 13.9633 14.2094 14.1395C14.3855 14.3156 14.6244 14.4145 14.8734 14.4145C15.1225 14.4145 15.3614 14.3156 15.5375 14.1395L18.6625 11.0145C18.7499 10.9274 18.8194 10.824 18.8667 10.71C18.9141 10.5961 18.9386 10.4739 18.9386 10.3506C18.9387 10.2272 18.9144 10.105 18.8672 9.99099C18.8199 9.87701 18.7506 9.77348 18.6633 9.68633Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>

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
