'use client'

import React from 'react'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'

const videos = [
	{
		url: 'https://www.youtube.com/watch?v=deydLJOKa30',
	},
	{
		url: 'https://www.youtube.com/watch?v=4p-nY0xleJs&t=1s',
	},

	{
		url: 'https://www.youtube.com/watch?v=VqByU8cMT-k',
	},
	{
		url: 'https://www.youtube.com/watch?v=zb2lUkPSOLA',
	},
]

function getYouTubeEmbedUrl(url: string): string {
	const videoId = url.split('v=')[1]?.split('&')[0]
	return `https://www.youtube.com/embed/${videoId}`
}

function VideoCarousel() {
	return (
		<div className='w-full flex justify-center items-center px-4 py-10'>
			<Carousel className='w-full max-w-7xl h-[500px] relative overflow-hidden rounded-2xl shadow-2xl'>
				<CarouselContent className='h-full'>
					{videos.map((video, index) => (
						<CarouselItem key={index} className='h-full'>
							<div className='relative w-full h-[500px]'>
								<iframe
									src={getYouTubeEmbedUrl(video.url)}
									className='w-full h-[500px] rounded-2xl'
									frameBorder='0'
									allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
									allowFullScreen
								></iframe>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>

				<CarouselPrevious className='absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-white text-black' />
				<CarouselNext className='absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-white text-black' />
			</Carousel>
		</div>
	)
}

export default VideoCarousel
