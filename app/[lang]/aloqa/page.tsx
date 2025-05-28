import React from 'react'
import Aloqaform from './_components/Aloqaform'
import { getDictionary } from '@/lib/dictionaries'

async function page({ params }: { params: Promise<{ lang: 'en' | 'uz' }> }) {
	const { lang } = await params
	const dictionary = await getDictionary(lang)
	return (
		<div>
			<Aloqaform dictionary={dictionary} />
		</div>
	)
}

export default page
