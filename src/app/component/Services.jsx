import dbConnect from '@/lib/dbConnect'
import { FaLongArrowAltRight } from "react-icons/fa";
import Image from 'next/image'
import React from 'react'
import Link from 'next/link';

export default async function Services() {
    // const res=await fetch('/services.json')
    const data = await dbConnect("test_services").find({}).toArray()

    return (
        <div className='grid grid-cols-3 gap-x-0 gap-y-5 place-items-center'>
            {
                data?.map(item => {
                    return <div key={item?._id} className="max-w-sm border rounded-lg p-4 shadow-md">
                        <Image
                            src={item?.img}
                            alt="Electrical System"
                            width={314} height={208}
                            className="rounded-md object-cover mx-auto"
                        />

                        <h2 className="text-xl font-bold mt-4">Electrical System</h2>

                        <p className="text-lg font-semibold text-red-600 mt-2">
                            Price : $20.00
                        </p>

                        <div className="flex justify-end mt-4">
                            <Link href={`/services/${item?._id}`} className='btn text-3xl'><FaLongArrowAltRight /></Link>
                       
                        </div>
                    </div>

                })
            }
        </div>
    )
}
