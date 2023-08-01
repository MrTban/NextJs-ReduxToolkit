import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import { Providers } from '@/redux/providers'

const font = Nunito({
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Redux Toolkin in NextJs',
	description: 'State management with toolkit',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={font.className}>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
