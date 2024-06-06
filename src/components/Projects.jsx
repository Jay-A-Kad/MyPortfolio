import React from 'react'
import Carousel from './Carousel'
import Description from './Description'



const Projects = () => {
    return (
        <div className='text-[#202030]'>
            <div className='mt-[16px] md:mt-[36px] lg:mt-[56px] h-[520px] md:h-[650px] lg:h-[750px] shadow-lg bg-black max-w-[1600px]  w-full  mx-auto rounded-2xl flex-col justify-center' >
                <Carousel />
            </div>
        </div>

    )
}

export default Projects