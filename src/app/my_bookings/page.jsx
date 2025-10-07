import { headers } from "next/headers"
import Booking from "./component/Booking"
const fetchMyBooking = async () => {
    const res = await fetch('http://localhost:3000/api/service',{
    headers:headers()

    })
     
    const data = await res.json()
    return data
   }
export default async function MyBookingsPage() {
const data=await  fetchMyBooking()

    return (
        <div>
            <Booking data={data}></Booking>

        </div>

    )
}
