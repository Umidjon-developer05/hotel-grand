import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import { Dictionary, getDictionary } from '@/lib/dictionaries'

const timelineEvents = (dictionary: Dictionary) => [
	{
		year: 'XVII centry',
		title: dictionary.historyPage?.bio1,
		description: dictionary.historyPage?.bio2,
		details: dictionary.historyPage?.p,
		image: '/tarix/image.png',
	},
	{
		year: 'XIX centry',
		title: dictionary.historyPage?.bio3,
		description: dictionary.historyPage?.bio4,
		details: dictionary.historyPage?.p1,
		image: '/tarix/padval.jpg',
	},
	{
		year: 'XIX centry',
		title: dictionary.historyPage?.bio5,
		description: dictionary.historyPage?.bio6,
		details: dictionary.historyPage?.p2,
		image: '/tarix/restaruant.jpg',
	},
	{
		year: 'XIX centry',
		title: dictionary.historyPage?.bio7,
		description: dictionary.historyPage?.bio8,
		details: dictionary.historyPage?.p3,
		image: '/tarix/galery.jpg',
	},
	{
		year: '',
		title: dictionary.historyPage?.bio9,
		description: dictionary.historyPage?.bio10,
		details: dictionary.historyPage?.p3,
		image: '/tarix/osh.jpg',
	},
]

export default async function HistoryPage({
	params,
}: {
	params: Promise<{ lang: 'en' | 'uz' }>
}) {
	const { lang } = await params
	const dictionary = await getDictionary(lang)
	const events = timelineEvents(dictionary)

	return (
		<div className='container py-12 space-y-12'>
			<div className='text-center space-y-4'>
				<h1 className='text-4xl font-bold'>{dictionary?.history?.title}</h1>
				<p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
					{dictionary?.history?.bio}
				</p>
			</div>

			<div className='relative'>
				<div className='absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-border hidden lg:block'></div>

				<div className='space-y-12'>
					{events.map((event, index) => (
						<div key={event.year} className='relative'>
							<div className='absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background hidden lg:block'></div>

							<div
								className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
									index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
								}`}
							>
								<div
									className={`space-y-4 ${
										index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'
									}`}
								>
									<div className='space-y-2'>
										<Badge variant='outline' className='text-lg px-3 py-1'>
											{event.year}
										</Badge>
										<h3 className='text-2xl font-bold'>{event.title}</h3>
										<p className='text-lg text-primary font-medium'>
											{event.description}
										</p>
										<p className='text-muted-foreground leading-relaxed'>
											{event.details}
										</p>
									</div>
								</div>

								<div
									className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
								>
									<Card className='overflow-hidden'>
										<div className='relative h-64'>
											<Image
												src={event.image}
												alt={event.title}
												fill
												className='object-cover'
											/>
										</div>
									</Card>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			<div className='text-center space-y-6 pt-12 border-t'>
				<h2 className='text-3xl font-bold'>{dictionary.historyPage?.today}</h2>
				<p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
					{dictionary.historyPage?.desc}
				</p>
			</div>
		</div>
	)
}
