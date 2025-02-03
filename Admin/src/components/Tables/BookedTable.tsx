// "use client"

// import React, { useEffect, useState } from "react"
// import axios from "axios"
// import SwitcherThree from "../Switchers/SwitcherThree"

// interface Booking {
//     _id: string
//     user_id: string
//     product_id: {
//         _id: string
//         product_name: string
//         product_price: string
//         product_description: string
//         category: string
//         product_img: string[]
//         product_address: string
//         time_slots: any[]
//     }
//     booked_slots: string[]
//     email: string
//     status: string
//     booking_date: string
//     __v: number
//     remainingTime: null
// }

// function BookedTable() {
//     const [bookings, setBookings] = useState<Booking[]>([])

//     useEffect(() => {
//         fetch("http://localhost:8000/booked-slots")
//             .then((response) => response.json())
//             .then((data) => {
//                 setBookings(data.bookings)
//             })
//             .catch((error) => console.error("Error fetching data:", error))
//     }, [])

//     const groupByProductAndUser = (bookings: Booking[]) => {
//         return bookings.reduce((acc: any, booking: Booking) => {
//             if (!acc[booking.product_id.product_name]) {
//                 acc[booking.product_id.product_name] = {}
//             }
//             if (!acc[booking.product_id.product_name][booking.email]) {
//                 acc[booking.product_id.product_name][booking.email] = []
//             }
//             acc[booking.product_id.product_name][booking.email].push(booking)
//             return acc
//         }, {})
//     }

//     const groupedBookings = groupByProductAndUser(bookings)

//     const toggleApproval = async (bookingId: string) => {
//         const bookingToUpdate = bookings.find((b) => b._id === bookingId)
//         if (!bookingToUpdate) return

//         const updatedStatus = bookingToUpdate.status === "Approved" ? "Pending" : "Approved"

//         const payload = {
//             bookingId: bookingId,
//             status: updatedStatus,
//             email: bookingToUpdate.email,
//         }

//         try {
//             const response = await axios.post("http://localhost:8000/approve-booking", payload)
//             console.log("Booking status updated:", response.data)

//             setBookings((prevBookings) =>
//                 prevBookings.map((b) => (b._id === bookingId ? { ...b, status: updatedStatus } : b)),
//             )
//         } catch (error) {
//             console.error("Error updating booking status:", error)
//         }
//     }

//     return (
//         <div className="overflow-auto shadow-lg rounded-lg bg-white p-5 mt-5">
//             <table className="w-full table-auto border-collapse border border-gray-200">
//                 <thead>
//                     <tr className="bg-gray-100 text-gray-700 text-left">
//                         <th className="px-4 text-center py-2 border-gray-200">Box Cricket Register</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {Object.entries(groupedBookings).map(([productName, userBookings], index) => (
//                         <tr key={productName}>
//                             <td colSpan={2} className={`${index % 2 ? "bg-gray-100" : "bg-slate-100"} py-10`}>
//                                 <div className="font-bold text-lg py-2 text-center">{`Box Cricket: ${productName}`}</div>
//                                 <table className="w-full bg-gray-100 table-auto border-collapse border border-gray-200 mt-3">
//                                     <tbody>
//                                         {Object.entries(userBookings as Record<string, Booking[]>).map(([userEmail, bookings]) => (
//                                             <tr key={userEmail}>
//                                                 <td colSpan={4}>
//                                                     <div className="font-bold text-md py-1">{`User: ${userEmail}`}</div>
//                                                     <table className="w-full table-auto border-collapse border border-gray-200 mt-3">
//                                                         <thead>
//                                                             <tr className="bg-gray-100 text-gray-700 text-left">
//                                                                 <th className="px-4 py-2 border-gray-200">Product Name</th>
//                                                                 <th className="px-4 py-2 border-gray-200">Booked Slots</th>
//                                                                 <th className="px-4 py-2 border-gray-200">Booking Date</th>
//                                                                 <th className="px-4 py-2 border-gray-200">Approval Status</th>
//                                                                 <th className="px-4 py-2 border-gray-200">Check To Approval</th>
//                                                             </tr>
//                                                         </thead>
//                                                         <tbody>
//                                                             {bookings.map((booking: Booking) => (
//                                                                 <tr key={booking._id}>
//                                                                     <td className="px-4 py-2 border border-gray-200">
//                                                                         {booking.product_id.product_name}
//                                                                     </td>
//                                                                     <td className="px-4 py-2 border border-gray-200">
//                                                                         {booking.booked_slots.join(", ")}
//                                                                         <br />
//                                                                         ID: {booking._id}
//                                                                     </td>
//                                                                     <td className="px-4 py-2 border border-gray-200">
//                                                                         {new Date(booking.booking_date).toLocaleDateString()}
//                                                                     </td>
//                                                                     <td className="px-4 py-2 border border-gray-200">{booking.status}</td>
//                                                                     <td className="px-4 py-2 border border-gray-200">
//                                                                         <input type="checkbox" checked={booking.status === "Approved"} onChange={() => toggleApproval(booking._id)} />
//                                                                     </td>
//                                                                 </tr>
//                                                             ))}
//                                                         </tbody>
//                                                     </table>
//                                                 </td>
//                                             </tr>
//                                         ))}
//                                     </tbody>
//                                 </table>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     )
// }

