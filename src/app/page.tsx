'use client'
import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contacts from './components/Contacts'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contacts />
      <Footer />
    </main>
  )
}
