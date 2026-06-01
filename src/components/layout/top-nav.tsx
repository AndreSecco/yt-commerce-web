import { Link } from '@tanstack/react-router'
import { ChevronRight, Menu } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from '@/components/ui/dropdown-menu'

export interface NavItem {
  title: string
  href?: string
  isActive?: boolean
  disabled?: boolean
  children?: NavItem[]
}

type TopNavProps = React.HTMLAttributes<HTMLElement> & {
  links: NavItem[]
}

function RenderDropdownItems({ items }: { items: NavItem[] }) {
  return (
    <>
      {items.map((item) => {
        const hasChildren = !!item.children?.length

        if (hasChildren) {
          return (
            <DropdownMenuSub key={item.title}>
              <DropdownMenuSubTrigger>
                <span>{item.title}</span>
              </DropdownMenuSubTrigger>

              <DropdownMenuSubContent>
                <RenderDropdownItems items={item.children!} />
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          )
        }

        return (
          <DropdownMenuItem key={`${item.title}-${item.href}`} asChild>
            <Link
              to={item.href ?? '#'}
              disabled={item.disabled}
              className={!item.isActive ? 'text-muted-foreground' : ''}
            >
              {item.title}
            </Link>
          </DropdownMenuItem>
        )
      })}
    </>
  )
}

function RenderDesktopItems({ items }: { items: NavItem[] }) {
  return (
    <>
      {items.map((item) => {
        const hasChildren = !!item.children?.length

        if (hasChildren) {
          return (
            <DropdownMenu key={item.title}>
              <DropdownMenuTrigger asChild>
                <Button
                  variant='ghost'
                  className='h-8 p-0 text-sm font-medium'
                >
                  {item.title}
                  <ChevronRight className='ml-1 h-4 w-4 rotate-90' />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent>
                <RenderDropdownItems items={item.children!} />
              </DropdownMenuContent>
            </DropdownMenu>
          )
        }

        return (
          <Link
            key={`${item.title}-${item.href}`}
            to={item.href ?? '#'}
            disabled={item.disabled}
            className={`text-sm font-medium transition-colors hover:text-primary ${item.isActive ? '' : 'text-muted-foreground'
              }`}
          >
            {item.title}
          </Link>
        )
      })}
    </>
  )
}

export function TopNav({ className, links, ...props }: TopNavProps) {
  return (
    <>
      {/* MOBILE */}
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button
            size='icon'
            variant='outline'
            className={cn('md:size-7 lg:hidden', className)}
          >
            <Menu />
            <span className='sr-only'>Toggle navigation menu</span>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent side='bottom' align='start'>
          <RenderDropdownItems items={links} />
        </DropdownMenuContent>
      </DropdownMenu>

      {/* DESKTOP */}
      <nav
        className={cn(
          'hidden items-center space-x-4 lg:flex lg:space-x-4 xl:space-x-6',
          className
        )}
        {...props}
      >
        <RenderDesktopItems items={links} />
      </nav>
    </>
  )
}