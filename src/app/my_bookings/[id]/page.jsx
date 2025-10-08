import React from 'react'
import UpdateBookingForm from '../component/UpdateBookingForm'

export default async function UpdateBooking({params}) {
  const p=await params
  const res=await fetch(`http://localhost:3000/api/my_booking/${p.id}`)
  const data= await res.json()
  console.log(data)
  return (
    <div><UpdateBookingForm data={data}></UpdateBookingForm></div>
  )
}
