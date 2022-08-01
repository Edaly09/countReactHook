import { useState } from "react";

const App = () =>{
const [conteur, setconteur] = useState(1)

const  handleCountChange1 = ()=>{
  setconteur(conteur + 1)
}
const handleCountChange2 = ()=>{
  setconteur(conteur - 1)
}

return(
  <>
  <h1>Mon super conteur</h1>
  <button onClick={handleCountChange2}>-</button>
  <span>{conteur}</span>
  <button onClick={handleCountChange1}>+</button>
  </>
)

}

export default App;
