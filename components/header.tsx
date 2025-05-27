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
		<header className='sticky top-0 z-50 p-3 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
			<div className='container flex h-16 items-center'>
				<Link href='/' className='flex items-center space-x-2'>
					<span className='text-xl font-bold'>Hotel Grand Nodirbek</span>
				</Link>
				<nav className='flex items-center space-x-6 text-sm font-medium ml-6'>
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
							{t
								? (t as { [key: string]: string | undefined })[item.name]
								: item.name}
						</Link>
					))}
				</nav>
				<div className='ml-auto flex items-center space-x-4 gap-2 '>
					<LanguageSwitcher currentLang={currentLang} dictionary={dictionary} />
					<Button asChild>
						<Link href='/rezervatsiya'>{dictionary?.navbar?.make}</Link>
					</Button>
				</div>
			</div>
		</header>
	)
}
