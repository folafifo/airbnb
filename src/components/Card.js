export default function Card() {
  return (
    <div>
      <img
        src={require("./images/swimmer.png")}
        className="swimmer-pic"
        alt=""
      />
      <div className="line-1">
        <img src={require("./images/star.png")} className="star1" alt="" />
        <span className="rating">5.0</span>
        <span className="other">(6) • USA</span>
      </div>
      <p className="caption">Life lessons with Katie Zaferes</p>
      <p className="price">
        <span className="bold">From $136</span> / person
      </p>
    </div>
  );
}
