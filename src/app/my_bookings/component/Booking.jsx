import { Trash2 } from 'lucide-react'
import React from 'react'
import HnadleDeleteButton from './HnadleDeleteButton'
import Link from 'next/link'

export default function Booking({ data }) {
 
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Header Section */}
      <div className="mb-10">
        <div className="relative h-56 rounded-xl overflow-hidden">
          <img
            src="/assets/images/checkout/checkout.png"
            alt="Cart Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-white text-4xl font-semibold">Cart Details</h1>
          </div>
        </div>
        <p className="mt-2 text-sm text-gray-500">
          Home &gt; <span className="text-orange-500">Product Details</span>
        </p>
      </div>

      {/* Cart List */}
      <div className="space-y-5">
        {data?.map((item) => (
          <div
            key={item._id}
            className="flex items-center justify-between bg-white shadow-md rounded-xl p-4"
          >
            <div className="flex items-center gap-4">
          <HnadleDeleteButton id={item._id}></HnadleDeleteButton>

              <img
                src={item.service_img}
                alt={item.service_name}
                className="w-24 h-24 rounded-lg object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold">{item.service_name}</h3>
                <p className="text-sm text-gray-500">
                  Client: {item.name}
                </p>
                <p className="text-sm text-gray-500">
                  Address: {item.present_address}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-10">
              <p className="font-semibold">${item.due_amount}</p>
              <p className="text-sm text-gray-500">
                {item.date || "No Date"}
              </p>
              <Link href={`https://next-js-car-doctor-eight.vercel.app/my_bookings/${item?._id}`} className=" btn bg-orange-500 text-white px-3 py-1 rounded-lg text-sm font-medium">
                Update
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Actions */}
      <div className="flex items-center justify-between mt-10 text-gray-600">
        <button className="flex items-center gap-2 hover:text-orange-500">
          ← Continue Shopping
        </button>
        <button
          //  onClick={handleClear}
          className="flex items-center gap-2 hover:text-red-600"
        >
          <Trash2 className="w-4 h-4" /> Clear Shopping Cart
        </button>
      </div>
    </div>
  )
}
