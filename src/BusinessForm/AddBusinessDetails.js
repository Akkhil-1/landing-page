import React, { useState } from "react"
import businessImage from "./business.jpg"
import axios from 'axios'

const AddBusinessDetails = () => {
  const [formData , setFormData] = useState({
    businessName : '',
    address : '',
    state : '',
    city : '',
    pincode : '',
    landmark : '',
    bussinessType : '',
    openingTime : '',
    closingTime : '',
    offDays: '',
    contactEmail : '',
    contactPhone : '',
    businessLogo : '',
    businessImages : ''
  })
  const handleSubmit = async (e)=>{
    e.preventDefault()
    try {
      const respo = await axios.post('http://localhost:3001/business/addbusiness' , formData)
      console.log(respo)
      alert("Business Added successfully");
    } catch (error) {
      console.log('Error is ' + error);
    }
  }
  const handleChange = (e)=>{
    const { name, value } = e.target;
    setFormData(() => ({
      ...formData,
      [name]: value,
    }))
  }
  return (
    <div className=" max-h-screen flex items-center justify-center overflow-hidden bg-[#0F0C17] ">
      <div className="flex flex-col md:flex-row w-full max-w-8xl bg-white shadow-2xl">
        {/* Left side with image */}
        <div className="relative flex items-center justify-center w-full md:w-1/2 ">
          <img
            src={businessImage}
            alt="Business"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Right side with form */}
        <div className="flex flex-col justify-center px-2 md:p-8 w-full md:w-1/2 bg-gradient-to-b from-[#4A1B73] via-[#591857] to-[#0F0C17]  text-white">
          <span className="mb-0 text-3xl font-bold">Add Business Details</span>
          <span className="font-light text-gray-400 mb-6">
            Welcome! Please enter your business details
          </span>
          <form onSubmit={handleSubmit}>
            <div className="py-0">
              <label className="mb-0 text-md flex items-center">
                Business Name <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                name="businessName"
                id="businessName"
                value={formData.businessName}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                placeholder="Enter your business name"
                required
              />
            </div>
            {/* Address */}
            <div className="py-1">
              <label className="mb-1 text-md flex items-center">
                Address <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                name="address"
                id="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                placeholder="Enter your address"
                required
              />
            </div>
            {/* State, City, Pincode */}
            <div className="flex space-x-2 py-1">
              <div className="w-1/3">
                <label className="mb-1 text-md flex items-center">
                  State <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  name="state"
                  id="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                  placeholder="Enter your state"
                  required
                />
              </div>
              <div className="w-1/3">
                <label className="mb-1 text-md flex items-center">
                  City <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                  placeholder="Enter your city"
                  required
                />
              </div>
              <div className="w-1/3">
                <label className="mb-1 text-md flex items-center">
                  Pincode <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  name="pincode"
                  id="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                  placeholder="Enter your pincode"
                  required
                />
              </div>
            </div>
            {/* Landmark */}
            <div className="py-1">
              <label className="mb-1 text-md flex items-center">
                Landmark <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                name="landmark"
                id="landmark"
                value={formData.landmark}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                placeholder="Enter a nearby landmark"
                required
              />
            </div>
            {/* Business Type */}
            <div className="py-1">
              <label className="mb-1 text-md flex items-center">
                Business Type <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                name="bussinessType"
                id="bussinessType"
                value={formData.bussinessType}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                placeholder="Enter your business type"
                required
              />
            </div>
            {/* Opening Time, Closing Time, Off Days */}
            <div className="flex space-x-2 py-1">
              <div className="w-1/3">
                <label className="mb-1 text-md flex items-center">
                  Opening Time <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="time"
                  name="openingTime"
                  id="openingTime"
                  value={formData.openingTime}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                  required
                />
              </div>
              <div className="w-1/3">
                <label className="mb-1 text-md flex items-center">
                  Closing Time <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="time"
                  name="closingTime"
                  id="closingTime"
                  value={formData.closingTime}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                  required
                />
              </div>
              <div className="w-1/3">
                <label className="mb-1 text-md flex items-center">
                  Off Days <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  name="offDays"
                  id="offDays"
                  value={formData.offDays}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                  placeholder="Enter off days"
                  required
                />
              </div>
            </div>
            {/* Contact Email, Contact Phone */}
            <div className="flex space-x-2 py-1">
              <div className="w-1/2">
                <label className="mb-1 text-md flex items-center">
                  Contact Email <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="email"
                  name="contactEmail"
                  id="contactEmail"
                  value={formData.contactEmail}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                  placeholder="Enter your contact email"
                  required
                />
              </div>
              <div className="w-1/2">
                <label className="mb-1 text-md flex items-center">
                  Contact Phone <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  name="contactPhone"
                  id="contactPhone"
                  value={formData.contactPhone}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                  placeholder="Enter your contact phone"
                  required
                />
              </div>
            </div>
            {/* Business Logo, Business Images */}
            <div className="flex space-x-2 py-1">
              <div className="w-1/2">
                <label className="mb-1 text-md flex items-center">
                  Business Logo <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="file"
                  name="businessLogo"
                  id="businessLogo"
                  value={formData.businessLogo}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                  accept="image/*"
                />
              </div>
              <div className="w-1/2">
                <label className="mb-1 text-md flex items-center">
                  Business Images <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="file"
                  name="businessImages"
                  id="businessImages"
                  value={formData.businessImages}
                  onChange={handleChange}
                  multiple
                  className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                  accept="image/*"
                />
              </div>
            </div>
            {/* Submit Button */}
            <button className="w-full bg-white text-black p-2 rounded-lg mt-4 transform transition-transform duration-200 hover:scale-105">
              Add Business
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBusinessDetails;
