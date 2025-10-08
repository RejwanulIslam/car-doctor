"use client"

import { useSession } from "next-auth/react"

export default function CheckOutForm({ data }) {
  const { data: seation } = useSession()

  const handleCheckOut = async (e) => {
    e.preventDefault()
    const form = e.target

    const name = form.name.value
    const email = form.email.value
    const date = form.date.value
    const due_amount = form.due_amount.value
    const phone_number = form.phone_number.value
    const present_address = form.present_address.value
    const service_id = data?._id
    const service_name = data?.title
    const service_img = data?.img
    const paylod = { name, email, phone_number, service_name, service_img, date, due_amount, present_address, service_id }
    const res = await fetch("https://next-js-car-doctor-eight.vercel.app/api/service", {
      method: "POST",
      body: JSON.stringify(paylod)
    })
    const postedResponse=await res.json()
    console.log(postedResponse)
    form.reset()
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-6">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="grid md:grid-cols-2 gap-6 p-6 md:p-8">
          {/* Left Side - Illustration */}
          <div className="hidden md:flex flex-col items-center justify-center bg-indigo-50 rounded-xl p-4">
            <h2 className="text-2xl font-bold text-indigo-700 mb-4">Checkout</h2>
            <p className="text-gray-700 text-center">Fill out the form to complete your order quickly.</p>
            <img src="/assets/images/checkoutform.jpg" alt="checkout illustration" className="mt-6 w-full h-48 object-contain" />
          </div>


          {/* Right Side - Form */}
          <form onSubmit={handleCheckOut} className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Book Service: {data?.title}</h2>


            <div className="grid grid-cols-1 gap-4">
              <input type="text" defaultValue={seation?.user?.name} readOnly name='name' placeholder="Full Name" className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
              <input type="email" defaultValue={seation?.user?.email} readOnly name='email' placeholder="Email" className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
              <input type="number" defaultValue={data?.price} readOnly name='due_amount' placeholder="Due Amount" className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
              <input type="date" name='date' placeholder="Date" className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
              <input type="tel" name='phone_number' placeholder="Phone Number" className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
              <textarea name='present_address' placeholder="Present Address" rows={3} className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"></textarea>
            </div>


            <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}
