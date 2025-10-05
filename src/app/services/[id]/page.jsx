import dbConnect from '@/lib/dbConnect'
import { ObjectId } from 'mongodb'
import Image from 'next/image'
import React from 'react'

export default async function ServicesDelels({ params }) {
  const id = await params.id
  const res = await fetch(`http://localhost:3000/api/service/${id}`)
  const data= await res.json()
  console.log(data)

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 md:px-10">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden grid md:grid-cols-2">
        {/* Image Section */}
        <div className="relative w-full h-96 md:h-auto">
          <Image
            src={data?.img}
            alt={data.title}
            fill
            className="object-cover"
          />
        </div>


        {/* Details Section */}
        <div className="p-8 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {data.title}
            </h1>
            <p className="text-gray-500 text-sm mb-4">
              ID: {data?._id}
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              {data.description}
            </p>


            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-3">Facilities:</h2>
              <ul className="space-y-3">
                {data.facility.map((item, i) => (
                  <li key={i} className="border-l-4 border-indigo-500 pl-3">
                    <h3 className="font-medium text-gray-900">{item.name}</h3>
                    <p className="text-gray-600 text-sm">{item.details}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>


          <div className="flex items-center justify-between mt-6">
            <div className="text-2xl font-bold text-indigo-600">
              ${data.price}
            </div>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg font-medium transition-all">
              CheckOut
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
