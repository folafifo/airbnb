export default function Contact (props) {
    return (
        <div className="contact-card">
        <img src={props.img} alt=""/>
        <h3>{props.name}</h3>
        <div className="info-group">
            <img src={require("./images/phone.png")} alt="" />
            <p>{props.phone}</p>
        </div>
        <div className="info-group">
            <img src={require("./images/mail.png")} alt="" />
            <p>{props.email}</p>
        </div>
    </div>
    )
}