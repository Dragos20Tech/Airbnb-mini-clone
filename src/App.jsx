import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { Card } from "./components/Card"
import data from "./data.js"
import './App.css'

function App() {
    const cards = data.map(item => {
        return <Card
            img={item.coverImg}
            rating={item.stats.rating}
            reviewCount={item.stats.reviewCount}
            location={item.location}
            title={item.title}
            price={item.price}
        />
    })

    return (
        <div id="app">
            <Navbar />
            <Hero />
            {cards}
        </div>
    )
}

export default App
