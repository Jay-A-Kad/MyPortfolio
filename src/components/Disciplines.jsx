import React from 'react'

const Disciplines = () => {
    return (
        <div className='text-[#202030]'>
            <div className='mt-[16px] md:mt-[36px] lg:mt-[56px] h-[520px] md:h-[650px] lg:h-[750px] shadow-lg bg-gradient-to-tr from-[#E8F1F2] to-[#FFFFFF] max-w-[1600px]  w-full  mx-auto rounded-lg flex-col justify-center' >
                <div class="flex mb-4">
                    <div class="h-8 md:h-10 xl:h-12 w-1/3 bg-gray-400 ">
                        <h1 className='text-[20px] md:text-[40px] xl:text-[50px] mt-10 ml-4 lg:mt-10 lg:ml-10 font-fell-english-reg lowercase font-bold '>My Disciplines.</h1>
                        <h3 className='text-[10px] md:text-[15px] xl:text-[20px] font-anaheim mt-6 ml-4'>My interests lies mainly in computer graphics, game developement, visual computing, web developement.
                            But, it is not limited to these Disciplines, I also like spending hours configuring my ./vimrc file
                            and binge watching arch linux config videos... (Btw I use arch)
                        </h3>
                        <h5 className='text-[6px] md:text-[12px] xl:text-[16px] text-center mt-10 text-red-400 font-fell-english-reg underline'>click below disciplines for a detailed view.</h5>
                        <div class="flex flex-col items-center h-20 mt-10 font-fell-english-italic text-[#333333] ">
                            <div className='text-[10px] md:text-[12px] lg:text-[15px] ml-6 h-12 mt-5 lg:ml-10 lg:h-15 l[]underline font-bold rounded text-center hover:text-[#82C0CC] hover:cursor-pointer hover:shadow-xl transition duration-100 '>Web Developent - Frontend, Backend, Deploying and Containrerization</div>
                            <div className='text-[10px] md:text-[12px] lg:text-[15px] ml-6 h-12 mt-5 lg:ml-10 lg:h-15 l[]underline font-bold rounded text-center hover:text-[#489FB5] hover:cursor-pointer hover:shadow-xl transition duration-100'>Software Engineering</div>
                            <div className='text-[10px] md:text-[12px] lg:text-[15px] ml-6 h-12 mt-5 lg:ml-10 lg:h-15 l[]underline font-bold rounded text-center hover:text-[#16697A] hover:cursor-pointer hover:shadow-xl transition duration-100'>Visual Computing</div>
                        </div>
                    </div>
                    <div class=" w-2/3 h-[520px] md:h-[650px] lg:h-[750px] bg-gradient-to-br from-[#EAF2D7] to-[#FFC43D]">
                        <div class="flex mb-4">
                            <div class="flex-1 bg-[#F2545B] border-2 border-red-400 h-[300px] md:h-[400px] lg:h-[500px] rounded shadow">
                                <ul className='text-[8px] md:text-[12px] lg:text-[15px]'>
                                    <li>
                                        <details className='mt-3' open>
                                            <summary className=' text-black text-opacity-100 cursor-pointer font-pt-serif-bold'>Web Developement</summary>
                                            <ul>
                                                <li>
                                                    <details open>
                                                        <summary className='text-black text-opacity-90 cursor-pointer font-pt-serif ml-5'>Frontend</summary>
                                                        <ul className='text-black text-opacity-80 ml-20'>
                                                            <li>HTML5</li>
                                                            <li>CSS3</li>
                                                            <li>Javascript</li>
                                                            <li>React Js</li>
                                                            <li>Redux</li>
                                                            <li>Tailwind CSS</li>
                                                        </ul>
                                                    </details>
                                                    <details open>
                                                        <summary className='text-black text-opacity-90 cursor-pointer ml-5'>Backend</summary>
                                                        <ul className='text-black text-opacity-80 ml-20'>
                                                            <li>Node.js</li>
                                                            <li>Golang</li>
                                                        </ul>
                                                    </details>
                                                    <details open>
                                                        <summary className='text-black text-opacity-90 cursor-pointer ml-5 '>Database</summary>
                                                        <ul className='text-black text-opacity-80 ml-20'>
                                                            <li>PostgreSQL</li>
                                                            <li>MongoDB</li>
                                                            <li>Firebase Database</li>
                                                        </ul>
                                                    </details>
                                                    <details open>
                                                        <summary className='text-black text-opacity-90 cursor-pointer ml-5'>DevOps</summary>
                                                        <ul className='text-black text-opacity-80 ml-20'>
                                                            <li>Git</li>
                                                            <li>Docker</li>
                                                            <li>Kubernetes</li>
                                                            <li>AWS</li>
                                                        </ul>
                                                    </details>
                                                </li>
                                            </ul>
                                        </details>
                                    </li>
                                </ul>
                            </div>
                            <div class="flex-1 bg-[#87BFFF] border-2 border-blue-400 h-[200px] md:h-[300px] lg:h-[400px] rounded shadow-lg">
                                <ul className='text-[8px] md:text-[12px] lg:text-[15px]'>
                                    <li>
                                        <details className='mt-3' open>
                                            <summary className='text-black text-opacity-100 font-pt-serif-bold cursor-pointer'>Game Dev</summary>
                                            <ul className='text-black text-opacity-80 ml-5 mt-1'>
                                                <li>Game Mathematics</li>
                                                <li>Game Physics</li>
                                                <li>Game Engine - Unreal Engine</li>
                                                <li>Programming Language - C/C++ , Python</li>
                                                <li>Computer Graphics</li>
                                                <li>Graphics API - OpenGL, </li>
                                                <li>Game AI</li>
                                            </ul>
                                        </details>
                                    </li>
                                </ul>
                            </div>
                            <div class="flex-1 bg-[#31E981] border-2 border-green-400 h-[100px] md:h-[200px] lg:h-[300px] rounded shadow-2xl">
                                <ul className='text-[8px] md:text-[12px] lg:text-[15px]'>
                                    <li>
                                        <details className='mt-3' open>
                                            <summary className='text-black text-opacity-100 font-pt-serif-bold cursor-pointer'>Visual Computing</summary>
                                            <ul className='text-black text-opacity-80 ml-5 mt-1'>
                                                <li>Frontent</li>
                                                <li>Backend</li>
                                                <li>DevOps</li>
                                            </ul>
                                        </details>

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Disciplines