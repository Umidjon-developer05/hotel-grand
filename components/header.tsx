'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { LanguageSwitcher } from './language-switcher'

const navigation = [
	{ name: 'home', href: '/' },
	{ name: 'house', href: '/xonalar' },
	{ name: 'history', href: '/tarix' },
	{ name: 'contact', href: '/aloqa' },
]

interface LanguageSwitcherProps {
	currentLang: 'en' | 'uz'
	dictionary: {
		languages: {
			switchLanguage: string
			english: string
			uzbek: string
		}
		navbar?: {
			home?: string
			house?: string
			history?: string
			contact?: string
			make?: string
		}
	}
}

export function Header({ currentLang, dictionary }: LanguageSwitcherProps) {
	const pathname = usePathname()
	const t = dictionary.navbar

	return (
		<header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
			<div className='container px-4 py-3 flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
				{/* Logo */}
				<div className='flex items-center justify-between'>
					<Link href='/' className='text-xl font-bold'>
						Hotel Grand Nodirbek
					</Link>
				</div>

				{/* Navigation */}
				<nav className='flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-6 text-sm font-medium'>
					{navigation.map(item => (
						<Link
							key={item.href}
							href={item.href}
							className={cn(
								'transition-colors hover:text-foreground/80',
								pathname === item.href
									? 'text-foreground'
									: 'text-foreground/60'
							)}
						>
							{t ? t[item.name as keyof typeof t] || item.name : item.name}
						</Link>
					))}
				</nav>

				{/* Language switcher and button */}
				<div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
					<LanguageSwitcher currentLang={currentLang} dictionary={dictionary} />
					<Button asChild>
						<Link href='/rezervatsiya'>{dictionary?.navbar?.make}</Link>
					</Button>
				</div>
			</div>
		</header>
	)
}
