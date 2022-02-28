export default function Card(props) {
  let badgeText
  if (props.item.openSpots === 0){
    badgeText = "SOLD OUT"
  } else if(props.item.location === "Online"){
    badgeText = "ONLINE"
  }
  return (
    <div className="cards">
      {/* style={{display: props.item.openSpots===0 ? "block" : "none"}} */}
      {badgeText && <div className="badge" >{badgeText}</div>}
      <img
        src={require(`./images/${props.item.coverImg}`)}
        className="card-pic"
        alt=""
      />
      <div className="line-1">
        <img src={require("./images/star.png")} className="star1" alt="" />
        <span className="rating">{props.item.stats.rating}</span>
        <span className="other">({props.item.stats.reviewCount}) • {props.item.location}</span>
      </div>
      <p className="caption">{props.item.title}</p>
      <p className="price">
        <span className="bold">From ${props.item.price}</span> / person
      </p>
    </div>
  );
}
