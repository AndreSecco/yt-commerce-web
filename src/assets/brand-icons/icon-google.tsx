import { type SVGProps } from 'react'
import { cn } from '@/lib/utils'

export function IconGoogle({
    className,
    ...props
}: SVGProps<SVGSVGElement>) {
    return (
        <svg
            role='img'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            className={cn(className)}
            {...props}
        >
            <title>Google</title>
            <path
                fill='#4285F4'
                d='M23.49 12.27c0-.79-.07-1.54-.2-2.27H12v4.3h6.45a5.52 5.52 0 0 1-2.4 3.62v3.01h3.88c2.27-2.09 3.56-5.17 3.56-8.66z'
            />
            <path
                fill='#34A853'
                d='M12 24c3.24 0 5.95-1.07 7.93-2.91l-3.88-3.01c-1.08.73-2.46 1.16-4.05 1.16-3.11 0-5.74-2.1-6.68-4.92H1.31v3.09A12 12 0 0 0 12 24z'
            />
            <path
                fill='#FBBC05'
                d='M5.32 14.32A7.2 7.2 0 0 1 4.95 12c0-.81.14-1.6.37-2.32V6.59H1.31A12 12 0 0 0 0 12c0 1.93.46 3.75 1.31 5.41l4.01-3.09z'
            />
            <path
                fill='#EA4335'
                d='M12 4.77c1.76 0 3.34.61 4.58 1.8l3.43-3.43C17.94 1.14 15.23 0 12 0A12 12 0 0 0 1.31 6.59l4.01 3.09c.94-2.82 3.57-4.91 6.68-4.91z'
            />
        </svg>
    )
}