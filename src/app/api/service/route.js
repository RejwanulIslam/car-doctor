import dbConnect from "@/lib/dbConnect"
import { NextResponse } from "next/server"

export const POST=async(req)=>{
    const body= await req.json()
    console.log(body)
    const result=await dbConnect("test_booking").insertOne(body)
return NextResponse.json(result)
}