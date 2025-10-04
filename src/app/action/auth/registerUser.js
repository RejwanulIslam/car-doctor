"use server"

import dbConnect from "@/lib/dbConnect";
import bcrypt from "bcrypt";
export const registerUser = async (paylod) => {

    const { email, password } = paylod
    if (!email || !password) {
        return null
    }
    const userCollection = dbConnect("test_user")
    const user = await userCollection.findOne({ email: paylod?.email })
    if (!user) {
        const hassPassword=await bcrypt.hash(password,10)
        paylod.password=hassPassword
        const result = await userCollection.insertOne(paylod)
            const {acknowledged,insertedId}=result
        return {acknowledged,insertedId:insertedId.toString()}
    }
    return null
}