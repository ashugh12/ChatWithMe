import React from 'react'
import GenderCheckbox from './GenderCheckbox'

const Signup = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto text-white'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className="text-3xl font-semibold text-center text-gray-300">
                    SignUp <span className='text-blue-500'>ChatApp
                    </span>
                </h1>
                <form>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text text-white'>Full Name</span>
                        </label>
                        <input type="text" placeholder="Entre Full Name" className="w-full input input-bordered h-10" />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text text-white'>Username</span>
                        </label>
                        <input type="text" placeholder="Entre username" className="w-full input input-bordered h-10" />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text text-white'>Password</span>
                        </label>
                        <input type="password" placeholder="Enter password" className="w-full input input-bordered h-10" />
                    </div>
                    <GenderCheckbox />
                    <a href="" className='text-sm 
            text-white hover:underline hover:text-blue-600 inline-block'>Already have an Account?</a>

                    <div>
                        <button className='btn
                text-white
                btn-outline
                btn-block btn-sm mt-2'>
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup
