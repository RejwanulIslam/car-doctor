import React from 'react'
import CheckOutForm from '../component/CheckOutForm'

export default async function page({ params }) {
  const {id} = await params
  const res = await fetch(`http://localhost:3000/api/service/${id}`)
  const data = await res.json()
  console.log(data)
  return (
    <div>
      <CheckOutForm data={data}></CheckOutForm>
    </div>
  )
}
