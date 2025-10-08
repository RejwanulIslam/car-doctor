import { headers } from "next/headers"
import Booking from "./component/Booking"
const fetchMyBooking = async () => {
    const res = await fetch('https://next-js-car-doctor-eight.vercel.app/api/service', {
        headers:new Headers(await headers())

    })

    const data = await res.json()
    return data
}
export default async function MyBookingsPage() {
    const data = await fetchMyBooking()

    return (
        <div>
            <Booking data={data}></Booking>

        </div>

    )
}
