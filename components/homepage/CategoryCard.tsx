import Link from 'next/link';
import React from 'react'



export interface Category {
  id:number;
  color: 'coral' | 'orange' | 'teal' | 'yellow';
  icon: string;
  name: string;
  count: number;
}

const CategoryCard = ({ category }: { category: Category }) => {
  // Color mapping to actual hex values
  const colorMap = {
    coral: '#E8453C',
    orange: '#F08C00',
    teal: '#2BBCB3',
    yellow: '#F5C542',
  };

  return (
    <Link href="#" className="category-card">
      <div 
        className="category-icon"
        style={{ backgroundColor: `${colorMap[category.color]}15` }} // 15 = 8% opacity in hex
      >
        <span style={{ color: colorMap[category.color] }}>
          {category.icon}
        </span>
      </div>
      <div className="category-info">
        <h4 className="category-name">{category.name}</h4>
        <p className="category-count">{category.count} items</p>
      </div>
    </Link>
  );
};

export default CategoryCard