import React from 'react'

const Connect = () => {
    return (
        <div className='text-[#202030]'>
            <div className='  shadow-lg bg-gradient-to-tl from-[#E8F1F2] via-[#F2AF29] to-[#642CA9] max-w-[1600px] mt-[56px] w-full h-[750px] mx-auto rounded-lg flex-col justify-center' >
                <h1 className='font-fatface-reg text-[100px] ml-6'>Stay in touch.</h1>
                <a href="mailto::jaykad982@gmail.com" className='font-game-over bg-white text-[25px] ml-6 mt-10 h-12 bg-opacity-10 rounded-md hover:text-white hover:shadow-xl hover:bg-[#642CA9] hover:underline hover:transition-colors duration-200'>Drop me a line.</a>

                <div class="grid grid-rows-3 gap-10 mt-20 "></div>
                <div>
                    <a href='https://www.linkedin.com/in/jay-kadam-27720416a/' className='text-[40px] font-game-over font-bold ml-28 mt-2 hover:bg-white hover:transition-colors duration-500 hover:cursor-pointer '>LinkedIn</a>
                </div>
                <div>
                    <a href='https://github.com/Jay-A-Kad' className='text-[40px] font-game-over font-bold ml-28 mt-5 hover:bg-white hover:transition-colors duration-500 hover:cursor-pointer'>GitHub</a>
                </div>
                <div>
                    <a className='text-[40px] font-game-over font-bold ml-28 mt-5 hover:bg-white hover:transition-colors duration-500 hover:cursor-pointer'>Instagram</a>
                </div>
                <div className='mt-20'>
                    <footer className='text-center mt-28'>Designed by Kelpie @2024 Portfolio</footer>
                </div>




            </div>
        </div>
    )
}

export default Connect