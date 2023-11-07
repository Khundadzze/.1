const Card = (props) => {

     return ( 
           <div className="card">
      <h1 className="card-title"> {props.name} </h1>

      <div className="img-box">
           <img src={props.image} alt= {props.name}/>
     </div >

      <p> {props.description} </p>
      <button onClick={props.action} className="btn">button</button>
  </div>
  )
}

export default Card
