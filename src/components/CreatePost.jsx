import React from 'react'
import Avatar from 'react-avatar'
import { IoMdImage, IoMdCalendar } from "react-icons/io";
import { MdGifBox } from "react-icons/md";
import { FaPoll, FaSmile } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const CreatePost = () => {
    return (
        <>
            {/* header */}
            <div className='flex justify-between items-center border-b-[1px] border-[#2f3336] sticky top-0 z-10 bg-black'>
                <div className=' flex w-1/2 justify-center hover:bg-[#181818] py-[15px] cursor-pointer'>
                    <h1>For you</h1>
                </div>
                <div className='flex w-1/2 justify-center hover:bg-[#181818] py-[15px] cursor-pointer'>
                    <h1>Following</h1>
                </div>
            </div>

            {/* create post */}
            <div className='p-4 flex gap-2 flex-col relative border-b-[1px] border-[#2f3336]'>
                <div className='flex w-full'>
                    <Avatar src="https://pbs.twimg.com/profile_images/1840317141528252416/4-iDvwwy_400x400.jpg" size="40" round={true} />
                    <div className='flex flex-col w-full'>
                        <textarea className='bg-transparent outline-none mx-2 text-xl mt-1 ' rows={1} placeholder='What is happening !?'></textarea>
                    </div>
                </div>

                <div className='flex justify-between mt-3 items-center'>
                    <div className='ml-12 text-[#1d9bf0] flex gap-5 items-center mt-2'>
                        <div><IoMdImage size={"22px"} /></div>
                        <div><MdGifBox size={"22px"} /></div>
                        <div><FaPoll size={"18px"} /></div>
                        <div><FaSmile size={"18px"} /></div>
                        <div><IoMdCalendar size={"22px"} /></div>
                        <div><FaLocationDot size={"18px"} /></div>

                    </div>
                    <div>
                        <button className='bg-[#1d9bf0] px-4 py-1 rounded-full'>Post</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreatePost
