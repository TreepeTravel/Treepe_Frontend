'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NavPopup({ onClose }) {


    const [isSignIn, setisSignIn] = useState(true)

    const router = useRouter()

    return (
        <div
            className="fixed px-5  inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            onClick={onClose}
        >
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-3xl shadow-md" onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-center ">
                    <div
                        className="flex font-extrabold mr-10 w-full ml-36  text-2xl italic  tracking-tight items-center cursor-pointer"
                        onClick={() => router.push("/")}
                    >
                        Tripe.com
                    </div>
                    <button onClick={onClose} className=" text-slate-900 hover:bg-red-200 rounded-2xl p-1  font-extrabold  text-end mb-5"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></button>
                </div>


                {isSignIn ? <SignIn /> : <SignUp />}

            </div>
        </div>
    );

    function SignIn() {
        const [showPassword, setShowPassword] = useState(false);

        return <>
            <h2 className="text-center text-2xl font-bold text-gray-800">Sign in to your account</h2>
            <form className="space-y-6">
                <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700">Email address </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        className="w-full px-3 py-2 mt-1 border rounded-3xl border-gray-400 text-gray-900 focus:outline-none focus:ring focus:ring-green-200"
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-bold text-gray-700">Password</label>
                    {/* <input
            type="password"
            name="password"
            id="password"
            required
            className="w-full px-3 py-2 mt-1 border rounded-3xl  border-gray-400 text-gray-900 focus:outline-none focus:ring focus:ring-green-200"
        /> */}
                    <div className="relative">

                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            id="password"
                            required
                            className="w-full px-3 py-2 mt-1 border rounded-3xl border-gray-400 text-gray-900 focus:outline-none focus:ring focus:ring-green-200"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-3 flex justify-center mt-1 items-center text-gray-500"
                        >
                            {showPassword ?
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="20px" viewBox="0 -960 960 960"
                                    width="20px"
                                    fill="#666666">
                                    <path
                                        d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" />
                                </svg>
                                :
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="20px"
                                    viewBox="0 -960 960 960"
                                    width="20px"
                                    fill="#666666">
                                    <path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z" />
                                </svg>
                            }
                        </button>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <label className="flex items-center text-sm text-gray-600">
                        <input type="checkbox" className="mr-2 text-gray-600 font-semibold  " /> Remember me for 30 Days
                    </label>
                    <button className="text-sm text-green-600 font-semibold ">Forgot password</button>
                </div>
                <button
                    type="submit"
                    className="w-full py-2 flex items-center justify-center font-semibold text-white bg-green-600 rounded-3xl hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-300"
                >
                    Sign in
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M480-120v-80h280v-560H480v-80h280q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H480Zm-80-160-55-58 102-102H120v-80h327L345-622l55-58 200 200-200 200Z" /></svg>
                </button>
                <div className="flex text-gray-700 gap-2 font-semibold justify-center items-center text-sm">
                    Don't have an account? <button type="button" onClick={() => { setisSignIn(false) }} className="text-sm text-green-600 hover:text-green-700">Sign up</button>
                </div>
            </form>
            <div className="relative flex items-center justify-center my-4">
                <span className="absolute px-4  font-bold bg-white text-gray-400">OR</span>
                <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="w-full">
                <button className="flex-1 py-2 w-full bg-slate-50  border border-gray-400 rounded-3xl font-bold text-gray-800 ">
                    <img src="/google.png" alt="Google" className="inline w-5 h-5 mr-2" /> Sign In with Google
                </button>

            </div></>

    }


    // Sign Up page
    function SignUp() {
        const [showSignUpPassword, setShowSignUpPassword] = useState(false);
        const [showRepeatPassword, setRepeatShowPassword] = useState(false);


        return <><h2 className="text-center  text-2xl capitalize font-bold text-gray-800">Sign Up for Free</h2>
            <form className="space-y-6">
                <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700">Email address </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        className="w-full px-3 py-2 mt-1 border rounded-3xl border-gray-400 text-gray-900 focus:outline-none focus:ring focus:ring-green-200"
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-bold text-gray-700">Password</label>

                    <div className="relative">

                        <input
                            type={showSignUpPassword ? "text" : "password"}
                            name="password"
                            id="password"
                            required
                            className="w-full px-3 py-2 mt-1 border rounded-3xl border-gray-400 text-gray-900 focus:outline-none focus:ring focus:ring-green-200"
                        />
                        <button
                            type="button"
                            onClick={() => setShowSignUpPassword(!showSignUpPassword)}
                            className="absolute inset-y-0 right-3 flex justify-center mt-1 items-center text-gray-500"
                        >
                            {showSignUpPassword ?
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="20px" viewBox="0 -960 960 960"
                                    width="20px"
                                    fill="#666666">
                                    <path
                                        d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" />
                                </svg>
                                :
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="20px"
                                    viewBox="0 -960 960 960"
                                    width="20px"
                                    fill="#666666">
                                    <path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z" />
                                </svg>
                            }
                        </button>
                    </div>
                    {/* Password Strong or not */}
                    <div className="w-full mt-2">
                        <div className="flex space-x-1">
                            {/* Active segments */}
                            <div className="w-1/3 h-1 bg-green-500 rounded-full"></div>
                            <div className="w-1/3 h-1 bg-green-500 rounded-full"></div>
                            <div className="w-1/3 h-1 bg-green-500 rounded-full"></div>
                            <div className="w-1/3 h-1 bg-gray-300 rounded-full"></div>

                        </div>
                        <h1 className="text-sm font-medium text-gray-500 mt-1">Password strength: Strong</h1>
                    </div>

                </div>
                <div>
                    <label htmlFor="password" className="block  text-sm font-bold text-gray-700">Repeat Password</label>

                    <div className="relative">

                        <input
                            type={showRepeatPassword ? "text" : "password"}
                            name="password"
                            id="password"
                            required
                            className="w-full px-3 py-2 mt-1 border rounded-3xl border-gray-400 text-gray-900 focus:outline-none focus:ring focus:ring-green-200"
                        />
                        <button
                            type="button"
                            onClick={() => setRepeatShowPassword(!showRepeatPassword)}
                            className="absolute inset-y-0 right-3 flex justify-center mt-1 items-center text-gray-500"
                        >
                            {showRepeatPassword ?
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="20px" viewBox="0 -960 960 960"
                                    width="20px"
                                    fill="#666666">
                                    <path
                                        d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" />
                                </svg>
                                :
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="20px"
                                    viewBox="0 -960 960 960"
                                    width="20px"
                                    fill="#666666">
                                    <path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z" />
                                </svg>
                            }
                        </button>
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full py-2 flex items-center justify-center font-semibold text-white bg-green-600 rounded-3xl hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-300"
                >
                    Sign Up
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M480-120v-80h280v-560H480v-80h280q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H480Zm-80-160-55-58 102-102H120v-80h327L345-622l55-58 200 200-200 200Z" /></svg>
                </button>
                <div className="flex text-gray-700 gap-2 font-semibold justify-center items-center text-sm">
                    Allready have an account? <button type="button" onClick={() => { setisSignIn(true) }} className="text-sm text-green-600 hover:text-green-700">Sign
                        In
                    </button>
                </div>
            </form>
            <div className="relative flex items-center justify-center my-4">
                <span className="absolute px-4  font-bold bg-white text-gray-400">OR</span>
                <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="w-full">
                <button className="flex-1 py-2 w-full bg-slate-50  border border-gray-400 rounded-3xl font-bold text-gray-800 ">
                    <img src="/google.png" alt="Google" className="inline w-5 h-5 mr-2" /> Sign In with Google
                </button>

            </div></>
    }

}


