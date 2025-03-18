export default function Card(props){
    return(
        <>
            <h2>{props.name}</h2>
            <img src={props.img} alt="" width="350" height="250"/>
            <p>{props.tel}</p>
            <p>{props.mail}</p>
        </>
    )
}