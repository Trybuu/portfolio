import { Outlet } from 'react-router-dom'
import FooterSection from '../components/sections/FooterSection'

export default function LandingPageLayout() {
  return (
    <div className="container">
      <Outlet />
      <FooterSection />
    </div>
  )
}
