import React from 'react'
import UpdateBookingForm from '../component/UpdateBookingForm'
import { headers } from 'next/headers'

export default async function UpdateBooking({ params }) {
  const p = await params
  const res = await fetch(`https://next-js-car-doctor-eight.vercel.app/api/my_booking/${p.id}`, {
    headers: new Headers(await headers())
  })
  const data = await res.json()
  console.log(data)
  return (
    <div><UpdateBookingForm data={data}></UpdateBookingForm></div>
  )
}
