'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { Menu } from 'lucide-react'
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
	const [isOpen, setIsOpen] = useState(false)

	return (
		<header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
			<div className='container px-4 py-3 flex items-center justify-between'>
				{/* Logo */}
				<Link href='/' className='text-xl font-bold'>
					Hotel Grand Nodirbek
				</Link>

				{/* Desktop Navigation */}
				<nav className='hidden md:flex items-center gap-6 text-sm font-medium'>
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

				{/* Desktop Language switcher and button */}
				<div className='hidden md:flex items-center gap-2'>
					<LanguageSwitcher currentLang={currentLang} dictionary={dictionary} />
					<Button asChild>
						<Link href='/rezervatsiya'>{dictionary?.navbar?.make}</Link>
					</Button>
				</div>

				{/* Mobile Menu Button */}
				<Sheet open={isOpen} onOpenChange={setIsOpen}>
					<SheetTrigger asChild className='md:hidden'>
						<Button variant='ghost' size='icon'>
							<Menu className='h-6 w-6' />
							<span className='sr-only'>Toggle menu</span>
						</Button>
					</SheetTrigger>
					<SheetContent side='right' className='w-[300px] sm:w-[400px]'>
						<div className='flex flex-col gap-6 mt-6'>
							{/* Mobile Navigation */}
							<nav className='flex flex-col gap-4'>
								{navigation.map(item => (
									<Link
										key={item.href}
										href={item.href}
										onClick={() => setIsOpen(false)}
										className={cn(
											'text-lg transition-colors hover:text-foreground/80 py-2',
											pathname === item.href
												? 'text-foreground font-semibold'
												: 'text-foreground/60'
										)}
									>
										{t
											? t[item.name as keyof typeof t] || item.name
											: item.name}
									</Link>
								))}
							</nav>

							{/* Mobile Language switcher and button */}
							<div className='flex flex-col gap-4 pt-4 border-t'>
								<LanguageSwitcher
									currentLang={currentLang}
									dictionary={dictionary}
								/>
								<Button asChild onClick={() => setIsOpen(false)}>
									<Link href='/rezervatsiya'>{dictionary?.navbar?.make}</Link>
								</Button>
							</div>
						</div>
					</SheetContent>
				</Sheet>
			</div>
		</header>
	)
}
