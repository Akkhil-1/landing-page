// import React, { useState } from 'react';
// import purple from './purple.png';
// import axios from 'axios';
// import Toast, { ToastContainerWrapper } from "./Helper/ToastNotify"; // Import Toast components

// function BookingForm() {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         age: '',
//         mobile_number: '',
//         guest: '',
//         bookingDate: '',
//         bookingTime: '',
//         status: '',
//         customerNotes: ''
//     });

//     const handleBooking = async (event) => {
//         event.preventDefault();
//         try {
//             const response = await axios.post(
//                 "http://localhost:3001/booking/business/addbooking",
//                 formData
//             );
//             console.log(response);
//             Toast.success("Booking Done"); 
//         } catch (error) {
//             console.error("Error during booking:", error);
//             Toast.error("There was an error processing your booking. Please try again later."); 
//         }
//     };

//     const handleChange = (event) => {
//         const { name, value } = event.target;
//         setFormData({
//             ...formData,
//             [name]: value
//         });
//     };

//     return (
//         <div className="flex justify-center items-center min-h-screen bg-[#f9f2fa]">
//             <ToastContainerWrapper /> {/* Add Toast container */}
//             <div className="bg-white p-6 rounded-lg border-4 border-white max-w-3xl w-full mt-3 overflow-hidden shadow-lg">
//                 <div className="mb-5">
//                     <img
//                         src={purple}
//                         alt="Booking"
//                         className="w-full h-64 rounded-t-lg object-cover"
//                     />
//                     <h2 className="text-center text-2xl mb-3">Booking Form</h2>
//                     <p className="text-center mb-2">Experience something new every moment</p>
//                     <hr className="mb-4" />
//                 </div>

//                 <form onSubmit={handleBooking} className="flex flex-col gap-4">
//                     <div className="flex gap-4">
//                         <input
//                             type="text"
//                             name="name"
//                             placeholder="First Name"
//                             value={formData.name}
//                             onChange={handleChange}
//                             id='name'
//                             className="p-2 bg-white text-gray-700 border border-gray-400 rounded-md flex-1"
//                         />
                        
//                         <input
//                             type="email"
//                             name="email"
//                             placeholder="Email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             id='email'
//                             className="p-2 bg-white text-gray-700 border border-gray-400 rounded-md flex-2"
//                         />
//                         <input
//                             type="number"
//                             name="age"
//                             placeholder="Age"
//                             id='age'
//                             value={formData.age}
//                             onChange={handleChange}
//                             className="p-2 bg-white text-gray-700 border border-gray-400 rounded-md flex-1"
//                         />
//                     </div>

//                     <div className="flex gap-4">
//                         <input
//                             type="tel"
//                             name="mobile_number"
//                             placeholder="Mobile Number"
//                             value={formData.mobile_number}
//                             onChange={handleChange}
//                             id='mobile_number'
//                             className="p-2 bg-white text-gray-700 border border-gray-400 rounded-md flex-1"
//                         />
//                         <input
//                             type="number"
//                             name="guest"
//                             placeholder="Guest"
//                             value={formData.guest}
//                             id='guest'
//                             onChange={handleChange}
//                             className="p-2 bg-white text-gray-700 border border-gray-400 rounded-md flex-1"
//                         />
//                     </div>

//                     <div className="flex gap-4">
//                         <input
//                             type="date"
//                             name="bookingDate"
//                             value={formData.bookingDate}
//                             onChange={handleChange}
//                             id='bookingDate'
//                             className="p-2 bg-white text-gray-700 border border-gray-400 rounded-md flex-1"
//                         />
//                         <input
//                             type="time"
//                             name="bookingTime"
//                             value={formData.bookingTime}
//                             onChange={handleChange}
//                             id='bookingTime'
//                             className="p-2 bg-white text-gray-700 border border-gray-400 rounded-md flex-1"
//                         />
//                     </div>

//                     <div className="flex">
//                         <select
//                             name="status"
//                             value={formData.status}
//                             onChange={handleChange}
//                             id='status'
//                             className="p-2 bg-white text-gray-700 border border-gray-400 rounded-md w-full"
//                         >
//                             <option value="">Status</option>
//                             <option value="confirmed">Confirmed</option>
//                             <option value="cancelled">Cancelled</option>
//                             <option value="completed">Completed</option>
//                         </select>
//                     </div>

