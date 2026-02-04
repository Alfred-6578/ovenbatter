'use client'
import React, { useState } from 'react'
import CategoryCard from './CategoryCard';
import { categories } from '@/data/categories';

const CategoryMarquee = () => {
  const [isPaused, setIsPaused] = useState(false);

  const midpoint = Math.floor((categories.length / 2) - 1);
  const row1Categories = categories;
  const row2Categories = [...categories.slice(midpoint), ...categories.slice(0, midpoint)];


  return (
    <div 
      className="marquee-container -mt-18"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* First row - scrolls left */}
      <div className={`marquee-track ${isPaused ? 'paused' : ''}`}>
        {/* First set of categories */}
        { row1Categories.map((category:any) => (
            <CategoryCard key={`track1-${category.id}`} category={category} />

        ))}
        
        {/* Duplicate set for seamless loop */}
        {row1Categories.map((category:any) => (
          <CategoryCard key={`track1-dup-${category.id}`} category={category} />
        ))}
      </div>

      {/* Second row - scrolls right (reverse) */}
      <div className={`marquee-track reverse mt-4 ${isPaused ? 'paused' : ''}`}>
        {/* First set of categories */}
        {row2Categories.map((category:any) => (
          <CategoryCard key={`track2-${category.id}`} category={category} />
        ))}
        
        {/* Duplicate set for seamless loop */}
        {row2Categories.map((category:any) => (
          <CategoryCard key={`track2-dup-${category.id}`} category={category} />
        ))}
      </div>
    </div>
  );
}

export default CategoryMarquee