
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import { ThemeProvider } from "./components/theme-provider"


function App() {

  return (
    <ThemeProvider>
      <div className="min-h-screen font-montserrat relative">
          <Navbar />
          <main className="py-16 md:py-20 bg-background">
            <Hero />
          </main>
          <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
