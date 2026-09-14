import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Profile from '@/components/Profile'
import Experience from '@/components/Experience'
import Hobbies from '@/components/Hobbies'
import Projects from '@/components/Projects'
import TechStack from '@/components/TechStack'
import Milestone from '@/components/Milestone'
import Contact from '@/components/Contact'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Profile />
        <Experience />
        <Hobbies />
        <Projects />
        <TechStack />
        <Milestone />
        <Contact />
      </main>
    </>
  )
}

export default App
