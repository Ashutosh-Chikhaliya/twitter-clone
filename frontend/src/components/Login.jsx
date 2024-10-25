import React, { useState } from 'react'
import { FaXTwitter } from "react-icons/fa6";


const Login = () => {
    const [isCreateAccount, setIsCreateAccount] = useState(false);

    const signInSignUpHandler = () => {
        setIsCreateAccount(!isCreateAccount);
    }
    return (
        <>
            <div className='flex w-screen h-screen  items-center'>

                <div className='flex justify-center items-center w-1/2'>
                    <FaXTwitter size={"350px"} />
                </div>

                <div className='flex flex-col w-1/2 p-20'>
                    <div className='flex h-20 text-7xl font-bold'>
                        <h2>Happening now</h2>
                    </div>

                    <div className=' flex flex-col mt-10 gap-3'>
                        <div className='flex flex-col gap-7'>
                            <div className='text-3xl font-bold'>{isCreateAccount ? "Join Today." : "Log In."}</div>
                            <div>
                                <form>
                                    <div className='flex flex-col w-1/2 gap-2 border-b-[1px] border-[#2f3336] pb-5 text-black'>
                                        {
                                            isCreateAccount && (
                                                <>
                                                    <input
                                                        type="text"
                                                        placeholder='name'
                                                        className='rounded-full px-3 py-2 text-center  outline-none'
                                                    />

                                                    <input
                                                        type="text"
                                                        placeholder='Username'
                                                        className='rounded-full px-3 py-2 text-center  outline-none'
                                                    />
                                                </>
                                            )
                                        }

                                        <input
                                            type="text"
                                            placeholder='Email'
                                            className='rounded-full px-3 py-2 text-center  outline-none'
                                        />

                                        <input
                                            type="text"
                                            placeholder='Password'
                                            className='rounded-full px-3 py-2 text-center  outline-none'
                                        />
                                    </div>
                                    <div className='w-1/2 flex flex-col gap-2'>
                                        <button
                                            className=' w-full bg-[#1a8cd8] rounded-full px-3 py-2 mt-5 text-center font-bold'
                                        >
                                            {isCreateAccount ? "Register" : "Sign in"}
                                        </button>

                                        <div className='text-xs text-[#71767b]'>By signing up, you agree to the <span className='text-[#1a8cd8]'>Terms of Service</span> and <span className='text-[#1a8cd8]'>Privacy Policy</span>, including <span className='text-[#1a8cd8]'>Cookie Use</span>.</div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className='flex flex-col'>
                            <div className='text-xl font-bold text-[#71767b]'> {isCreateAccount ? "Already have an account ?" : "Not have an account ?"}</div>
                            <div>
                                <button
                                    className='w-1/2 border-[1px] border-[#2f3336] text-[#1a8cd8] rounded-full px-3 py-2 mt-2 text-center font-bold'
                                    onClick={signInSignUpHandler}
                                >
                                    {isCreateAccount ? "Sign In" : "Create Account"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login
