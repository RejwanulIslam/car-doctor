"use server"
import bcrypt from "bcrypt";
import dbConnect from "@/lib/dbConnect"

export const loginUser = async (paylod) => {
    const { email, password } = paylod

    const user = dbConnect("test_user").findOne({ email: email })


    if (!user) return null
    const isPasswordOk = bcrypt.compare(user.password, password)
    if (!isPasswordOk) return null

    return user
}