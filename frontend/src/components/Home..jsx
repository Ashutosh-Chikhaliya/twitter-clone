import React from 'react'
import LeftSideBar from './LeftSideBar'
import Feed from './Feed'
import RightSideBar from "./RightSideBar"
import { Outlet } from 'react-router-dom'

const Home = () => {
    return (

        <div className='flex justify-between w-full gap-0'>
            <LeftSideBar />
            <Outlet />
            <RightSideBar />
        </div>
    )
}

export default Home