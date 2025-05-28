import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import Link from 'next/link'
import { Wifi, Coffee, Tv, Bath, AirVent } from 'lucide-react'
import { getDictionary } from '@/lib/dictionaries'

const rooms = [
	{
		id: 1,
		name: 'Standart Xona',
		description: 'Zamonaviy dizayn, 2 kishilik, bepul Wi-Fi',
		price: 60,
		image: '/mehmonhona-2/image-1.jpg',
		amenities: ['Wi-Fi', 'TV', 'Konditsioner'],
		size: '25 m²',
		capacity: '2 kishi',
	},
	{
		id: 2,
		name: 'Deluxe Xona',
		description: 'Kengaytirilgan xona, balkon, shahar manzarasi',
		price: 60,
		image: '/mehmonhona-2/image-grand-1.jpg',
		amenities: ['Wi-Fi', 'TV', 'Balkon', 'Mini bar'],
		size: '35 m²',
		capacity: '2-3 kishi',
	},
	{
		id: 3,
		name: 'Suite Xona',
		description: 'Hashamatli xona, alohida yashash xonasi',
		price: 60,
		image: '/mehmonhona-2/image-grand-2.jpg',
		amenities: ['Wi-Fi', 'TV', 'Yashash xonasi', 'Jacuzzi'],
		size: '50 m²',
		capacity: '4 kishi',
	},
	{
		id: 4,
		name: 'Tarixiy Xona',
		description: 'Asl tarixiy dekor, antik mebel',
		price: 60,
		image: '/mehmonhona-2/image-grand-3.jpg',
		amenities: ['Wi-Fi', 'Antik mebel', 'Tarixiy dekor'],
		size: '30 m²',
		capacity: '2 kishi',
	},
	{
		id: 5,
		name: 'Oilaviy Xona',
		description: 'Katta oilalar uchun, 2 ta yotoq xonasi',
		price: 60,
		image: '/mehmonhona-2/image-grand-4.jpg',
		amenities: ['Wi-Fi', 'TV', '2 yotoq xona', 'Oshxona'],
		size: '60 m²',
		capacity: '6 kishi',
	},
	{
		id: 6,
		name: 'Prezident Suite',
		description: 'Eng hashamatli xona, VIP xizmat',
		price: 60,
		image: '/mehmonhona-2/image-grand-3.jpg',
		amenities: ['Wi-Fi', 'VIP xizmat', 'Shaxsiy butler', 'Spa'],
		size: '80 m²',
		capacity: '4 kishi',
	},
]

const amenityIcons = {
	'Wi-Fi': Wifi,
	TV: Tv,
	Konditsioner: AirVent,
	Balkon: Coffee,
	'Mini bar': Coffee,
	'Yashash xonasi': Coffee,
	Jacuzzi: Bath,
	'Antik mebel': Coffee,
	'Tarixiy dekor': Coffee,
	'2 yotoq xona': Coffee,
	Oshxona: Coffee,
	'VIP xizmat': Coffee,
	'Shaxsiy butler': Coffee,
	Spa: Bath,
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
										const Icon =
											amenityIcons[amenity as keyof typeof amenityIcons] ||
											Coffee
										return (
											<div
												key={amenity}
												className='flex items-center gap-1 text-sm text-muted-foreground'
											>
												<Icon className='h-4 w-4' />
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
