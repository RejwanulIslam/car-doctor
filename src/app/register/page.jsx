"use client";
import React from "react";
import Image from "next/image";
import { FaFacebook, FaLinkedin, FaGoogle } from "react-icons/fa";
import { registerUser } from "../action/auth/registerUser";

export default function SignUp() {
    const handleSubmit=async(e)=>{
        e.preventDefault()
        const name=e.target.name.value
        const email=e.target.email.value
        const password=e.target.password.value
       await registerUser({name,email,password})
       
       .then(data=>console.log(data))
        // console.log(name,email,password)

    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="bg-white shadow-lg rounded-lg flex w-[900px]">

                {/* Left Illustration */}
                <div className="w-1/2 flex items-center justify-center p-6">
                    <Image
                        src="/assets/images/login/login.svg" // এখানে আপনার ইমেজ রাখবেন (public ফোল্ডারে)
                        alt="Sign Up Illustration"
                        width={400}
                        height={400}
                    />
                </div>

                {/* Right SignUp Form */}
                <div className="w-1/2 p-8">
                    <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <input
                                type="text"
                                placeholder="Your name"
                                name="name"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                            />
                        </div>

                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Your email"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                            />
                        </div>

                        <div>
                            <input
                                type="password"
                                name="password"
                                placeholder="Your password"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
                        >
                            Sign Up
                        </button>
                    </form>

                    <p className="text-center text-gray-500 mt-4">Or Sign Up with</p>

                    {/* Social Icons */}
                    <div className="flex justify-center space-x-6 mt-3">
                        <FaFacebook className="text-2xl text-gray-600 cursor-pointer hover:text-blue-600" />
                        <FaLinkedin className="text-2xl text-gray-600 cursor-pointer hover:text-blue-700" />
                        <FaGoogle className="text-2xl text-gray-600 cursor-pointer hover:text-red-500" />
                    </div>

                    <p className="text-center mt-5 text-gray-600">
                        Already have an account?{" "}
                        <a href="/login" className="text-red-500 font-semibold">
                            Login
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

