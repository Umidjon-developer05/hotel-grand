import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import Link from 'next/link'
import { getDictionary } from '@/lib/dictionaries'
import {
	BedSingle,
	Bath,
	Tv,
	AirVent,
	Plane,
	Hotel,
	Utensils,
	MapPinned,
	ShowerHead,
} from 'lucide-react'
const rooms = [
	{
		id: 1,
		name: 'Luxe',
		description: 'Modern design, for 2 people, free Wi-Fi',
		price: 150,
		image: '/mehmonhona-2/image-1.jpg',
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
		size: '55 m²',
		capacity: '2 people',
	},
	{
		id: 2,
		name: 'Luxe Twin',
		description: 'Spacious, balcony, city view',
		price: 150,
		image: '/mehmonhona-2/image-grand-1.jpg',
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
		size: '55 m²',
		capacity: '2 people',
	},
	{
		id: 3,
		name: 'Luxe Double',
		description: 'Luxurious, private living area',
		price: 150,
		image: '/mehmonhona-2/image-grand-3.jpg',
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
		size: '55 m²',
		capacity: '2 people',
	},
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
const iconMap: Record<string, JSX.Element> = {
	'Private bathroom': <Bath className='h-4 w-4' />,
	'Air conditioner': <AirVent className='h-4 w-4' />,
	'Flat-screen TV': <Tv className='h-4 w-4' />,
	'Airport transfer': <Plane className='h-4 w-4' />,
	Bathtub: <Hotel className='h-4 w-4' />,
	'Non-smoking rooms': <BedSingle className='h-4 w-4' />,
	'Room service (food and drinks)': <Utensils className='h-4 w-4' />,
	'Excursion desk': <MapPinned className='h-4 w-4' />,
	Shower: <ShowerHead className='h-4 w-4' />,
}

export default async function RoomsPage({
	params,
}: {
	params: Promise<{ lang: 'en' | 'uz' }>
}) {
	const { lang } = await params
	const dictionary = await getDictionary(lang)

	return (
		<div className='container py-12 space-y-8'>
			<div className='text-center space-y-4'>
				<h1 className='text-4xl font-bold'>{dictionary.house.title}</h1>
				<p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
					{dictionary.house.bio}
				</p>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
				{rooms.map(room => (
					<Card
						key={room.id}
						className='overflow-hidden hover:shadow-lg transition-shadow'
					>
						<div className='relative h-64'>
							<Image
								src={room.image || '/ '}
								alt={room.name}
								fill
								className='object-cover'
							/>
							<Badge className='absolute top-4 left-4 bg-primary'>
								{room.capacity}
							</Badge>
						</div>
						<CardContent className='p-6 space-y-4'>
							<div className='space-y-2'>
								<h3 className='text-xl font-semibold'>{room.name}</h3>
								<p className='text-muted-foreground'>{room.description}</p>
								<p className='text-sm text-muted-foreground'>
									Maydon: {room.size}
								</p>
							</div>

							<div className='space-y-2'>
								<h4 className='font-medium'>Qulayliklar:</h4>
								<div className='flex flex-wrap gap-2'>
									{room.amenities.map(amenity => {
										return (
											<div
												key={amenity}
												className='flex items-center gap-1 text-sm text-muted-foreground'
											>
												{iconMap[amenity] || null}
												<span>{amenity}</span>
											</div>
										)
									})}
								</div>
							</div>

							<div className='flex items-center justify-between pt-4 border-t'>
								<div>
									<span className='text-2xl font-bold text-primary'>
										${room.price}
									</span>
									<span className='text-sm text-muted-foreground'>/kecha</span>
								</div>
								<Button asChild>
									<Link href='https://wa.me/998936265703' target='_blank'>
										Bron qilish
									</Link>
								</Button>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	)
}
