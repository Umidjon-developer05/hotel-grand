import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import YotubeVideo from '@/components/YotubeVideo'
import { Dictionary, getDictionary } from '@/lib/dictionaries'
import Image from 'next/image'
import Link from 'next/link'

const heroImages = (dictionary: Dictionary) => [
	{
		src: '/minora.webp',
		title: dictionary.MainCarusel.title1,
		description: dictionary.MainCarusel.bio1,
	},
	{
		src: '/Banner.jpg',
		title: dictionary.MainCarusel.title3,
		description: dictionary.MainCarusel.bio3,
	},
	{
		src: '/muzey3.jpg',
		title: dictionary.MainCarusel.title2,
		description: dictionary.MainCarusel.bio2,
	},
]

const rooms = [
	{
		id: 4,
		name: 'Standard',
		description: 'Original historical décor, antique furniture',
		price: 60,
		image: '/standart/image-1.jpg',
		amenities: [
			'Private bathroom',
			'Air conditioner',
			'Flat-screen TV',
			'Airport transfer',
			'Bathtub',
			'Non-smoking rooms',
			'Window view',
			'Room service (food and drinks)',
			'Excursion desk',
			'Shower',
		],
		size: '25 m²',
		capacity: '2 people',
	},
	{
		id: 5,
		name: 'Standard Twin',
		description: 'For large families, 2 beds',
		price: 60,
		image: '/standart/image-2.jpg',
		amenities: [
			'Private bathroom',
			'Air conditioner',
			'Flat-screen TV',
			'Airport transfer',
			'Bathtub',
			'Non-smoking rooms',
			'Window view',
			'Room service (food and drinks)',
			'Excursion desk',
			'Shower',
		],
		size: '25 m²',
		capacity: '2 people',
	},
	{
		id: 6,
		name: 'Standard Double',
		description: 'For large families, 2 beds',
		price: 60,
		image: '/standart/image-5.jpg',
		amenities: [
			'Private bathroom',
			'Air conditioner',
			'Flat-screen TV',
			'Airport transfer',
			'Bathtub',
			'Non-smoking rooms',
			'Window view',
			'Room service (food and drinks)',
			'Excursion desk',
			'Shower',
		],
		size: '25 m²',
		capacity: '2 people',
	},
	{
		id: 7,
		name: 'Standard Triple',
		description: 'Most luxurious, VIP service',
		price: 80,
		image: '/standart/image.png',
		amenities: [
			'Private bathroom',
			'Air conditioner',
			'Flat-screen TV',
			'Airport transfer',
			'Bathtub',
			'Non-smoking rooms',
			'Window view',
			'Room service (food and drinks)',
			'Excursion desk',
			'Shower',
		],
		size: '50 m²',
		capacity: '4 people',
	},
]

export default async function HomePage({
	params,
}: {
	params: { lang: 'en' | 'uz' }
}) {
	const { lang } = await params
	const dictionary = await getDictionary(lang)
	const images = heroImages(dictionary)

	return (
		<div className='space-y-12'>
			{/* Hero Carousel */}
			<section className='relative'>
				<Carousel className='w-full rounded-md'>
					<CarouselContent>
						{images.map((image, index) => (
							<CarouselItem key={index}>
								<div className='relative h-[600px] w-full'>
									<Image
										src={image.src || '/ '}
										alt={image.title}
										fill
										className='object-cover rounded-md'
										priority={index === 0}
										unoptimized
									/>
									<div className='absolute inset-0 bg-black/40 flex items-center justify-center'>
										<div className='text-center text-white space-y-4'>
											<h1 className='text-4xl md:text-6xl font-bold'>
												{image.title}
											</h1>
											<p className='text-xl md:text-2xl'>{image.description}</p>
										</div>
									</div>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>

					<CarouselPrevious className='left-4' />
					<CarouselNext className='right-4' />
				</Carousel>
			</section>

			{/* About Section */}
			<section className='container py-12'>
				<div className='max-w-4xl mx-auto text-center space-y-6'>
					<h2 className='text-3xl md:text-4xl font-bold'>
						{dictionary?.history.title}
					</h2>
					<p className='text-lg text-muted-foreground leading-relaxed'>
						{dictionary?.history.bio}
					</p>
					<Button asChild size='lg'>
						<Link href='/tarix'>{dictionary?.history.button}</Link>
					</Button>
				</div>
			</section>
			{/* Youtube video */}
			<YotubeVideo />
			{/* Rooms Section */}
			<section className='container py-12'>
				<div className='space-y-8'>
					<div className='text-center space-y-4'>
						<h2 className='text-3xl md:text-4xl font-bold'>
							{dictionary?.house?.title}
						</h2>
						<p className='text-lg text-muted-foreground'>
							{dictionary?.house?.bio}
						</p>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
						{rooms.map(room => (
							<Card key={room.id} className='overflow-hidden'>
								<div className='relative h-48'>
									<Image
										src={room.image || '/ '}
										alt={room.name}
										fill
										className='object-cover'
									/>
								</div>
								<CardContent className='p-4 space-y-3'>
									<h3 className='font-semibold text-lg'>{room.name}</h3>
									<p className='text-2xl font-bold text-primary'>
										${room.price}
										<span className='text-sm font-normal text-muted-foreground'>
											/kecha
										</span>
									</p>
									<Button asChild className='w-full'>
										<Link href='https://wa.me/998936265703' target='_blank'>
											{dictionary?.navbar?.make}
										</Link>
									</Button>
								</CardContent>
							</Card>
						))}
					</div>

					<div className='text-center'>
						<Button asChild variant='outline' size='lg'>
							<Link href='/xonalar'>{dictionary?.house?.button}</Link>
						</Button>
					</div>
				</div>
			</section>
		</div>
	)
}
