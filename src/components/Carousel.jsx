"user client";
import React, { useEffect, useState } from 'react'
import { project } from './AllProjects'
import { Image } from 'react-feather'
import Description from './Description'
import { ChevronLeft, ChevronRight } from 'react-feather';



const Carousel = () => {
    const [activeImage, setactiveImage] = useState(0);

    const clickNext = () => {
        activeImage === project.length - 1 ? setactiveImage(0) : setactiveImage(activeImage + 1)
    };

    const clickPrev = () => {
        activeImage === 0 ? setactiveImage(project.length - 1) : setactiveImage(activeImage - 1)
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            clickNext();
        }, 5000);
        return () => {
            clearTimeout(timer);
        };
    }, [activeImage]);

    return (
        // <div className='shadow-lg mt-[56px] w-full  h-[520px] md:h-[650px] lg:h-[750px] mx-auto rounded-lg flex-col ' >
        <div className='h-[520px] md:h-[650px] lg:h-[750px] shadow-lg bg-slate-500 max-w-[1600px]  w-full  mx-auto  flex-col justify-center'>
            {project.map((elems, idx) => (
                <div className={`${idx === activeImage
                    ? "transition-all duration-5000 "
                    : "hidden"
                    }`} key={idx}>
                    <div className='flex ' style={{ backgroundColor: `${elems.bg}` }}>
                        <div className=' w-1/3 '><img src={elems.src} className='h-[520px] md:h-[650px] lg:h-[750px] object-cover rounded-tl rounded-bl '></img></div>

                        <div className='w-2/3 ' >

                            <div className='font-fatface-reg font-bold text-[35px] md:text-[60px] lg:text-[100px] mt-10 text-center'>{elems.title}</div>
                            {/* <div className='text-[8px] md:text-[15px] xl:text-[18px] font-anaheim text-center mt-28'>{elems.tags}</div> */}
                            <div className='text-[10px] md:text-[15px] xl:text-[18px] font-anaheim text-center mt-10 mx-2 lg:mt-28 mlg:mx-28 '>{elems.desc}</div>


                            <div class="flex mb-4 items-center justify-center  ">
                                <div class="w-1/5  flex justify-start mt-12 ml-2 md:mt-15 md:ml-3 lg:mt-20 lg:ml-4 hover:scale-105 hover:cursor-pointer transition duration-500"><div onClick={clickPrev}><ChevronLeft className=' text-white h-15 rounded-xl hover:bg-indigo-500'></ChevronLeft></div></div>

                                <div class="w-3/5  flex justify-center text-[10px] lg:text-[20px] h-[20px] lg:h-[30px]  hover:scale-125 hover:cursor-pointer transition duration-500"><a href={elems.srcCode} className='bg-indigo-500  w-[80px] lg:w-[120px] rounded-xl text-white flex items-center justify-center'>Source Code</a></div>

                                <div class="w-1/5 flex justify-end mt-12 mr-2  md:mt-12 md:mr-3  lg:mt-20 lg:ml-4 hover:scale-105 hover:cursor-pointer transition duration-500 "><div onClick={clickNext}><ChevronRight className=' text-white h-15 rounded-xl  hover:bg-indigo-500'></ChevronRight></div></div>
                            </div>
                        </div>
                    </div>




                </div>

            ))}
            {/* <Description activeImageIndex={activeImage} clickNext={clickNext} clickPrev={clickPrev}></Description> */}

        </div>
        // </div>
    )
}

export default Carousel