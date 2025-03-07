import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Protect } from '@clerk/react-router'
import Footer from "./components/Footer"
import Navbar from "./components/Navbar/Navbar.tsx"
import { ThemeProvider } from "./components/theme-provider"
import { Detailed, Home, Landing } from './pages/index.ts';


function App() {

  return (
    <ThemeProvider>
      <div className="min-h-screen font-montserrat relative">
          <BrowserRouter>
            <Navbar />
            <main className="bg-background">
                <Routes>
                  <Route path='/' element={<Landing/>}/>
                  <Route path='/home' element={<Protect fallback={<Landing />}><Home/></Protect>}/>
                  <Route path='/todos/:id' element={<Protect fallback={<Landing />}><Detailed/></Protect>}/>
                  <Route path='*' element={<Navigate to= "/"/>}/>
                </Routes>
            </main>
            <Footer />
          </BrowserRouter>
      </div>
    </ThemeProvider>
  )
}

export default App
