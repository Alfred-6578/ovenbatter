import React from 'react'
import Image from 'next/image'

interface CarouselCardProps {
  product: {
    id: number
    name: string
    price: number
    currency: string
    category: string
    image: string
    color?: string
    colorCode?:string
    removableIngredients: { id: string; label: string }[]
  }
  position: string
  isActive: boolean
  onClick: () => void
}

const CarouselCard = ({product, position, isActive, onClick}:CarouselCardProps) => {
  return (
    <div className={`carousel-card ${position} w-100 h-30 ${product.id == 2 ? 'mt-30 lg:mt-20':''}`} onClick={onClick}>
        <Image src={product.image} alt='carousel-image' width={800} height={800} className='w-full'/>
    </div>
  )
}
export default CarouselCard