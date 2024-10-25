import React from 'react'
import Avatar from 'react-avatar'
import { FaComment, FaHeart, FaPoll, FaShareAlt, FaBookmark } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { FaRetweet } from "react-icons/fa6";



const tweet = () => {
    return (
        <>
            <div className=' px-4 pt-4 pb-3 flex gap-2 border-b-[1px] border-[#2f3336]'>
                <Avatar src="https://pbs.twimg.com/profile_images/1833509376528945157/5AeMNn9f_400x400.jpg" size="40" round={true} />

                <div className='flex flex-col w-full '>

                    <div className='flex items-center justify-between'>
                        <div className='flex gap-2 items-center  text-[15px]'>
                            <h1 className='font-bold'>Narendra Modi</h1>
                            <h1 className='text-[#71767b]'>@narendramodi</h1>
                            <h1 className='text-[#71767b]'> | 2h</h1>
                        </div>

                        <div className='text-[#71767b]'>
                            <BsThreeDots />
                        </div>
                    </div>

                    <div className='text-[15px]'>With fellow BRICS leaders at the Summit in Kazan, Russia. This Summit is special because we welcomed the new BRICS members. This forum has immense potential to make our planet better and more sustainable. </div>

                    <div className='mt-2 border-[1px] border-[#2f3336] rounded-xl'>
                        <img src="https://pbs.twimg.com/media/GalGKn4XcAAB1WN?format=jpg&name=medium" className='rounded-xl' alt="" />
                    </div>

                    {/* <div className='flex gap-2 text-base  text-[#71767b] mt-2'>
                        <div>7:21 PM</div>
                        <div>| Oct 23</div>
                        <div>| <span className='text-white'>7.3M</span> views</div>
                    </div> */}

                    <div className='flex justify-between items-center text-[#71767b] mt-3 text-[13px]'>
                        <div className='flex gap-14'>
                            <div className='flex items-center gap-1 hover:text-[#1c94e5]'>
                                <div>
                                    <FaComment size={"17px"} />
                                </div>
                                <h5>2.2K</h5>
                            </div>

                            <div className='flex items-center gap-1 hover:text-[#01ae74]'>
                                <div>
                                    <FaRetweet size={"17px"} />
                                </div>
                                <h5>2.2K</h5>
                            </div>

                            <div className='flex items-center gap-1 hover:text-[#f91880]'>
                                <div>
                                    <FaHeart size={"17px"} />
                                </div>
                                <h5>2.2K</h5>
                            </div>

                            <div className='flex items-center gap-1 hover:text-[#1c94e5]'>
                                <div>
                                    <FaPoll size={"17px"} />
                                </div>
                                <h5>2.2K</h5>
                            </div>
                        </div>

                        <div className='flex gap-5'>
                            <div className='hover:text-[#1c94e5]'><FaBookmark size={"15px"} /></div>
                            <div className='hover:text-[#1c94e5]'> <FaShareAlt size={"15px"} /></div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default tweet
