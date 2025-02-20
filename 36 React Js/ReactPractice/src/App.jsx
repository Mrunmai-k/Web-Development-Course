import StyleDemo from "./StyleDemo"
import { add, subtract, multiply, divide } from "./Calculator";

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
    </>
  )
}

export default App
