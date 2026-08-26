import './globals.css'
import { Space_Grotesk, Inter } from 'next/font/google'
import ScrollToTopButton from './components/ScrollToTopButton'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-heading' })

export const metadata = {
  title: 'Jegar Sahaduta Ginting',
  description: 'Full-stack developer portfolio',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  if (
                    localStorage.theme === 'dark' ||
                    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
                  ) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-[var(--background)] text-gray-900 dark:text-gray-100 transition-colors duration-300 min-h-screen font-sans">
        <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute inset-x-0 top-0 h-[640px] bg-grid" />
          <div className="absolute -top-56 left-1/2 -translate-x-1/2 w-[42rem] h-[42rem] rounded-full bg-emerald-400/20 dark:bg-emerald-500/10 blur-[120px]" />
        </div>
        {children}
        <ScrollToTopButton />
      </body>
    </html>
  )
}
