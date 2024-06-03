
import React, { useState } from 'react';
import Connect from './Connect';
import Home from './Home';
import Projects from './Projects';
import Disciplines from './Disciplines';


const Navbar = () => {
    const [activeSection, setActiveSection] = useState('Home');

    const renderSection = () => {
        switch (activeSection) {
            case 'About':
                return <Home />;
            case 'Disciplines':
                return <Disciplines />;
            case 'Projects':
                return <Projects />;
            case 'Connect':
                return <Connect />;
            default:
                return <Home />;
        }
    };
    return (

        <div div className=' text-[#495867] ' >
            <ul className='text-sm md:text-base lg:text-lg mt-3 mr-10 md:mt-4 md:mx-3 lg:mt-4 lg:mx-3 flex justify-start font-anaheim font-bold '>
                <div className='max-w-[1600px] h-[50px] mx-auto items-center flex ml-5 border-2 border-indigo-500/50 bg-[#EAEBED] bg-opacity-80' >
                    <li className='mx-6 transition duration-100  hover:text-[#F71735] hover:scale-110 hover:underline  hover:cursor-pointer'
                        onClick={() => setActiveSection('Home')}>About</li>
                    <li className='mx-6 transition duration-100  hover:text-[#F71735] hover:scale-110 hover:underline  hover:cursor-pointer'
                        onClick={() => setActiveSection('Disciplines')}>Disciplines</li>
                    <li className='mx-6 transition duration-100  hover:text-[#F71735] hover:scale-110 hover:underline  hover:cursor-pointer'
                        onClick={() => setActiveSection('Projects')}>Projects</li>
                    <li className='mx-6 transition duration-100  hover:text-[#F71735] hover:scale-110 hover:underline  hover:cursor-pointer'>
                        <a href='CV-Jay-Kadam.pdf' download='Jay Kadam Resume'>Resume</a>
                    </li>
                    <li className='mx-6 transition duration-100  hover:text-[#F71735] hover:scale-110 hover:underline  hover:cursor-pointer '
                        onClick={() => setActiveSection('Connect')}>Connect</li>
                </div>
            </ul>
            <div className="content mt-4 mx-3">
                {renderSection()}
            </div>

        </div >
    );
}

export default Navbar