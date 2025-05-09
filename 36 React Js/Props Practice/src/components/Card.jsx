export default function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <img
          src={props.img}
          alt="avatar_img"
          className="circle-img"
        />
      </div>
      <div className="bottom">
        <p className="info">{props.tel}</p>
        <p className="info">{props.mail}</p>
      </div>
    </div>
  );
}
