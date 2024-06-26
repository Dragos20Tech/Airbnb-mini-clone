import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { Card } from "./components/Card"
import data from "./data.js"
import './App.css'

function App() {
    const cards = data.map(item => {
        return <Card
            key={item.id}
            {...item}
        />
    })

    return (
        <div id="app">
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}

export default App
