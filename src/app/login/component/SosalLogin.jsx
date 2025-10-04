"use client"
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import {FaGoogle, FaGithub } from "react-icons/fa";

export default function SosalLogin() {
    const seation =useSession()
    const router =useRouter()
    const handleSosalLogin= (providerName)=>{
         signIn(providerName)
}
useEffect(()=>{
    if(seation?.status=="authenticated"){
      router.push('/')  
    }
},[seation?.status])
    return (

        <div className="flex justify-center space-x-6 mt-3">
            <FaGithub onClick={()=>handleSosalLogin("github")} className="text-2xl text-gray-600 cursor-pointer hover:text-blue-700" />
            <FaGoogle onClick={()=>handleSosalLogin("google")} className="text-2xl text-gray-600 cursor-pointer hover:text-red-500" />
        </div>

    )
}
