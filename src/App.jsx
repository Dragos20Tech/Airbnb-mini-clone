import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { Card } from "./components/Card"
import KatieZaferes from "./assets/katie-zaferes.png"
import './App.css'

function App() {
    return (
        <div id="app">
            <Navbar />
            <Hero />
            <Card img={KatieZaferes}
                  rating="5.0"
                  reviewCount={6}
                  country="USA"
                  title="Life Lessons with Katie Zaferes"
                  price={136}
            />
        </div>
    )
}

export default App
