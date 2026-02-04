'use client'
import React, { useState } from 'react'
import Image from 'next/image' 
import { BsCart } from 'react-icons/bs'
import Link from 'next/link'
import { HiOutlineUser } from "react-icons/hi2";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { HiOutlineInformationCircle } from "react-icons/hi2";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { BiMessageSquareDetail } from "react-icons/bi";

const navLinks = [
    {name:'Home', path:'/', icon:IoHomeOutline},
    {name:'Menu', path:'/menu', icon:MdOutlineRestaurantMenu},
    {name:'About', path:'/about', icon:HiOutlineInformationCircle},
    {name:'Contact Us', path:'/contact', icon:BiMessageSquareDetail},
    {name:'Profile', path:'/profile', icon:HiOutlineUser},
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed w-screen z-50">
        <nav className="flex justify-between shadow-lifted relative z-10 backdrop-blur-lg px-5 lg:px-15 py-6 items-center bg-white/30 border-b border-white/20">
            <div className="-ml-2">
                <Image className='w-36 vsm:w-40 h-12' src={require('@/assets/logo.png')} alt='logo' loading='eager'></Image>
            </div>

            <ul className="flex gap-8 max-lg:hidden ">
                {
                    navLinks.map((link,index)=>{
                        if(index == navLinks.length -1) return
                        return (
                            <Link key={index} href={link.path} className="hover:text-brand-coral transition-all duration-300 ">{link.name}</Link>
                        )
                    })
                }
            </ul>

            <div className="flex gap-5 text-[26px] ">
                <Link href={'/profile'} className='max-lg:hidden'>
                    <HiOutlineUser />
                </Link>
                <Link href={'/cart'} className='relative'>
                    <HiOutlineShoppingCart />
                    <span className="absolute -top-2 -right-2 bg-brand-orange text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">0</span> 
                </Link>
                <div className={` burger-icon ${isOpen ? 'active' : ''} max-tny:h-4! mt-1.5 lg:hidden!`} onClick={() => setIsOpen(!isOpen)}>
                        <span className='max-tny:w-6! max-tny:h-0.5!'></span>
                        <span className='max-tny:w-6! max-tny:h-0.5!'></span>
                        <span className='max-tny:w-6! max-tny:h-0.5!'></span>
                    </div>
            </div>

            
        </nav>
        <div className={`absolute lg:hidden text-lg -top-100  left-0 backdrop-blur-xl bg-white/80 border-b border-white/20 shadow-card w-full ${isOpen ? 'translate-y-[145%]' : 'translate-y-[-200%]'} transition-transform duration-300`}>
            <ul className='flex flex-col py-4 '>
                {
                    navLinks.map((link,index)=>{
                        return (
                            <Link key={index} href={link.path} className={`hover:text-brand-coral block py-4 lg:px-15 px-5 ${index === navLinks.length -1 ? '':'border-b border-black/10 '}`}>
                                {link.icon && <link.icon className='inline mb-1 mr-2 text-xl hover:text-brand-coral' />}
                                {link.name}
                            </Link>
                        )
                    })
                }
            </ul>
        </div>

    </div>
  )
}

export default Navbar