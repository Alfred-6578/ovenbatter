import { cn } from '@/libs/utils'
import { ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient'
  size?: 'sm' | 'md' | 'lg'
  color?: string
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', color, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-lg font-medium cursor-pointer transition-colors',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
          'disabled:opacity-50 disabled:pointer-events-none',
          {
            [(color ? 'opacity-90 bg-' + color : 'bg-brand-coral') + ' text-white hover:opacity-100']:
              variant === 'primary',
            'bg-accent-hover text-body-text hover:bg-border-dark':
              variant === 'secondary',
            [(color ? 'border-'+color + ' text-'+color  + ' hover:bg-'+color : ' border-brand-coral text-brand-coral') + ' border-2  hover:text-white']:
              variant === 'outline',
            'text-accent-hover hover:text-border-dark':
              variant === 'ghost',
            'button-gradient text-body-text':
              variant === 'gradient',
            'px-3 py-1.5 text-sm': size === 'sm',
            'px-4 py-2 text-base': size === 'md',
            'px-6 py-3 text-lg': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'