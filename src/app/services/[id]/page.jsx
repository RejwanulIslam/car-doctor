import dbConnect from '@/lib/dbConnect'
import { ObjectId } from 'mongodb'
import React from 'react'

export default async function ServicesDelels({params}) {
    const id=await params
    const data=await dbConnect("test_services").findOne({_id:new ObjectId(id)})
  return (
    <div>{JSON.stringify(data)}</div>
  )
}
