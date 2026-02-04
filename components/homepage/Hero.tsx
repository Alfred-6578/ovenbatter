'use client'
import React, { useEffect, useState } from 'react'
import { heroProducts } from '@/data/heroProducts';
import { Playfair_Display } from 'next/font/google';
import { Button } from '../ui/Button';
import CarouselCard from './CarouselCard';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-playfair-display',
});


const Hero = () => {
    const [activeIndex, setActiveIndex] = useState(2);
    const [isHovering, setIsHovering] = useState(false);
    const totalCards = heroProducts.length;

    const activeProduct = heroProducts[activeIndex];

    const getCardPosition = (cardIndex:any, activeIndex:any, totalCards:any) => {
        const diff = cardIndex - activeIndex;
        
        // Handle wrap-around for infinite loop
        if (diff === -2 || diff === 1) return 'right';      // Right side card
        if (diff === 2 || diff === -1) return 'left';       // Left side card
        if (diff === 0) return 'center';                     // Active center card
        
        return 'hidden'; // For carousels with more than 3 cards
    };

    useEffect(()=>{
        if (isHovering) return;
        
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % totalCards);
        }, 4000);

        return ()=> clearInterval(interval)
    },[isHovering, totalCards])


  return (
    <div className='relative flex bg-bg-war max-lg:flex-col-reverse max-lg:text-center items-center justify-between tny:gap-10 lg:min-h-[calc(100vh-12rem)] px-5 lg:px-15 py-6 -mt-10'>
        <div className="flex flex-col max-lg:items-center gap-3.5 max-w-2xl max-lg:mb-12">
            <div className="flex items-center max-lg:-ml-12">
                <div className={`pulse-dot`}></div>
                <span className={`text-text-muted ml-1.5`}>Featured Products</span>
            </div>
            <h1 className={`font-bold text-bg-dark text-5xl lg:text-6xl ${playfairDisplay.className} `}>{activeProduct.name}</h1>
            <p className="text-text-muted leading-7">{activeProduct.description}</p>
            <h3 style={{ color: `${activeProduct.colorCode}` }} className={`font-semibold text-[26px]`}>${(activeProduct.price / 100).toFixed(2)}</h3>
            <div className="w-60 mt-1">
                <button 
                    style={{ backgroundColor: `${activeProduct.colorCode}` }}
                    className={` bg-${activeProduct.color} rounded-full py-1 w-full inline-flex items-center justify-center font-medium cursor-pointer transition-colors
                                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2`}
                 >
                    <span className="px-6 py-3 inline-grid relative left-0  text-white">Order Now</span>
                </button>
            </div>
        </div>
        <div  
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="relative w-[100vw] h-auto max-h-[60vh] max-w-2xl lg:w-400 lg:h-[calc(100vh-12rem)] flex justify-center lg:justify-end items-center  overflow-hidden">
            <div style={{ backgroundColor: `${activeProduct.colorCode}` }} className="blob rounded-full sm:z-2 w-[90vw] tny:w-[90vw] vsm:w-133 vsm:h-130 lg:w-123 lg:h-123 vsm:ml-[10%] lg:ml-auto"></div>
           
            <div className={`flex max-lg:justify-center justify-end max-lg:-ml-2 mt-20 vsm:mt-10 items-center w-full max-lg:h-full absolute translate-y-[-50%] lg:-mt-100 lg:-left-10 scale-55 xsm:scale-65 tny:scale-80  vsm:scale-95 md:scale-95 z-2`}>
                {
                    heroProducts.map((product, index) => {
                        const position = getCardPosition(index, activeIndex, totalCards);
                        return (
                            <CarouselCard 
                                key={index}
                                product={product}
                                position={position}
                                isActive={index === activeIndex}
                                onClick={()=>setActiveIndex(index)}
                            />
                        )
                    })
                }
            </div>
        </div>
        {/* <div className="absolute top-[98%] lg:bottom-[120%] left-0 w-full bg-linear-to-b from-transparent to-black/40 h-[15%]"></div> */}
    </div>
  )
}

export default Hero