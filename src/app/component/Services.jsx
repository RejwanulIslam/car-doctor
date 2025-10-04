import dbConnect from '@/lib/dbConnect'
import Image from 'next/image'
import React from 'react'

export default async function Services() {
    // const res=await fetch('/services.json')
    const data=await dbConnect("test_services").find({}).toArray()

  return (
    <div className='grid grid-cols-3'>
        {
            data?.map(item=>{
                return <div key={item._id} >
                    <Image src={item?.img} width={314}height={208} alt='nofond'/>
                </div>
            })
        }
    </div>
  )
}
