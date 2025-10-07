import { authOptions } from "@/lib/authOptions"
import dbConnect from "@/lib/dbConnect"
import { ObjectId } from "mongodb"
import { getServerSession } from "next-auth"
import { revalidatePath } from "next/cache"
import { NextResponse } from "next/server"

export const GET = async (req, { params }) => {
    const p = await params
    const data = await dbConnect("test_services").findOne({ _id: new ObjectId(p.id) })
    return NextResponse.json(data)
}

export const DELETE = async (req, { params }) => {
    const session = await getServerSession(authOptions)
    const p = await params?.id
    // validation
    const currentBooking = await dbConnect("test_booking").findOne({ _id: new ObjectId(p) })
    console.log('session',session,currentBooking)
    const isOwnerOk = session?.user?.email == currentBooking?.email
    if (isOwnerOk) {
        const result =await dbConnect("test_booking").deleteOne({ _id: new ObjectId(p) })
        revalidatePath('/my_bookings')
        return NextResponse.json(result)
    }else{
        return NextResponse.json({success:false,message:"Forbidden Action"},{status:401})
    }


}