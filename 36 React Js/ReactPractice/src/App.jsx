import StyleDemo from "./StyleDemo"
import { add, subtract, multiply, divide } from "./Calculator";
import Card from "./Card";

function App() {

  return (
    <>
      <StyleDemo/>
      <ul>
        <li>{add(10,20)}</li>
        <li>{subtract(100,20)}</li>
        <li>{multiply(10,20)}</li>
        <li>{divide(10,20)}</li>
      </ul>
      <Card name="Beyonce" img="https://media.gettyimages.com/id/1503043559/photo/warsaw-poland-beyonc%C3%A9-performs-onstage-during-the-renaissance-world-tour-at-pge-narodowy-on.jpg?s=612x612&w=0&k=20&c=jct9UGDDiBwjf0OkWCCTVMPGrkeoA2NfwmoIIn8bzRY=" tel="1234567890" mail="abc@gmail.com"/>
      <Card name="Jack Bauer" img="https://media.gettyimages.com/id/996050822/photo/quimper-france-start-jack-bauer-of-new-zealand-and-team-mitchelton-scott-lorient-city-during.jpg?s=612x612&w=0&k=20&c=GvZ3Gf5NBQAjYFvIoAcmn7jkSt2pNejQRHRW9JbZ0E8=" tel="12323567890" mail="xyz@gmail.com"/>
    </>
  )
}

export default App
