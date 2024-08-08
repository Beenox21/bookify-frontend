import React from 'react'
import Button from './button'

function Navbar() {
    return (
        <div className='flex items-center justify-between px-16 py-3 shadow-md    border-b-2 border-slate-200'>
            <div className='flex space-x-1'>
                <img src='https://res.cloudinary.com/dgdybttbc/image/upload/v1723060465/Screenshot_2024-08-08_011532_y4pe2e.png' className='h-7 w-auto'></img>
                <h1 className='text-2xl font-bold'>Bookify</h1>
            </div>
            <div className='flex items-center '>
                
                <div className='flex w-[22vw] justify-around mr-4'>
                    <h1 className='hover:font-semibold cursor-pointer transition-all w-1/4 text-center'>Home</h1>
                    <h1 className='hover:font-semibold cursor-pointer transition-all w-1/4 text-center'>Services</h1>
                    <h1 className='hover:font-semibold cursor-pointer transition-all w-1/4 text-center'>Pricing</h1>
                    <h1 className='hover:font-semibold cursor-pointer transition-all w-12 text-center'>Blog</h1>
                </div>

                <div className='flex space-x-5'>

                    <Button name='Log in' bgColor='bg-blue-500' hover='hover:bg-blue-400' textColor='text-white' otherStyles='px-7 py-3'></Button>
                    <Button name='Sign Up' bgColor='bg-slate-200' hover='hover:bg-slate-300' textColor='black' otherStyles='px-7 py-3'></Button>
                </div>
            </div>
        </div>
    )
}

export default Navbar