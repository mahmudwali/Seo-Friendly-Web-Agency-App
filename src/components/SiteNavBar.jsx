"use client"

import Link from "next/link";
import {usePathname} from "next/navigation";

const SiteNavBar = () => {

    const NavClick = () => {
        // open
        const burger = document.querySelectorAll('.navbar-burger');
        const menu = document.querySelectorAll('.navbar-menu');

        if (burger.length && menu.length) {
            for (var i = 0; i < burger.length; i++) {
                burger[i].addEventListener('click', function() {
                    for (var j = 0; j < menu.length; j++) {
                        menu[j].classList.toggle('hidden');
                    }
                });
            }
        }

        // close
        const close = document.querySelectorAll('.navbar-close');
        const backdrop = document.querySelectorAll('.navbar-backdrop');

        if (close.length) {
            for (var i = 0; i < close.length; i++) {
                close[i].addEventListener('click', function() {
                    for (var j = 0; j < menu.length; j++) {
                        menu[j].classList.toggle('hidden');
                    }
                });
            }
        }

        if (backdrop.length) {
            for (var i = 0; i < backdrop.length; i++) {
                backdrop[i].addEventListener('click', function() {
                    for (var j = 0; j < menu.length; j++) {
                        menu[j].classList.toggle('hidden');
                    }
                });
            }
        }
    }

    const current=usePathname();

    return (
        <div>
            <nav className='relative px-10 py-5 flex justify-between items-center bg-green-50'>
                <a className='text-3xl font-bold leading-none' href='/'>
                    Design<span className='text-yellow-500'>AGENCY</span>
                </a>
                <div className='lg:hidden'>
                    <button onClick={()=>{NavClick()}} className='navbar-burger flex items-center text-green-600 p-3'>
                        <svg className='block h-4 w-4 fill-current' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                            <title>Mobile menu</title>
                            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
                        </svg>
                    </button>
                </div>
                <ul className='hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto  lg:items-center lg:w-auto lg:space-x-6'>
                    <li>
                        <Link className={current==="/"?"text-sm text-green-600 font-bold":"text-sm text-gray-400 hover:text-gray-500 "} href={"/"}>Start</Link>
                    </li>
                    <li className='text-gray-300'>
                        <svg className='w-4 h-4 current-fill' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z'/>
                        </svg>
                    </li>
                    <li>
                        <Link className={current==="/team"?"text-sm text-green-600 font-bold":"text-sm text-gray-400 hover:text-gray-500 "} href={"/team"}>Team</Link>
                    </li>
                    <li className='text-gray-300'>
                        <svg className='w-4 h-4 current-fill' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z'/>
                        </svg>
                    </li>
                    <li>
                        <Link  className={current==="/services"?"text-sm text-green-600 font-bold":"text-sm text-gray-400 hover:text-gray-500 "} href={'/services'}>Services</Link>
                    </li>
                    <li className='text-gray-300'>
                        <svg className='w-4 h-4 current-fill' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z'/>
                        </svg>
                    </li>
                    <li>
                        <Link className={current==="/projects"?"text-sm text-green-600 font-bold":"text-sm text-gray-400 hover:text-gray-500 "} href={'/projects'}>Projects</Link>
                    </li>
                    <li className='text-gray-300'>
                        <svg className='w-4 h-4 current-fill' xmlns='http://www.w3.org/2000/svg' fill='none'viewBox='0 0 24 24' stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z'/>
                        </svg>
                    </li>
                    <li>
                        <Link className={current==="/testimonials"?"text-sm text-green-600 font-bold":"text-sm text-gray-400 hover:text-gray-500 "}  href={'/testimonials'}>Testimonials</Link>
                    </li>
                </ul>
                <div>
                    <ul className='hidden md:flex space-x-4'>
                        <li className='border px-4 py-1 rounded-lg border-green-600 '> <Link className={current==="/login"?"text-sm text-green-600 font-bold":"text-sm text-gray-400 hover:text-gray-500"}  href={'/login'}>Log In</Link> </li>
                        <li className='border px-4 py-1 rounded-lg bg-green-600'> <Link className={current==="/register"?"text-sm text-white font-bold border-green-600":"text-sm text-white hover:text-gray-500"}  href={'/register'}>Register</Link> </li>
                    </ul>
                </div>
            </nav>

            <div className='hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50'>
                <div onClick={()=>{NavClick()}} className='navbar-backdrop  fixed inset-0 bg-gray-800 opacity-25' />
                <nav className='relative flex flex-col py-6 px-6 h-full w-full bg-white border-r overflow-y-auto'>
                    <div className='flex items-center mb-8'>
                        <a className='mr-auto text-xl font-bold leading-none' href='/'>
                        Design<span className='text-yellow-500'>AGENCY</span>
                        </a>
                        <button onClick={()=>{NavClick()}} className='navbar-close'>
                            <svg className='h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12'/>
                            </svg>
                        </button>
                    </div>
                    <div>
                        <ul>
                            <li className='mb-1'>
                                <Link className='block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded' href={'/'}>Start</Link>
                            </li>
                            <li className='mb-1'>
                                <Link className='block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded' href={'/team'}>Team</Link>
                            </li>
                            <li className='mb-1'>
                                <Link className='block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded' href={'/services'}>Services</Link>
                            </li>
                            <li className='mb-1'>
                                <Link className='block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded' href={'/projects'}>Projects</Link>
                            </li>
                            <li className='mb-1'>
                                <Link className='block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded' href={'/testimonials'}>Testimonials</Link>
                            </li>
                        </ul>
                        <div>
                    <ul className='space-y-5 mt-2'>
                        <li className='border px-4 py-1 w-[30%] text-center rounded-lg border-green-600 '> <Link className={current==="/login"?"text-sm text-green-600 font-bold":"text-sm text-gray-400 hover:text-gray-500 "}  href={'/login'}>Log In</Link> </li>
                        <li className='border px-4 py-1 w-[30%] text-center rounded-lg bg-green-600'> <Link className={current==="/register"?"text-sm text-white font-bold border-green-600":"text-sm text-white hover:text-gray-500 "}  href={'/register'}>Register</Link> </li>
                    </ul>
                </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};
export default SiteNavBar;