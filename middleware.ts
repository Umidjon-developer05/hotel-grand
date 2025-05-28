import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['en', 'uz']
const defaultLocale = 'en'

function getLocale(request: NextRequest): string {
	// Check if locale is in the pathname
	const pathname = request.nextUrl.pathname
	const pathnameLocale = locales.find(
		locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
	)

	if (pathnameLocale) return pathnameLocale

	// Check Accept-Language header
	const acceptLanguage = request.headers.get('accept-language')
	if (acceptLanguage) {
		const preferredLocale = locales.find(locale =>
			acceptLanguage.toLowerCase().includes(locale)
		)
		if (preferredLocale) return preferredLocale
	}

	return defaultLocale
}

function getPathnameWithoutLocale(pathname: string): string {
	// Remove locale from pathname
	const segments = pathname.split('/')
	if (locales.includes(segments[1])) {
		return '/' + segments.slice(2).join('/')
	}
	return pathname
}

export async function middleware(request: NextRequest) {
	const pathname = request.nextUrl.pathname

	// Skip internal Next.js paths and API routes (except auth)
	if (
		pathname.startsWith('/_next/') ||
		(pathname.startsWith('/api/') && !pathname.startsWith('/api/auth/')) ||
		pathname.includes('/favicon.ico') ||
		pathname.startsWith('/public/')
	) {
		return NextResponse.next()
	}

	// Check if pathname already has a locale
	const pathnameHasLocale = locales.some(
		locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
	)

	// If no locale in pathname, redirect to locale-prefixed path
	if (!pathnameHasLocale) {
		const locale = getLocale(request)
		const newUrl = new URL(`/${locale}${pathname}`, request.url)
		return NextResponse.redirect(newUrl)
	}

	// Get the pathname without locale for auth checks
	const pathnameWithoutLocale = getPathnameWithoutLocale(pathname)

	// Define public paths that don't require authentication (without locale)
	const publicPaths = ['/', '/login', '/register']
	const isPublicPath =
		publicPaths.some(publicPath => pathnameWithoutLocale === publicPath) ||
		pathnameWithoutLocale.startsWith('/api/auth/')

	// Check if the path is public
	if (isPublicPath) {
		return NextResponse.next()
	}

	// Protected routes that require authentication (without locale)

	return NextResponse.next()
}
export const config = {
	matcher: [
		// Barcha yo‘llar, lekin statik fayllarni chetlab o‘tamiz
		'/((?!_next/static|_next/image|favicon.ico|.*\\.(?:jpg|jpeg|png|webp|svg|gif)).*)',
	],
}
