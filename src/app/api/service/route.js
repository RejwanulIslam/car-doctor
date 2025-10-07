import { authOptions } from "@/lib/authOptions"
import dbConnect from "@/lib/dbConnect"
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server"

export const POST=async(req)=>{
    const body= await req.json()
    console.log(body)
    const result=await dbConnect("test_booking").insertOne(body)
return NextResponse.json(result)
}

export const GET=async(req)=>{
    const seation= await getServerSession(authOptions)
    if(seation){
        console.log(seation)
        const email=seation?.user?.email
        const result=await dbConnect("test_booking").find({email}).toArray()
       return NextResponse.json(result)
    }
}