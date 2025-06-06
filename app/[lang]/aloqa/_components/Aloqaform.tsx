'use client'

import type React from 'react'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react'
import { Dictionary } from '@/lib/dictionaries'

export default function Aloqaform({ dictionary }: { dictionary: Dictionary }) {
	const [isSubmitted, setIsSubmitted] = useState(false)
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	})

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		setIsSubmitted(true)
		// Reset form after 3 seconds
		setTimeout(() => {
			setIsSubmitted(false)
			setFormData({ name: '', email: '', message: '' })
		}, 3000)
	}

	const handleInputChange = (field: string, value: string) => {
		setFormData(prev => ({ ...prev, [field]: value }))
	}

	return (
		<div className='container py-12 space-y-12'>
			<div className='text-center space-y-4'>
				<h1 className='text-4xl font-bold'>{dictionary?.contact?.title}</h1>
				<p className='text-lg text-muted-foreground'>
					{dictionary?.contact?.bio}
				</p>
			</div>

			<div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
				{/* Contact Form */}
				<Card>
					<CardHeader>
						<CardTitle>Send message</CardTitle>
					</CardHeader>
					<CardContent>
						{isSubmitted ? (
							<div className='text-center py-8'>
								<CheckCircle className='h-16 w-16 text-green-500 mx-auto mb-4' />
								<h3 className='text-xl font-semibold mb-2'>Xabar yuborildi!</h3>
								<p className='text-muted-foreground'>
									Soon connect with you lets go.
								</p>
							</div>
						) : (
							<form onSubmit={handleSubmit} className='space-y-4'>
								<div className='space-y-2'>
									<Label htmlFor='name'>Ism</Label>
									<Input
										id='name'
										placeholder='Ismingizni kiriting'
										value={formData.name}
										onChange={e => handleInputChange('name', e.target.value)}
										required
									/>
								</div>
								<div className='space-y-2'>
									<Label htmlFor='email'>Email</Label>
									<Input
										id='email'
										type='email'
										placeholder='email@example.com'
										value={formData.email}
										onChange={e => handleInputChange('email', e.target.value)}
										required
									/>
								</div>
								<div className='space-y-2'>
									<Label htmlFor='message'>Message</Label>
									<Textarea
										id='message'
										placeholder='Xabaringizni yozing...'
										rows={5}
										value={formData.message}
										onChange={e => handleInputChange('message', e.target.value)}
										required
									/>
								</div>
								<Button type='submit' className='w-full'>
									Send message
								</Button>
							</form>
						)}
					</CardContent>
				</Card>

				{/* Contact Information */}
				<div className='space-y-6'>
					<Card>
						<CardHeader>
							<CardTitle>Contact information</CardTitle>
						</CardHeader>
						<CardContent className='space-y-4'>
							<div className='flex items-center space-x-3'>
								<Phone className='h-5 w-5 text-primary' />
								<div>
									<p className='font-medium'>Phone</p>
									<p className='text-muted-foreground'>+998 93 626 57 03</p>
									<p className='text-muted-foreground'>+998 91 975 00 00</p>
								</div>
							</div>
							<div className='flex items-center space-x-3'>
								<Mail className='h-5 w-5 text-primary' />
								<div>
									<p className='font-medium'>Email</p>
									<p className='text-muted-foreground'>
										otabekmurodov@yahoo.com
									</p>
								</div>
							</div>
							<div className='flex items-center space-x-3'>
								<Clock className='h-5 w-5 text-primary' />
								<div>
									<p className='font-medium'>Working hours</p>
									<p className='text-muted-foreground'>24/7, Monday-Sunday</p>
								</div>
							</div>
							<div className='flex items-center space-x-3'>
								<MapPin className='h-5 w-5 text-primary' />
								<div>
									<p className='font-medium'>Location</p>
									<p className='text-muted-foreground'>Bukhara city</p>
								</div>
							</div>
						</CardContent>
					</Card>

					{/* Map */}
					<Card>
						<CardHeader>
							<CardTitle>Our location</CardTitle>
						</CardHeader>
						<CardContent>
							<div className='relative h-64 bg-muted rounded-lg overflow-hidden'>
								<iframe
									src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12240.010252830605!2d64.420146!3d39.772323!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDQ2JzIwLjQiTiA2NMKwMjUnMTIuNSJF!5e0!3m2!1sen!2s!4v1716900000000'
									width='600'
									height='100%'
									style={{ border: 0 }}
									allowFullScreen
									loading='lazy'
									referrerPolicy='no-referrer-when-downgrade'
									title='Hotel Location'
								></iframe>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	)
}
