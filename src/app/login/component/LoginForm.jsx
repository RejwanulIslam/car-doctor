"use client"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import React from 'react'

export default function LoginForm() {
    const router=useRouter()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        try {
         const response=   await signIn('credentials', { email, password,callbackUrl:'/',redirect:false})
          if(response.ok){
          router.push("/")
          e.target.reset()
          }else{
            alert('authonication fail')

          }
        } catch (error) {
           console.log(error)
           alert('error')
        }
        console.log({ email, password })

        //    .then(data=>console.log(data))
        //     // console.log(name,email,password)

    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="space-y-4">


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
        </div>
    )
}