// export default BookedTable

import React, { useEffect, useState } from "react";
import axios from "axios";

interface Booking {
    _id: string;
    user_id: string;
    product_id: {
        _id: string;
        product_name: string;
        product_price: string;
        product_description: string;
        category: string;
        product_img: string[];
        product_address: string;
        time_slots: string[];
    };
    booked_slots: string[];
    email: string;
    status: string;
    booking_date: string;
    __v: number;
    remainingTime: null;
}

function BookedTable() {

    const [bookings, setBookings] = useState<Booking[]>([]);
    const [timeSlots, setTimeSlots] = useState<string[]>([]);
    const [allBookings, setAllBookings] = useState<any[]>([]); // Make sure it's an array

    useEffect(() => {
        fetch("http://localhost:8000/booked-slots")
            .then((response) => response.json())
            .then((data) => {
                if (data && Array.isArray(data.bookings)) {
                    setBookings(data.bookings);
                    console.log('data.bookings :>> ', data.bookings);

                    // Extract all booked slots correctly
                    let allBookedSlots: any[] = [];
                    data.bookings.forEach((item: any) => {
                        if (item.booked_slots && Array.isArray(item.booked_slots)) {
                            allBookedSlots = [...allBookedSlots, ...item.booked_slots];
                        }
                    });

                    setAllBookings(allBookedSlots);
                    generateTimeSlots(); // Call after setting the slots
                } else {
                    console.error("Invalid bookings data:", data.bookings);
                }
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    const generateTimeSlots = () => {
        const slots: string[] = [];
        const startTime = 7; // 7 AM
        for (let i = 0; i < 24; i++) {
            const hour = (startTime + i) % 24;
            const slot = `${hour % 12 || 12}:00 ${hour < 12 ? "AM" : "PM"}`;
            slots.push(slot);
        }
        setTimeSlots(slots);
    };

    const toggleApproval = async (bookingId: string) => {
        const bookingToUpdate = bookings.find((b) => b._id === bookingId)
        if (!bookingToUpdate) return

        const updatedStatus = bookingToUpdate.status === "Approved" ? "Pending" : "Approved"

        const payload = {
            bookingId: bookingId,
            status: updatedStatus,
            email: bookingToUpdate.email,
        }

        try {
            const response = await axios.post("http://localhost:8000/approve-booking", payload)
            console.log("Booking status updated:", response.data)

            setBookings((prevBookings) =>
                prevBookings.map((b) => (b._id === bookingId ? { ...b, status: updatedStatus } : b)),
            )
        } catch (error) {
            console.error("Error updating booking status:", error)
        }
    }

    const groupByProductAndUser = (bookings: Booking[]) => {
        return bookings.reduce((acc: any, booking: Booking) => {
            if (!acc[booking.product_id.product_name]) {
                acc[booking.product_id.product_name] = {};
            }
            if (!acc[booking.product_id.product_name][booking.email]) {
                acc[booking.product_id.product_name][booking.email] = [];
            }
            acc[booking.product_id.product_name][booking.email].push(booking);
            return acc;
        }, {});
    };

    const groupedBookings = groupByProductAndUser(bookings);
    console.log('groupedBookings :>> ', groupedBookings);
    return (
        <div className="overflow-auto shadow-lg rounded-lg bg-white p-5 mt-5">
            <table className="w-full table-auto border-collapse border border-gray-200">
                <thead>
                    <tr className="bg-gray-100 text-gray-700 text-left">
                        <th className="px-4 text-center py-2 border-gray-200">Box Cricket Provider Panel</th>
                    </tr>
                    <div className="flex-col my-2 mx-2">
                        <div className="flex items-center my-2">
                            <button className="bg-green-200 text-black rounded-lg w-7 h-7"></button>
                            <span className="ps-2 font-bold">Your Booked Slot</span>
                        </div>
                        <div className="flex items-center my-2">
                            <button className="bg-red-100 text-black rounded-lg w-7 h-7"></button>
                            <span className="ps-2 font-bold">Slot Reserved by Another User</span>
                        </div>
                        <div className="flex items-center my-2">
                            <button className="bg-slate-200 text-black rounded-lg w-7 h-7"></button>
                            <span className="ps-2 font-bold">Available Slot</span>
                        </div>
                    </div>
                </thead>

                <tbody>
                    {Object.entries(groupedBookings).reverse().map(([productName, userBookings], index) => (
                        <tr key={productName}>
                            <td colSpan={2} className={`${index % 2 ? "bg-slate-100" : "bg-gray-100"} py-10`}>
                                <div className="font-bold text-lg py-2 text-center">{`Box Cricket: ${productName}`}</div>
                                <table className="w-full bg-gray-100 table-auto border-collapse border border-gray-200 mt-3">
                                    <tbody>
                                        {Object.entries(userBookings as Record<string, Booking[]>).map(([userEmail, bookings]) => (
                                            <tr key={userEmail}>
                                                <td colSpan={4}>
                                                    <div className="font-bold text-md py-1">{`User: ${userEmail}`}</div>
                                                    <table className="w-full table-auto border-collapse border border-gray-200 mt-3">
                                                        <thead>
                                                            <tr className="bg-gray-100 text-gray-700 text-left">
                                                                <th className="px-4 py-2 border-gray-200">Product Name</th>
                                                                <th className="px-4 py-2 border-gray-200">Time Slots</th>
                                                                <th className="px-4 py-2 border-gray-200">Booking Date</th>
                                                                <th className="px-4 py-2 border-gray-200">Approval Status</th>
                                                                <th className="px-4 py-2 border-gray-200">Approval Status</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {bookings.map((booking: Booking) => (
                                                                <tr key={booking._id}>
                                                                    <td className="px-4 py-2 border border-gray-200">
                                                                        {booking.product_id.product_name}
                                                                    </td>
                                                                    <td className="px-4 py-2 border border-gray-200">
                                                                        <div>ID: {booking._id}</div>
                                                                        <br />
                                                                        <div className="flex flex-wrap gap-2">
                                                                            {timeSlots.map((slot) => (
                                                                                <div
                                                                                    key={slot}
                                                                                    className={`px-2 py-1 rounded ${booking.booked_slots.includes(slot)
                                                                                        ? "bg-green-200 text-black"
                                                                                        : allBookings.includes(slot)  // Directly check for membership
                                                                                            ? "bg-red-100 text-black"
                                                                                            : "bg-slate-200 text-gray-700"
                                                                                        }`}
                                                                                >
                                                                                    {slot}
                                                                                </div>
                                                                            ))}

                                                                        </div>
                                                                    </td>
                                                                    <td className="px-4 py-2 border border-gray-200">
                                                                        {new Date(booking.booking_date).toLocaleDateString()}
                                                                    </td>
                                                                    <td className="px-4 py-2 border border-gray-200">{booking.status}</td>
                                                                    <td className="px-4 py-2 border border-gray-200">
                                                                        <input type="checkbox" checked={booking.status === "Approved"} onChange={() => toggleApproval(booking._id)} />
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default BookedTable;
