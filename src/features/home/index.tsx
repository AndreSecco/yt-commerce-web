import { useState } from 'react'
import {
    ArrowRight,
    ChevronLeft,
    ChevronRight,
    Heart,
    ShoppingBag,
    Sparkles,
    Star,
} from 'lucide-react'
import { SearchProvider } from '@/context/search-provider'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { TopNav } from '@/components/layout/top-nav'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import { isAuthenticated } from '@/helper/isAuthenticated'
import { Link } from '@tanstack/react-router'

const topNav = [
    {
        title: 'Overview',
        isActive: true,
        children: [
            {
                title: 'Populars',
                children: [
                    {
                        title: 'Product 1',
                        href: '/products/1',
                    },
                    {
                        title: 'Product 2',
                        href: '/products/2',
                    },
                ],
            },
            {
                title: 'Most Sales',
                children: [
                    {
                        title: 'Product 2',
                        href: '/product2',
                    },
                    {
                        title: 'Product 3',
                        href: '/product3',
                    },
                ],
            },
            {
                title: 'Recent',
                href: '/recent',
            },
        ],
    },
    {
        title: 'Customers',
        href: '/customers',
    },
]

const heroSlides = [
    {
        eyebrow: 'Nova colecao',
        title: 'Produtos escolhidos para abrir bem o dia.',
        description:
            'Uma curadoria direta com novidades, kits e itens mais procurados da loja.',
        image:
            'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1600&q=80',
        cta: 'Ver novidades',
        stat: '32 itens novos',
    },
    {
        eyebrow: 'Mais vendidos',
        title: 'Os favoritos voltaram para a vitrine.',
        description:
            'Produtos com alta procura, boa margem e visual pronto para campanha.',
        image:
            'https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&w=1600&q=80',
        cta: 'Explorar ofertas',
        stat: '18 em destaque',
    },
    {
        eyebrow: 'Semana especial',
        title: 'Monte combos com produtos de giro rapido.',
        description:
            'Combine categorias, crie chamadas sazonais e acelere a navegacao.',
        image:
            'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1600&q=80',
        cta: 'Criar campanha',
        stat: '7 combos prontos',
    },
]

const productTiles = [
    {
        name: 'Linha casual',
        count: '24 produtos',
        image:
            'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=700&q=80',
    },
    {
        name: 'Acessorios',
        count: '16 produtos',
        image:
            'https://images.unsplash.com/photo-1511556820780-d912e42b4980?auto=format&fit=crop&w=700&q=80',
    },
    {
        name: 'Essenciais',
        count: '41 produtos',
        image:
            'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=700&q=80',
    },
    {
        name: 'Premium',
        count: '12 produtos',
        image:
            'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=700&q=80',
    },
]

const featuredProducts = [
    {
        name: 'Jaqueta urban fit',
        category: 'Outerwear',
        price: 'R$ 249,90',
        rating: '4.9',
        tag: 'Top venda',
        image:
            'https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=700&q=80',
    },
    {
        name: 'Bolsa compacta',
        category: 'Acessorios',
        price: 'R$ 139,90',
        rating: '4.8',
        tag: 'Novo',
        image:
            'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80',
    },
    {
        name: 'Tenis daily move',
        category: 'Calcados',
        price: 'R$ 319,90',
        rating: '4.7',
        tag: 'Oferta',
        image:
            'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=700&q=80',
    },
]

