import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import Avatar from 'react-avatar'
import { FaLocationDot } from "react-icons/fa6";
import { FaBirthdayCake } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import Tweet from './Tweet';
import { Link } from 'react-router-dom';


const Profile = () => {
    return (
        <>
            <div className='flex flex-col w-[41%] h-screen'>
                <div className='flex gap-6 items-center mx-2 py-1'>
                    <Link to="/" className='p-2.5 rounded-full hover:bg-[#181919]'><FaArrowLeft /></Link>
                    <div className='pl-1'>
                        <div className='text-xl font-semibold'>Ashu</div>
                        <div className='text-xs text-[#71767b]'>121post</div>
                    </div>
                </div>

                <div>
                    <div>
                        <div className='flex flex-col relative'>
                            <div className='h-[200px]'>
                                <img src="https://pbs.twimg.com/profile_banners/1244507241631191042/1729788090/1500x500" alt="" />
                            </div>
                            <div className='flex flex-col p-4'>
                                <div className='flex justify-between items-start relative'>
                                    <div className='relative mt-[-90px] border-[4px] border-black rounded-full'>
                                        <Avatar src="https://pbs.twimg.com/profile_images/1651941047717732352/Wnzm5FbO_400x400.jpg" size="133" round={true} />
                                    </div>
                                    <div>
                                        <button className='border-[1px] border-[#536471] rounded-full px-4 py-1.5 font-bold text-md hover:bg-[#181919]'>Edit profile</button>
                                    </div>
                                </div>

                                <div className='flex flex-col mt-3'>
                                    <h2 className='text-xl font-bold '>Ashutosh</h2>
                                    <h3 className='text-[#71767b]'>@ashutosh</h3>
                                </div>

                                <div className='mt-3 text-md'>chai pio, biscuit khao</div>

                                <div className='flex items-center gap-4 text-[#71767b] text-[15px] mt-2'>
                                    <div className='flex items-center gap-2'>
                                        <FaLocationDot />
                                        <div> Morbi, India</div>
                                    </div>

                                    <div className='flex items-center gap-2'>
                                        <FaBirthdayCake />
                                        <div> Born October 12, 2003</div>
                                    </div>

                                    <div className='flex items-center gap-2'>
                                        <SlCalender />
                                        <div>Joined March 2020</div>
                                    </div>
                                </div>

                                <div className='flex mt-3 gap-4'>
                                    <div className='text-[#71767b] text-sm'> <span className='text-white font-bold'>343 </span>Following</div>
                                    <div className='text-[#71767b] text-sm'><span className='text-white font-bold'>203 </span>Followers</div>
                                </div>
                            </div>
                        </div>

                        <div className='flex w-full items-center border-b-[1px] border-[#536471] text-[#71767b] font-semibold'>
                            <div className='hover:bg-[#181818] py-3.5 text-center w-1/6'>Posts</div>
                            <div className='hover:bg-[#181818] py-3.5 text-center w-1/6'>Replies</div>
                            <div className='hover:bg-[#181818] py-3.5 text-center w-1/6' >Highlights</div>
                            <div className='hover:bg-[#181818] py-3.5 text-center w-1/6'>Articles</div>
                            <div className='hover:bg-[#181818] py-3.5 text-center w-1/6'>Media</div>
                            <div className='hover:bg-[#181818] py-3.5 text-center w-1/6'>Likes</div>
                        </div>

                        <div>
                            <Tweet />
                            <Tweet />
                            <Tweet />
                            <Tweet />
                            <Tweet />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
