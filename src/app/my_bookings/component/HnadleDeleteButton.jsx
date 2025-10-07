"use client"

import { useRouter } from "next/navigation"

export default function HnadleDeleteButton({ id }) {
    const router=useRouter()
    const handleDlete = async(id) => {
        const res=await fetch(`http://localhost:3000/api/service/${id}`,{
            method:"DELETE"
        })
        const result=await res.json()
        console.log(result)
        console.log(id)
        router.refresh()
    }
    return (
        <>
            <button
                onClick={() => handleDlete(id)}
                className="text-white bg-gray-500 h-10 w-10 rounded-full hover:text-red-600"
            >
                ✕
            </button>
        </>
    )
}