export function Home() {
    const [activeSlide, setActiveSlide] = useState(0)
    const slide = heroSlides[activeSlide]

    const showPreviousSlide = () => {
        setActiveSlide((current) =>
            current === 0 ? heroSlides.length - 1 : current - 1
        )
    }

    const showNextSlide = () => {
        setActiveSlide((current) =>
            current === heroSlides.length - 1 ? 0 : current + 1
        )
    }

    return (
        <SearchProvider>
            <Header showSidebarTrigger={false}>
                <TopNav links={topNav} className='mr-10' />
                <Search className='me-auto' placeholder='Buscar produtos' />
                <ThemeSwitch />
                {isAuthenticated() && <ProfileDropdown />}
                {!isAuthenticated() && (
                    <>
                        <Link to='/sign-in'>
                            <Button variant='outline' size='sm'>
                                Sign in
                            </Button>
                        </Link>
                        <Link to='/sign-up'>
                            <Button size='sm'>
                                Register
                            </Button>
                        </Link>
                    </>
                )}
            </Header>

            <Main className='flex flex-1 flex-col gap-8 pb-10'>
                <section className='relative isolate overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm'>
                    <img
                        src={slide.image}
                        alt=''
                        className='absolute inset-0 h-full w-full object-cover'
                    />
                    <div className='absolute inset-0 bg-background/78 backdrop-blur-[1px] dark:bg-background/72' />
                    <div className='relative grid min-h-[440px] gap-6 p-5 sm:p-8 lg:grid-cols-[1fr_360px] lg:p-10'>
                        <div className='flex max-w-2xl flex-col justify-center gap-6'>
                            <div className='flex flex-wrap items-center gap-3'>
                                <Badge variant='secondary' className='gap-1.5'>
                                    <Sparkles className='size-3.5' />
                                    {slide.eyebrow}
                                </Badge>
                                <span className='text-sm font-medium text-muted-foreground'>
                                    {slide.stat}
                                </span>
                            </div>

                            <div className='space-y-4'>
                                <h1 className='max-w-xl text-3xl leading-tight font-semibold text-foreground sm:text-4xl lg:text-5xl'>
                                    {slide.title}
                                </h1>
                                <p className='max-w-lg text-base leading-7 text-muted-foreground'>
                                    {slide.description}
                                </p>
                            </div>

                            <div className='flex flex-wrap items-center gap-3'>
                                <Button size='lg'>
                                    {slide.cta}
                                    <ArrowRight />
                                </Button>
                                <Button size='lg' variant='outline'>
                                    Ver catalogo
                                </Button>
                            </div>
                        </div>

                        <div className='hidden items-end justify-end lg:flex'>
                            <div className='w-full rounded-lg border bg-background/80 p-4 shadow-sm backdrop-blur'>
                                <div className='aspect-[4/3] overflow-hidden rounded-md bg-muted'>
                                    <img
                                        src={slide.image}
                                        alt=''
                                        className='h-full w-full object-cover'
                                    />
                                </div>
                                <div className='mt-4 flex items-center justify-between gap-3'>
                                    <div>
                                        <p className='text-sm font-medium'>Vitrine principal</p>
                                        <p className='text-xs text-muted-foreground'>
                                            Atualizada hoje
                                        </p>
                                    </div>
                                    <Badge variant='outline'>Live</Badge>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='absolute right-5 bottom-5 left-5 flex items-center justify-between gap-4 sm:right-8 sm:left-8 lg:right-10 lg:left-10'>
                        <div className='flex gap-2'>
                            {heroSlides.map((item, index) => (
                                <button
                                    key={item.title}
                                    type='button'
                                    aria-label={`Ir para banner ${index + 1}`}
                                    aria-current={activeSlide === index}
                                    onClick={() => setActiveSlide(index)}
                                    className='h-2.5 w-8 rounded-full bg-foreground/20 transition-colors aria-current:bg-primary'
                                />
                            ))}
                        </div>
                        <div className='flex gap-2'>
                            <Button
                                type='button'
                                size='icon'
                                variant='outline'
                                aria-label='Banner anterior'
                                onClick={showPreviousSlide}
                                className='bg-background/80 backdrop-blur'
                            >
                                <ChevronLeft />
                            </Button>
                            <Button
                                type='button'
                                size='icon'
                                variant='outline'
                                aria-label='Proximo banner'
                                onClick={showNextSlide}
                                className='bg-background/80 backdrop-blur'
                            >
                                <ChevronRight />
                            </Button>
                        </div>
                    </div>
                </section>

                <section className='space-y-4'>
                    <div className='flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between'>
                        <div>
                            <h2 className='text-2xl font-semibold tracking-tight'>
                                Categorias em destaque
                            </h2>
                            <p className='text-sm text-muted-foreground'>
                                Quadrados visuais para acessar os grupos principais.
                            </p>
                        </div>
                        <Button variant='ghost'>
                            Ver todos
                            <ArrowRight />
                        </Button>
                    </div>

                    <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
                        {productTiles.map((product) => (
                            <button
                                key={product.name}
                                type='button'
                                className='group relative aspect-square overflow-hidden rounded-lg border bg-muted text-left shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none'
                            >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-105'
                                />
                                <div className='absolute inset-0 bg-gradient-to-t from-background/90 via-background/25 to-transparent' />
                                <div className='absolute inset-x-0 bottom-0 p-4'>
                                    <p className='font-semibold text-foreground'>
                                        {product.name}
                                    </p>
                                    <p className='text-sm text-muted-foreground'>
                                        {product.count}
                                    </p>
                                </div>
                            </button>
                        ))}
                    </div>
                </section>

                <section className='grid gap-4 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.6fr)]'>
                    <div className='rounded-lg border bg-muted/35 p-6'>
                        <Badge variant='outline' className='mb-4'>
                            Curadoria
                        </Badge>
                        <h2 className='text-2xl font-semibold tracking-tight'>
                            Mais produtos para manter a vitrine em movimento.
                        </h2>
                        <p className='mt-3 text-sm leading-6 text-muted-foreground'>
                            Use esta area para destacar itens com melhor margem, reposicoes
                            recentes ou produtos que precisam ganhar tracao.
                        </p>
                        <div className='mt-6 grid grid-cols-2 gap-3'>
                            <div className='rounded-md border bg-background p-4'>
                                <p className='text-2xl font-semibold'>86</p>
                                <p className='text-xs text-muted-foreground'>Produtos ativos</p>
                            </div>
                            <div className='rounded-md border bg-background p-4'>
                                <p className='text-2xl font-semibold'>12%</p>
                                <p className='text-xs text-muted-foreground'>Alta na semana</p>
                            </div>
                        </div>
                    </div>

                    <div className='grid gap-4 md:grid-cols-3'>
                        {featuredProducts.map((product) => (
                            <Card key={product.name} className='overflow-hidden py-0'>
                                <div className='relative aspect-[4/3] bg-muted'>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className='h-full w-full object-cover'
                                    />
                                    <Button
                                        type='button'
                                        size='icon'
                                        variant='secondary'
                                        aria-label={`Favoritar ${product.name}`}
                                        className='absolute top-3 right-3 rounded-full bg-background/85 backdrop-blur'
                                    >
                                        <Heart />
                                    </Button>
                                </div>
                                <CardHeader className='gap-2 px-4 pt-4'>
                                    <div className='flex items-start justify-between gap-3'>
                                        <div className='min-w-0'>
                                            <CardTitle className='truncate text-base'>
                                                {product.name}
                                            </CardTitle>
                                            <CardDescription>{product.category}</CardDescription>
                                        </div>
                                        <Badge variant='secondary'>{product.tag}</Badge>
                                    </div>
                                </CardHeader>
                                <CardContent className='px-4 pb-4'>
                                    <div className='flex items-center justify-between gap-3'>
                                        <div>
                                            <p className='font-semibold'>{product.price}</p>
                                            <p className='flex items-center gap-1 text-xs text-muted-foreground'>
                                                <Star className='size-3 fill-primary text-primary' />
                                                {product.rating}
                                            </p>
                                        </div>
                                        <Button type='button' size='icon' aria-label='Adicionar'>
                                            <ShoppingBag />
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>
            </Main>
        </SearchProvider>
    )
}
