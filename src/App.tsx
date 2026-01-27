import { useState } from 'react'
import { motion } from 'framer-motion'
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'
import './App.css'
import Home from './screens/HomeScreen'
import Logo from './components/Logo'
import Navigation from './components/Navigation'
import AboutMeScreen from './screens/AboutMeScreen'
import ContactScreen from './screens/ContactScreen'
import ProjectScreen from './screens/ProjectsScreen'

function App() {
  const [index, setIndex] = useState(0)
  const sections = ['Home', 'Projects', 'About', 'Contact']

  const goToSection = (i) => {
    if (i >= 0 && i < sections.length) {
      setIndex(i)
    }
  }

  return (
    <>
      <ShaderGradientCanvas
        style={{
          position: 'absolute',
          inset: '0',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        <ShaderGradient
          animate="on"
          axesHelper="on"
          bgColor1="#000000"
          bgColor2="#000000"
          brightness={1.2}
          cAzimuthAngle={180}
          cDistance={2.4}
          cPolarAngle={95}
          cameraZoom={1}
          color1="#000057"
          color2="#000047"
          color3="#00008c"
          destination="onCanvas"
          embedMode="off"
          envPreset="city"
          format="gif"
          fov={45}
          frameRate={10}
          gizmoHelper="hide"
          grain="off"
          lightType="3d"
          pixelDensity={1}
          positionX={0}
          positionY={-2.1}
          positionZ={0}
          range="disabled"
          rangeEnd={40}
          rangeStart={0}
          reflection={0.1}
          rotationX={0}
          rotationY={0}
          rotationZ={225}
          shader="defaults"
          type="waterPlane"
          uAmplitude={0}
          uDensity={1.8}
          uFrequency={5.5}
          uSpeed={0.1}
          uStrength={3}
          uTime={0.2}
          wireframe={false}
        />
      </ShaderGradientCanvas>

      <header className="fixed top-0 left-0 right-0 px-24 py-8 z-10">
        <div className="fixed-header__content">
          <Logo />
          <Navigation sections={sections} onClick={goToSection} />
        </div>
      </header>

      <main className="w-screen h-screen overflow-hidden relative">
        <motion.div
          className="motion-container"
          animate={{ x: `-${index * 100}vw` }}
          transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        >
          <section className="section">
            <Home />
          </section>

          <section className="section">
            <ProjectScreen />
          </section>

          <section className="section">
            <AboutMeScreen />
          </section>

          <section className="section">
            <ContactScreen />
          </section>
        </motion.div>
      </main>
    </>
  )
}

export default App
