import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Protect } from '@clerk/clerk-react'
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar/Navbar.tsx"
import { ThemeProvider } from "./components/theme-provider"
import { Details, Home } from './pages/index.ts';


function App() {

  return (
    <ThemeProvider>
      <div className="min-h-screen font-montserrat relative">
        <Router>
          <Navbar />
          <main className="bg-background">
              <Routes>
                <Route path='/' element={<Hero/>}/>
                <Route path='/home' element={<Protect><Home/></Protect>}/>
                <Route path='/todos' element={<Protect><Details/></Protect>}/>
                <Route path='*' element={<Navigate to= "/"/>}/>
              </Routes>
          </main>
          <Footer />
        </Router>
      </div>
    </ThemeProvider>
  )
}

export default App
