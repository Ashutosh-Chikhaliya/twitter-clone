import React from 'react'
import CreatePost from './CreatePost.jsx'
import Tweet from "../components/Tweet.jsx"


const Feed = () => {
    return (
        <div className='h-full w-[41%]  flex flex-col '>

            <CreatePost />

            <div>
                <Tweet />
                <Tweet />
                <Tweet />
                <Tweet />
                <Tweet />
                <Tweet />
            </div>
        </div>
    )
}

export default Feed