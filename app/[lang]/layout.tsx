import type React from 'react'
import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import './globals.css'
import { getDictionary } from '@/lib/dictionaries'
import Script from 'next/script' // ✅ Import next/script

export const metadata: Metadata = {
	title: 'Historic Hotel - 400 Years Of History',
	description:
		'Our hotel was built in 1625 and has a rich history of 400 years.',
}

export default async function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode
	params: { lang: 'en' | 'uz' }
}) {
	const { lang } = params
	const dictionary = await getDictionary(lang)

	return (
		<html lang={lang}>
			<body className={'container mx-auto px-4'}>
				<Header currentLang={lang} dictionary={dictionary} />
				<main className='min-h-screen'>{children}</main>
				<Footer currentLang={lang} dictionary={dictionary} />

				{/* ✅ Correct use of Google Ads script */}
				<Script
					async
					src='https://www.googletagmanager.com/gtag/js?id=AW-17130117664'
				/>
				<Script id='google-ads'>
					{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17129006543');
			 gtag('event', 'conversion', {'send_to': 'AW-17130117664/kCaECPaW29AaEKC0o-g_'});
          `}
				</Script>
			</body>
		</html>
	)
}
