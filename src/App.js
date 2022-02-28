import "./App.css";
//import Contact from "./components/Contact";
import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import data from "./data.js";


export default function App() {

  const cards = data.map((item) => {
    return(
    <Card 
        key = {item.id}
        item={item}
        /> 
    )
  })
  return (
    <div className="page">
      <Navbar />
      <Hero />
      <div className="cardsDiv">
        {cards}
       </div>
    </div>
  );
}
