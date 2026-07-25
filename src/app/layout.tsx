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
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 min-h-screen font-sans">
        <div
          aria-hidden
          className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
        >
          <div className="absolute -top-40 -left-40 w-[28rem] h-[28rem] rounded-full bg-cyan-400/30 dark:bg-cyan-500/20 blur-3xl animate-blob" />
          <div className="absolute top-1/3 -right-32 w-[26rem] h-[26rem] rounded-full bg-violet-400/30 dark:bg-violet-500/20 blur-3xl animate-blob [animation-delay:6s]" />
          <div className="absolute bottom-0 left-1/4 w-[24rem] h-[24rem] rounded-full bg-fuchsia-400/20 dark:bg-fuchsia-500/15 blur-3xl animate-blob [animation-delay:12s]" />
        </div>
        {children}
        <ScrollToTopButton />
      </body>
    </html>
  )
}
