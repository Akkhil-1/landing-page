import { Link } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'
import { MdEmail } from 'react-icons/md'
import { GrSecure } from 'react-icons/gr'
import { FiUser, FiPhone } from 'react-icons/fi'
import { SlCalender } from 'react-icons/sl'
import { LiaAddressCardSolid } from 'react-icons/lia'

function SignUpPageAdmin() {
    return (
        <div>
            <div className='py-2 sm:px-8 px-2 shadow flex justify-between items-center bg-gray-800'>
                <Link to="/" className='flex items-center gap-2 text-slate-200'>
                    <BiArrowBack />
                    <span>Back to home</span>
                </Link>
            </div>
            <div className='flex flex-col gap-10 sm:justify-center items-center sm:py-0 py-8 bg-gradient-to-b from-gray-900 to-purple-900' style={{ height: 'calc(140vh - 50px)' }}>
                <h1 className='text-center w-full text-slate-200 md:text-3xl text-xl font-semibold'>Sign UP (Admin)</h1>
                <div className='lg:w-1/3 md:w-2/5 sm:w-2/3 w-4/5'>
                    <form action="" className='flex flex-col gap-6'>
                        <div className='flex items-center border bg-white w-full'>
                            <span className='px-2 h-full'><FiUser className='text-black' /></span>
                            <input type="text" name="name" placeholder='Enter Your Name' className='w-full h-full px-2 py-2 border-l focus:outline-none' id="name" required />
                        </div>
                        <div className='flex items-center border bg-white w-full'>
                            <span className='px-2 h-full'><MdEmail className='text-black'  /></span>
                            <input type="email" name="email" placeholder='Enter Your Email' className='w-full h-full px-2 py-2 border-l focus:outline-none' id="email" required />
                        </div>
                        <div className='flex items-center border bg-white w-full'>
                            <span className='px-2 h-full'><FiPhone className='text-black'  /></span>
                            <input type="number" name="number" placeholder='Enter Your Mobile Number' className='w-full h-full px-2 py-2 border-l focus:outline-none' id="phone" required />
                        </div>
                        <div className='flex items-center border bg-white w-full'>
                            <span className='px-2 h-full'><GrSecure className='text-black'  /></span>
                            <input type="password" name="password" placeholder='Enter New Password' className='w-full h-full px-2 py-2 border-l focus:outline-none' id="password" required />
                        </div>
                        <div className='flex items-center border bg-white w-full'>
                            <span className='px-2 h-full'><GrSecure className='text-black'  /></span>
                            <input type="password" name="confirm-password" placeholder='Confirm Your Password' className='w-full h-full px-2 py-2 border-l focus:outline-none' id="confirm-password" required />
                        </div>
                        <div className='flex items-center border bg-white w-full'>
                            <span className='px-2 h-full'><SlCalender className='text-black'  /></span>
                            <input type="date" name="date" className='w-full h-full px-2 py-2 border-l focus:outline-none' id="d-o-b" required />
                        </div>
                        <div className='flex items-center border bg-white w-full'>
                            <label className='px-2 h-full text-black' htmlFor="gender">Gender:</label>
                            <select name="gender" id="gender" className='w-full h-full px-2 py-2 border-l focus:outline-none' required>
                                <option value="" disabled selected>Select your gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className='flex items-center border bg-white w-full'>
                            <span className='px-2 h-full'><LiaAddressCardSolid className='text-black'  /></span>
                            <textarea
                                name="address"
                                placeholder='Address'
                                className='w-full h-full px-2 py-2 border-l focus:outline-none'
                                id="address"
                                required
                                rows="2"
                            ></textarea>
                        </div>
                        <div className='bg-slate-200 text-black py-2 shadow rounded-full'>
                            <button className='h-full w-full cursor-pointer'>Submit</button>
                        </div>
                        <div className='text-slate-200 font-semibold text-center'>
                            Already Have Account? <Link className='text-blue-200 underline' to="/signin">Sign In here</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUpPageAdmin;
