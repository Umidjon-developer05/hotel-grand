import Link from 'next/link'
import { Facebook, Instagram, Music2, Twitter, YoutubeIcon } from 'lucide-react'
interface LanguageSwitcherProps {
	currentLang: 'en' | 'uz'
	dictionary: {
		footer?: {
			contact?: string
			social?: string
			website?: string
			bio?: string
			fow?: string
		}
	}
}

export function Footer({ dictionary }: LanguageSwitcherProps) {
	return (
		<footer className='border-t bg-muted/50'>
			<div className='container py-8 md:py-12'>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					<div>
						<h3 className='text-lg font-semibold mb-4'>Ijtimoiy tarmoqlar</h3>
						<div className='flex space-x-4'>
							<Link
								href='https://www.facebook.com/stories/311182572833865/UzpfSVNDOjcwNTA2NTc3MTg4MTY1MQ==/?view_single=1'
								target='_blank'
								className='text-muted-foreground hover:text-foreground'
							>
								<Facebook className='h-5 w-5' />
								<span className='sr-only'>Facebook</span>
							</Link>
							<Link
								href='https://www.instagram.com/grand_nodirbek_boutique_hotel?igsh=bGJmYWc4cDlwbGw%3D'
								target='_blank'
								className='text-muted-foreground hover:text-foreground'
							>
								<Instagram className='h-5 w-5' />
								<span className='sr-only'>Instagram</span>
							</Link>
							<Link
								href='https://www.youtube.com/@%D0%93%D0%BE%D1%80%D0%BE%D0%B4%D0%91%D1%83%D1%85%D0%B0%D1%80%D0%B0.%D0%93%D0%BE%D1%81%D1%82%D0%B8%D0%BD%D0%B8%D1%86%D0%B0%D0%B3%D1%80%D0%B0%D0%BD%D0%B4%D0%9D%D0%BE%D0%B4%D0%B8'
								target='_blank'
								className='text-muted-foreground hover:text-foreground'
							>
								<YoutubeIcon className='h-5 w-5 text-red-500' size={20} />
							</Link>
							<Link
								href={
									'https://x.com/MurodovOta86896#:~:text=%D0%9D%D0%BE%D0%B4%D0%B8%D1%80%D0%B1%D0%B5%D0%BA%20%D0%91%D1%83%D1%82%D0%B8%D0%BA%20%D0%9E%D1%82%D0%B5%D0%BB%D1%8C-,%40MurodovOta86896,-%D0%9F%D0%BE%D0%B4%D1%82%D0%B2%D0%B5%D1%80%D0%B6%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5%20%D1%86%D0%B8%D0%B2%D0%B8%D0%BB%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D0%B8'
								}
								target='_blank'
								className='text-muted-foreground hover:text-foreground'
							>
								<Twitter className='h-5 w-5' />
							</Link>
							<Link
								href={
									'https://www.tiktok.com/@otabejhqizy?is_from_webapp=1&sender_device=pc'
								}
								target='_blank'
								className='text-muted-foreground hover:text-foreground'
							>
								<Music2 className='h-5 w-5' />
							</Link>
						</div>
					</div>

					<div>
						<h3 className='text-lg font-semibold mb-4'>
							{dictionary?.footer?.contact}
						</h3>
						<div className='space-y-2 text-sm text-muted-foreground'>
							<p>Tel: +998 93 626 57 03</p>
							<p>Email: otabekmurodov038@gmail.com</p>
						</div>
					</div>

					<div>
						<h3 className='text-lg font-semibold mb-4'>Sayt haqida</h3>
						<p className='text-sm text-muted-foreground'>
							{dictionary?.footer?.bio ||
								"Bizning saytimiz sizga mehmonxonamiz haqida ma'lumot beradi, xonalarni bron qilish imkonini yaratadi va tarixiy joylarimizni kashf etishga yordam beradi."}
						</p>
					</div>
				</div>

				<div className='mt-8 pt-8 border-t text-center text-sm text-muted-foreground'>
					<p>{dictionary?.footer?.fow}</p>
				</div>
			</div>
		</footer>
	)
}
