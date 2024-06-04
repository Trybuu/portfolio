import { useTranslation } from 'react-i18next'
import ThemeSwitch from '../features/theme/ThemeSwitch'
import LanguageSwitch from '../features/language/LanguageSwitch'
import StartSection from '../components/sections/StartSection'
import AboutSection from '../components/sections/AboutSection'
import ProjectsSection from '../components/sections/ProjectsSection'
import ContactSection from '../components/sections/ContactSection'
import Settings from '../components/ui/Settings'
import NavBar from '../components/ui/NavBar'

export default function LandingPage() {
  const { t } = useTranslation()

  return (
    <>
      <NavBar />

      <StartSection />

      <AboutSection />

      <ProjectsSection />

      <ContactSection />

      <Settings />
    </>
  )
}
