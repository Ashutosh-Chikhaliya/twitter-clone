import React from 'react'
import { IoMdSearch } from "react-icons/io";
import Avatar from 'react-avatar'


const RightSideBar = () => {
    return (
        <div className=' w-[34%] relative'>
            <div className=' h-screen border-l-[1px] border-[#2f3336] fixed w-[34%]'>
                <div className='flex flex-col px-4 mt-2 ml-5'>

                    <div className='flex items-center bg-[#202327] w-[75%] py-2 rounded-full overflow-hidden'>
                        <div className='ml-3 text-[#71767b]'>
                            <IoMdSearch size={"22px"} />
                        </div>

                        <input type="text" placeholder='Search' className='outline-none w-full px-3 bg-transparent text-white' />
                    </div>

                    <div className='mt-5 border-[1px] border-[#2f3336] w-[75%] rounded-xl px-3 py-2'>

                        <h3 className='text-xl font-semibold'>Who to follow</h3>

                        {/* profiles */}
                        <div className='flex my-5 items-center'>
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

                        <div className='mt-5 text-[#1d9bf0]'>Show more</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightSideBar
