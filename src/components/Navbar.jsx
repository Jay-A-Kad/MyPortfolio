
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


    const getGradientClasses = () => {
        switch (activeSection) {
            case 'Home':
                return 'bg-gradient-to-r from-fuchsia-500 to-cyan-500 transition-all duration-100';
            case 'Disciplines':
                return 'bg-gradient-to-r from-indigo-400 to-cyan-400 transition-all duration-100';
            case 'Projects':
                return 'bg-gradient-to-r from-emerald-400 to-cyan-400 transition-all duration-100';
            case 'Connect':
                return 'bg-gradient-to-r from-teal-400 to-yellow-200 transition-all duration-100';
            default:
                return 'bg-gradient-to-r from-fuchsia-500 to-cyan-500 transition-all duration-100';
        }
    };

    return (

        <div div className={`text-[#495867] bg-gradient-to-tl ${getGradientClasses()} h-screen`} >
            <ul className='text-[10px] md:text-base lg:text-lg font-anaheim font-bold '>

                <div className=' h-[50px] mx-auto items-center justify-center flex border-2 border-indigo-500/50 bg-[#EAEBED] bg-opacity-80 ' >
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