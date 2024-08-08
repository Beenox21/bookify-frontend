import React from 'react'
import Navbar from '@/components/navbar'
import Button from '@/components/button'

function HomePage() {
    return (
        <div className='mb-20'>
            <nav>
                <Navbar></Navbar>
            </nav>


            <div className='mx-auto max-w-5xl my-10 relative'>
                <img src='https://images.unsplash.com/photo-1543244916-b3da1ba6252c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='w-[100%] h-[65vh] object-cover rounded-xl'></img>

                <div className='absolute top-[50%] left-[5%] right-[5%] bottom-0'>
                    <h1 className=' text-white text-5xl font-extrabold'>Convert YouTube videos, pdfs into transcriptions, summaries and audio files.</h1>
                    <div className='flex space-x-6 mt-4'>
                        <Button name='Try it out' bgColor='bg-blue-500' hover='hover:bg-blue-400' textColor='text-white' otherStyles='px-5 py-3'></Button>

                        <Button name='Learn more' bgColor='bg-slate-100' hover='hover:bg-slate-300' textColor='text-black' otherStyles='px-5 py-3'></Button>
                    </div>
                </div>
            </div>



            <div className="max-w-5xl mx-auto">
                <h1 className='text-4xl  font-poppins font-bold'>Convert any content into audio</h1>

                <p className="text-base mt-4 mb-4">
                    With Bookify, you can effortlessly transform any video or PDF into high-quality audio files. Whether you're looking to create a podcast version of a popular YouTube tutorial, a narrated audiobook from a comprehensive PDF report, or even a portable lecture from online course materials, we've got you covered.
                </p>
            </div>

            <div className='max-w-5xl mt-10 mx-auto grid grid-cols-3 gap-10 justify-between'>
                <div className='flex flex-col'>
                    <img src='https://res.cloudinary.com/dgdybttbc/image/upload/v1723100742/Depth_8_Frame_0_3_yzcj91.jpg' className=' '></img>
                    <h1 className='mt-3 font-semibold'>
                     Transcribe YouTube Audio   
                    </h1>
                    <p className='text-sm'>
                        Turn your favourite youtube videos into summaries and audio files.
                    </p>
                </div>
                <div className='flex flex-col'>
                    <img src='https://res.cloudinary.com/dgdybttbc/image/upload/v1723100742/Depth_8_Frame_0_vafsil.jpg' className=' '></img>
                    <h1 className='mt-3 font-semibold'>
                     Transcribe YouTube Audio   
                    </h1>
                    <p className='text-sm'>
                        Turn your favourite youtube videos into summaries and audio files.
                    </p>
                </div>
                <div className='flex flex-col'>
                    <img src='https://res.cloudinary.com/dgdybttbc/image/upload/v1723100742/Depth_8_Frame_0_1_tdl8k2.jpg' className=' '></img>
                    <h1 className='mt-3 font-semibold'>
                     Transcribe YouTube Audio   
                    </h1>
                    <p className='text-sm'>
                        Turn your favourite youtube videos into summaries and audio files.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HomePage