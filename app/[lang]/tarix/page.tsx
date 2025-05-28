import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'

const timelineEvents = [
	{
		year: '1625',
		title: 'Qurilgan',
		description: 'Tarixiy madrasaning mehmonxonaga aylanishi',
		details:
			"Bu yil mehmonxona binosining asoschisi tomonidan qurilgan. Dastlab u diniy ta'lim muassasasi sifatida foydalanilgan.",
		image: '/tarix/image-grand-11.jpg',
	},
	{
		year: '1800',
		title: "Qayta ta'mirlangan",
		description: 'Yevropa uslubidagi ichki dizayn',
		details:
			"XIX asrda bino to'liq qayta ta'mirlandi va Yevropa arxitektura uslubida bezatildi. Bu davrda zamonaviy qulayliklar qo'shildi.",
		image: '/tarix/photo_2025-05-27_23-52-24.jpg',
	},
	{
		year: '1950',
		title: 'Modernizatsiya',
		description: 'Zamonaviy kommunikatsiya tizimlari',
		details:
			"XX asr o'rtalarida binoga elektr, suv va kanalizatsiya tizimlari o'rnatildi. Bu mehmonxonaning zamonaviy standartlarga javob berishini ta'minladi.",
		image: '/tarix/photo_2025-05-27_23-52-30.jpg',
	},
	{
		year: '2020',
		title: 'Hotelga aylantirilgan',
		description: "To'liq restavratsiyadan so'ng mehmonxonaga aylantirildi",
		details:
			"Eng so'nggi restavratsiya natijasida bino zamonaviy mehmonxona sifatida qayta ochildi. Tarixiy xususiyatlar saqlanib qoldi.",
		image: '/tarix/photo_2025-05-27_23-52-35.jpg',
	},
]

export default function HistoryPage() {
	return (
		<div className='container py-12 space-y-12'>
			<div className='text-center space-y-4'>
				<h1 className='text-4xl font-bold'>Bizning tariximiz</h1>
				<p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
					400 yillik tarix davomida bizning mehmonxona ko&apos;plab
					o&apos;zgarishlarni boshdan kechirdi, lekin har doim mehmonlarga eng
					yaxshi xizmatni taqdim etishga intildi.
				</p>
			</div>

			<div className='relative'>
				{/* Timeline line */}
				<div className='absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-border hidden lg:block'></div>

				<div className='space-y-12'>
					{timelineEvents.map((event, index) => (
						<div key={event.year} className='relative'>
							{/* Timeline dot */}
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
												src={event.image || '/ '}
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
				<h2 className='text-3xl font-bold'>Bugungi kun</h2>
				<p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
					Bugun bizning mehmonxona zamonaviy qulayliklar va tarixiy muhitning
					mukammal uyg&apos;unligini taqdim etadi. Har bir mehmon o&apos;zini
					maxsus his qilishi uchun biz doimo xizmat sifatini yaxshilashga
					harakat qilamiz.
				</p>
			</div>
		</div>
	)
}
