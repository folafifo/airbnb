import "./App.css";
import Contact from "./components/Contact";
// import Card from "./components/Card";
// import Hero from "./components/Hero";
// import Navbar from "./components/Navbar";

export default function App() {
  return (
    // <div className="page">
    <div className="contacts">
      <Contact 
        img={require("./components/images/cat.png")}
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />
      <Contact 
        img={require("./components/images/cat1.png")}
        name="Fluffykins"
        phone="(212) 555-2345"
        email="fluff@me.com"/>
      <Contact 
        img={require("./components/images/cat2.png")}
        name="Felix"
        phone="(212) 555-4567"
        email="thecat@hotmail.com"/>
      <Contact 
        img={require("./components/images/cat3.png")}
        name="Pumpkin"
        phone="(0800) CAT KING"
        email="pumpkin@scrimba.com"
      />
      {/* <Navbar />
      <Hero />
      <div className="cards">
        <Card /> */}
      {/* </div> */}
    </div>
  );
}
