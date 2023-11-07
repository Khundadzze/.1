import Card from "./card"
import mkmImage1 from '../assets/mkm4.webp'
import mkmImage2 from '../assets/mkm2.webp'
import mkmImage3 from '../assets/mkm.webp'


const CardList= () => {
   function action () {
     alert("the wind-up bird chronicle")
 }
    function action2 () {
  alert("norwegian wood")
}
   function action3 () {
  alert("kafka on the shore")
}
  return (
    <div className="card-list ">
      <Card name="the wind-up bird chronicle" image={mkmImage1} description="an astonishingly imaginative detective story" action={action} />
      <Card name="norwegian wood" image={mkmImage2} description="Norwegian Wood is a novel by Japanese author Haruki Murakami. Written in 1987"action={action2} />
      <Card name="kafka on the shore" image={mkmImage3} description="Kafka on the Shore is a 2002 novel by Japanese author Haruki Murakami " action={action3}/>
    </div>
  )
}

export default CardList
