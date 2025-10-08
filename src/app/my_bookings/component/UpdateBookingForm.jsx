"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function UpdateBookingForm({ data }) {
    const { data: seation } = useSession()
    const router=useRouter()
    console.log(data)
    const handleUpdate = async (e) => {
        e.preventDefault()
        const form = e.target
        const date = form.date.value
        const phone_number = form.phone_number.value
        const present_address = form.present_address.value
        const paylod = { phone_number, date, present_address, }
        const res = await fetch(`https://next-js-car-doctor-eight.vercel.app/api/my_booking/${data?._id}`, {
            method: "PATCH",
            body: JSON.stringify(paylod)
        })
        const UpdatedResponse = await res.json()
        router.push('/my_bookings')
        console.log(UpdatedResponse)

    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-6">
            <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="grid md:grid-cols-2 gap-6 p-6 md:p-8">
                    {/* Left Side - Illustration */}
                    <div className="hidden md:flex flex-col items-center justify-center bg-indigo-50 rounded-xl p-4">
                        <h2 className="text-2xl font-bold text-indigo-700 mb-4">Update Booking</h2>
                        <p className="text-gray-700 text-center">Fill out the form to complete your order quickly.</p>
                        <img src="/assets/images/update_booking.jpg" alt="checkout illustration" className="mt-6 w-full h-48 object-contain" />
                    </div>


                    {/* Right Side - Form */}
                    <form onSubmit={handleUpdate} className="space-y-4">
                        <h2 className="text-xl font-semibold text-gray-900">Book Service: {data?.title}</h2>


                        <div className="grid grid-cols-1 gap-4">
                            <input type="text" defaultValue={seation?.user?.name} readOnly name='name' placeholder="Full Name" className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                            <input type="email" defaultValue={seation?.user?.email} readOnly name='email' placeholder="Email" className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                            <input type="number" defaultValue={data?.due_amount} readOnly name='due_amount' placeholder="Due Amount" className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                            <input type="date" defaultValue={data?.date} name='date' placeholder="Date" className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                            <input type="tel" defaultValue={data?.phone_number} name='phone_number' placeholder="Phone Number" className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                            <textarea defaultValue={data?.present_address} name='present_address' placeholder="Present Address" rows={3} className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"></textarea>
                        </div>


                        <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">Update</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

