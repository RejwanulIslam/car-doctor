import { authOptions } from "@/lib/authOptions"
import dbConnect from "@/lib/dbConnect"
import { ObjectId } from "mongodb"
import next from "next"
import { getServerSession } from "next-auth"
import { revalidatePath } from "next/cache"
import { NextResponse } from "next/server"

export const GET = async (req, { params }) => {
    const seation = await getServerSession(authOptions)
    const p = await params
    const bookingCollection = dbConnect("test_booking")
    const query = {
        _id: new ObjectId(p.id)
    }
    const singleBooking = await bookingCollection.findOne(query)

    // validation
    const email = seation?.user?.email
    const isOwnerOk = email == singleBooking?.email
    if (isOwnerOk) {
        return NextResponse.json(singleBooking)
    } else {
        return NextResponse.json({ message: "forbidden get action" }, { status: 403 })

    }
}

export const PATCH = async (req, { params }) => {
    const seation = await getServerSession(authOptions)
    const p = await params
    const bookingCollection = dbConnect("test_booking")
    const query = {
        _id: new ObjectId(p.id)
    }

    // validation
    const currentBookingdata = await bookingCollection.findOne(query)
    const email = seation?.user?.email
    const isOwnerOk = email == currentBookingdata?.email
    if (isOwnerOk) {
        const body = await req.json()
        const filter = {
            $set: { ...body }
        }
        const option = {
            upsert: true
        }

        const updateResponse = await bookingCollection.updateOne(query, filter, option)
        revalidatePath('/my_bookings')
        return NextResponse.json(updateResponse)
    } else {
        return NextResponse.json({ message: "forbidden update action" }, { status: 403 })

    }


}