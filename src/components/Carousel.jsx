import React, { useEffect, useState } from 'react';
import { project } from './AllProjects';
import { ChevronLeft, ChevronRight } from 'react-feather';

const Carousel = () => {
    const [activeImage, setActiveImage] = useState(0);

    const clickNext = () => {
        setActiveImage(activeImage === project.length - 1 ? 0 : activeImage + 1);
    };

    const clickPrev = () => {
        setActiveImage(activeImage === 0 ? project.length - 1 : activeImage - 1);
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
        <div className='h-[520px] md:h-[650px] lg:h-[750px] shadow-lg bg-gradient-to-r from-emerald-400 to-cyan-400 max-w-[1600px] w-full mx-auto flex flex-col justify-center relative'>
            {project.map((elem, idx) => (
                <div key={idx} className={`${idx === activeImage ? "transition-all duration-500" : "hidden"}`}>
                    <div className='flex' style={{ backgroundColor: `${elem.bg}` }}>
                        <div className='w-2/3'>
                            <div className='font-fatface-reg font-bold text-[20px] md:text-[30px] lg:text-[60px] ml-6 lg:ml-28'>{elem.title}</div>
                            <div className='mt-2 ml-6 lg:ml-28 text-[10px]'>
                                {elem.tags.map((tag, index) => (
                                    <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag.trim()}</span>
                                ))}
                            </div>
                            <div className='text-[12px] md:text-[15px] xl:text-[22px] font-fell-english-reg mt-10 mr-4 ml-6 lg:ml-28 '>{elem.desc}</div>
                        </div>
                        <div className='w-1/3 mr-2'><img src={elem.src} className=' flex items-center justify-center h-[200px] md:h-[650px] lg:h-[350px] rounded-xl ' alt={elem.title} /></div>
                    </div>
                </div>
            ))}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-4">
                <div className="w-1/5 flex justify-start ml-2 md:ml-3 lg:ml-4">
                    <div onClick={clickPrev}><ChevronLeft className='text-white h-15 rounded-xl hover:bg-indigo-500 cursor-pointer' /></div>
                </div>
                <div className="w-3/5 flex justify-center text-[10px] lg:text-[20px] h-[20px] lg:h-[30px]">
                    {project[activeImage] && (
                        <a href={project[activeImage].srcCode} className='hover:translate-all duration-500 hover:text-[#7209b7] w-[80px] lg:w-[120px] rounded-xl text-white flex items-center justify-center  cursor-pointer'>Source Code</a>
                    )}
                </div>
                <div className="w-1/5 flex justify-end mr-2 md:mr-3 lg:mr-4">
                    <div onClick={clickNext}><ChevronRight className='text-white h-15 rounded-xl hover:bg-indigo-500 cursor-pointer' /></div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