//                     <div>
//                         <input
//                             type="text"
//                             name="customerNotes"
//                             placeholder="Description"
//                             value={formData.customerNotes}
//                             onChange={handleChange}
//                             id='customerNotes'
//                             className="p-2 bg-white text-gray-700 border border-gray-400 rounded-md w-full h-24 resize-vertical"
//                         />
//                     </div>

//                     <button type="submit" className="w-52 p-2 bg-[#591B5F] text-white mt-7 mx-auto text-lg font-semibold rounded-lg hover:bg-[#411246]">
//                         Book Now
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default BookingForm;


// ============================================

import React, { useState } from 'react';
import purple from './purple.png';
import axios from "axios";
function BookingForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        age: '',
        email: '',
        mobile: '',
        guest: '',
        date: '',
        time: '',
        status: '',
        description: ''
    });

    const handleBooking = (event) => {
        event.preventDefault();

        const { firstName, age, email, mobile, guest, date, time, status } = formData;
        if (!firstName || !age || !email || !mobile || !guest || !date || !time || !status) {
            alert("Please fill in all required fields.");
            return;
        }

        alert("Booking Done");
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-[#f9f2fa]">
            <div className="bg-white p-6 rounded-lg border-4 border-white max-w-3xl w-full mt-3 overflow-hidden shadow-lg">
                <div className="mb-5">
                    <img
                        src={purple}
                        alt="Booking"
                        className="w-full h-64 rounded-t-lg object-cover"
                    />
                    <h2 className="text-center text-2xl mb-3">Booking Form</h2>
                    <p className="text-center mb-2">Experience something new every moment</p>
                    <hr className="mb-4" />
                </div>

                <form onSubmit={handleBooking} className="flex flex-col gap-4">
                    <div className="flex gap-4">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="p-2 bg-white text-gray-700 border border-gray-400 rounded-md flex-1"
                        />
                        <input
                            type="number"
                            name="age"
                            placeholder="Age"
                            value={formData.age}
                            onChange={handleChange}
                            className="p-2 bg-white text-gray-700 border border-gray-400 rounded-md flex-1"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="p-2 bg-white text-gray-700 border border-gray-400 rounded-md flex-2"
                        />
                    </div>

                    <div className="flex gap-4">
                        <input
                            type="tel"
                            name="mobile"
                            placeholder="Mobile Number"
                            value={formData.mobile}
                            onChange={handleChange}
                            className="p-2 bg-white text-gray-700 border border-gray-400 rounded-md flex-1"
                        />
                        <input
                            type="number"
                            name="guest"
                            placeholder="Guest"
                            value={formData.guest}
                            onChange={handleChange}
                            className="p-2 bg-white text-gray-700 border border-gray-400 rounded-md flex-1"
                        />
                    </div>

                    <div className="flex gap-4">
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="p-2 bg-white text-gray-700 border border-gray-400 rounded-md flex-1"
                        />
                        <input
                            type="time"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            className="p-2 bg-white text-gray-700 border border-gray-400 rounded-md flex-1"
                        />
                    </div>

                    <div className="flex">
                        <select
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                            className="p-2 bg-white text-gray-700 border border-gray-400 rounded-md w-full"
                        >
                            <option value="">Status</option>
                            <option value="confirmed">Confirmed</option>
                            <option value="cancelled">Cancelled</option>
                            <option value="completed">Completed</option>
                        </select>
                    </div>

                    <div>
                        <input
                            type="text"
                            name="description"
                            placeholder="Description"
                            value={formData.description}
                            onChange={handleChange}
                            className="p-2 bg-white text-gray-700 border border-gray-400 rounded-md w-full h-24 resize-vertical"
                        />
                    </div>

                    <button type="submit" className="w-52 p-2 bg-[#591B5F] text-white mt-7 mx-auto text-lg font-semibold rounded-lg hover:bg-[#411246]">
                        Book Now
                    </button>
                </form>
            </div>
        </div>
    );
}

export default BookingForm;
