import { useEffect, useState } from 'react'
import { isAuthenticated } from '@/helper/isAuthenticated'
import { Logo } from '@/assets/logo'
import { cn } from '@/lib/utils'
import { Separator } from '@/components/ui/separator'
import { SidebarTrigger } from '@/components/ui/sidebar'

type HeaderProps = React.HTMLAttributes<HTMLElement> & {
  fixed?: boolean
  showSidebarTrigger?: boolean
  ref?: React.Ref<HTMLElement>
}

export function Header({
  className,
  fixed,
  showSidebarTrigger = true,
  children,
  ...props
}: HeaderProps) {
  const [offset, setOffset] = useState(0)
  const canShowSidebarTrigger = showSidebarTrigger && isAuthenticated()

  useEffect(() => {
    const onScroll = () => {
      setOffset(document.body.scrollTop || document.documentElement.scrollTop)
    }

    // Add scroll listener to the body
    document.addEventListener('scroll', onScroll, { passive: true })

    // Clean up the event listener on unmount
    return () => document.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'z-50 h-16',
        fixed && 'header-fixed peer/header sticky top-0 w-[inherit]',
        offset > 10 && fixed ? 'shadow' : 'shadow-none',
        className
      )}
      {...props}
    >
      <div
        className={cn(
          'relative flex h-full items-center gap-3 p-4 sm:gap-4',
          !isAuthenticated() && 'ml-20',
          offset > 10 &&
          fixed &&
          'after:absolute after:inset-0 after:-z-10 after:bg-background/20 after:backdrop-blur-lg'
        )}
      >
        {canShowSidebarTrigger && (
          <SidebarTrigger variant='outline' className='max-md:scale-125' />
        )}
        {canShowSidebarTrigger && (
          <Separator orientation='vertical' className='h-6' />
        )}
        {!canShowSidebarTrigger && <Logo />}
        {children}
      </div>
    </header>
  )
}
