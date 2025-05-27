import type React from 'react'
import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import './globals.css'
import { getDictionary } from '@/lib/dictionaries'

export const metadata: Metadata = {
	title: 'Tarixiy Mehmonxona - 400 Yillik Tarix',
	description:
		"Bizning mehmonxonamiz 1625 yilda qurilgan bo'lib, 400 yillik boy tarixga ega.",
}

export default async function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode
	params: { lang: 'en' | 'uz' }
}) {
	const { lang } = await params
	const dictionary = await getDictionary(lang)
	return (
		<html lang={lang}>
			<body className={'container mx-auto px-4'}>
				<Header currentLang={lang} dictionary={dictionary} />
				<main className='min-h-screen'>{children}</main>
				<Footer currentLang={lang} dictionary={dictionary} />
			</body>
		</html>
	)
}
