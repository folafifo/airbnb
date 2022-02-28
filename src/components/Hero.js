export default function Hero() {
  return (
    <div className="hero">
      <img src={require("./images/grid.png")} className="grid" alt="" />
      <h1 className="hero-heading">Online Experiences</h1>
      <p className="hero-p">
        {" "}
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </div>
  );
}
