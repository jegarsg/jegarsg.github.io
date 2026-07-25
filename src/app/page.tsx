'use client'
import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import GithubActivity from './components/GithubActivity'
import Projects from './components/Projects'
import Contacts from './components/Contacts'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="relative z-10 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header />
      <About />
      <Experience />
      <Skills />
      <GithubActivity />
      <Projects />
      <Contacts />
      <Footer />
    </main>
  )
}
