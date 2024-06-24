import React from 'react'
import AnimatedGif from './AnimatedGif'
import { ReactTyped } from "react-typed";

const Home = () => {
    return (
        <div className='text-[#202030]' >
            <div className='mt-[45px] md:mt-[36px] lg:mt-[56px] h-[550px] md:h-[950px] lg:h-[750px] max-w-[1600px] w-full shadow-lg bg-gradient-to-tr from-[#E8F1F2] to-[#642CA9] mx-auto rounded-lg flex-col justify-center ' >
                <div class="flex mb-4">
                    <div class="w-2/3">
                        <h2 className='mt-5 text[50px] md:text-[40px] xl:text-[60px] text-[#202030] font-barlow  text-opacity-60 mx-5 ' >hi there, I'm </h2>
                        <h1 className='text[40px] md:text-[40px] xl:text-[60px] text-[#202030] font-barlow text-opacity-60 mx-5 '>Jay Kadam</h1>
                        {/* <ReactTyped strings={['Full-Stack Dev', 'Game Developer', 'Graphics Engineer']} typeSpeed={40} backSpeed={50} loop className='text-[40px] md:text-[50px] xl:text-[80px] font-game-over mx-5 '><input type="text" /></ReactTyped> */}
                        <ReactTyped strings={['Full-stack Dev', 'Game Developer', 'Graphics Engineer']} typeSpeed={40} backSpeed={60} loop className='font-game-over text[20px] md:text-[40px] xl:text-[60px] text-[#202030] mx-5'></ReactTyped>


                        {/* bio */}
                        <div class="flex mb-4">
                            <div class="h-8 md:h-10 xl:h-12 w-1/6 bg-gray-500 font-game-over">
                                <h1 className='text-[80px] md:text-[120px] xl:text-[200px] mt-20 lg:mt-5 text-end'>&#123;</h1>
                            </div>
                            <div class="h-8 md:h-10 xl:h-12 w-4/6 bg-gray-400 ">
                                <h5 className='text-[12px] md:text-[20px] xl:text-[22px] text-center font-anaheim mt-20 text-[#202030] text-opacity-75'>Hi, I'm Jay Kadam—a game developer originally from Mumbai, now residing in Clemson, SC. My interests lie in computer graphics and the exploration of innovative visual techniques to engage and connect with people. I devote most of my time to crafting captivating game scenarios.</h5>
                            </div>
                            <div class="h-8 md:h-10 xl:h-12 w-1/6 bg-gray-500 font-game-over">
                                <h1 className='text-[80px] md:text-[120px] xl:text-[200px] mt-20 lg:mt-5 text-start'>&#125;</h1>
                            </div>
                        </div>
                    </div>
                    <div class="h-35 w-40 md:h-45 md:w-66 xl:h-50 xl:w-96 mx-10 my-20 shadow-2xl ">
                        <AnimatedGif src={'https://github.com/Jay-A-Kad/MyPortfolio/blob/master/public/bit-profile.gif?raw=true'} alt={"profile"} />
                    </div>
                </div>


            </div>

        </div >
    )
}

export default Home