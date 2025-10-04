"use client";
import React from "react";
import Image from "next/image";
import { FaFacebook, FaLinkedin, FaGoogle } from "react-icons/fa";
import { registerUser } from "../action/auth/registerUser";
import Link from "next/link";
import LoginForm from "./component/LoginForm";

export default function Login() {

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
                    <h2 className="text-2xl font-bold text-center mb-6">Login Up</h2>

                    <LoginForm></LoginForm>

                    <p className="text-center text-gray-500 mt-4">Or Login Up with</p>

                    {/* Social Icons */}
                    <div className="flex justify-center space-x-6 mt-3">
                        <FaFacebook className="text-2xl text-gray-600 cursor-pointer hover:text-blue-600" />
                        <FaLinkedin className="text-2xl text-gray-600 cursor-pointer hover:text-blue-700" />
                        <FaGoogle className="text-2xl text-gray-600 cursor-pointer hover:text-red-500" />
                    </div>

                    <p className="text-center mt-5 text-gray-600">
                        Already have an account?{" "}
                        <Link href="/login" className="text-red-500 font-semibold">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

