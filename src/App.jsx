import LandingNavbar from './components/LandingPage/LandingNavbar/LandingNavbar'
import LandingHero from './components/LandingPage/LandingHero/LandingHero'
import LandingRole from './components/LandingPage/LandingRole/LandingRole'


import styles from './App.module.css'

function App() {
  

  return (
    <>
     <div className={styles.App}>
      <LandingNavbar />
      <LandingHero />
      <LandingRole />

     </div>
    </>
  )
}

export default App