import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { IoMdHome, IoMdNotifications, IoMdSearch, IoMdPerson, IoMdBookmark, IoIosMore, IoMdPower } from "react-icons/io";
import Avatar from 'react-avatar'
import { Link } from 'react-router-dom';



const LeftSideBar = () => {
    return (
        <>
            <div className='w-[25%] flex flex-col  justify-between relative'>

                <div className='flex flex-col justify-between w-[25%] h-screen fixed p-2 border-x-[1px] border-[#2f3336]'>
                    <div className='flex flex-col mt-1 ml-24'>
                        <div className='px-[9px]'>
                            <FaXTwitter size={"28px"} />
                        </div>

                        <div className='my-3'>
                            <div className='flex'>
                                <div className='inline-flex items-center  gap-4 hover:bg-[#181818] rounded-full pr-4 pl-2 py-3 cursor-pointer'>
                                    <IoMdHome size={"28px"} />
                                    <Link to="/" className='text-xl'>Home</Link>

                                </div>
                            </div>

                            <div className='flex'>
                                <div className='inline-flex items-center gap-4 hover:bg-[#181818] rounded-full pr-4 pl-2 py-3 cursor-pointer'>
                                    <IoMdSearch size={"28px"} />
                                    <Link to="/explore" className='text-xl'>Explore</Link>
                                </div>

                            </div>
                            <div className='flex'>
                                <div className='inline-flex items-center gap-4 hover:bg-[#181818] rounded-full pr-4 pl-2 py-3 cursor-pointer'>
                                    <IoMdNotifications size={"28px"} />
                                    <Link to="/notification" className='text-xl'>Notification</Link>
                                </div>
                            </div>

                            <div className='flex'>
                                <div className='inline-flex items-center gap-4 hover:bg-[#181818] rounded-full pr-4 pl-2 py-3 cursor-pointer'>
                                    <IoMdPerson size={"28px"} />
                                    <Link to="/profile" className='text-xl'>Profile</Link>
                                </div>
                            </div>

                            <div className='flex'>
                                <div className='inline-flex items-center gap-4 hover:bg-[#181818] rounded-full pr-4 pl-2 py-3 cursor-pointer'>
                                    <IoMdBookmark size={"28px"} />
                                    <Link to="/bookmark" className='text-xl'>Bookmark</Link>
                                </div>
                            </div>

                            <div className='flex'>
                                <div className='inline-flex items-center gap-4 hover:bg-[#181818] rounded-full pr-4 pl-2 py-3 cursor-pointer'>
                                    <IoIosMore size={"28px"} />
                                    <h1 className='text-xl'>More</h1>
                                </div>
                            </div>

                            <div className='flex'>
                                <div className='inline-flex items-center gap-4 hover:bg-[#181818] rounded-full pr-4 pl-2 py-3 cursor-pointer'>
                                    <IoMdPower size={"28px"} />
                                    <h1 className='text-xl'>Logout</h1>
                                </div>
                            </div>

                        </div>
                        <div className='w-[95%] bg-blue-500 text-center rounded-full py-3 text-xl font-bold cursor-pointer'>Post</div>
                    </div>

                    <div className='flex my-5 items-center ml-24'>
                        <div>
                            <Avatar src="https://pbs.twimg.com/profile_images/1321163587679784960/0ZxKlEKB_400x400.jpg" size="40" round={true} />
                        </div>

                        <div className='flex justify-between items-center w-full mx-1'>
                            <div className='flex flex-col ml-2 text-[15px]'>
                                <div className='font-semibold'>NASA</div>
                                <div className='text-[#696d72]'>@NASA</div>
                            </div>

                            <div className='bg-white font-bold px-4 py-2 text-sm rounded-full text-black'>
                                <button>Follow</button>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </>
    )
}

export default LeftSideBar
