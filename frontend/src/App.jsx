import { useState } from "react"
import axios from "axios"
import image from "./assets/images/img.jpg"
const App = () => {
  const [input, setinput] = useState()
  const handleinput = (evt) => {
    setinput(evt.target.value)
  }
  const add = () => {
    const details = axios.post("http://localhost:5000/fruit", { "fruitname": input })
    setinput("")
  }
  return (<>
    <div className="flex flex-col justify-center items-center" style={{ backgroundImage: `url(${image})`, width: "100%", height: "641px", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
      <div className="bg-[#df9898] flex flex-col items-center  w-80 gap-3 p-5 rounded-md" >
        <span className="text-2xl font-bold " style={{ fontFamily: "cursive" }}>Fruit Name 🍎</span>
        <input className="w-52 outline-none p-1 rounded-md" type="text" value={input} onChange={handleinput} style={{ fontFamily: "cursive" }} />
        <button className="w-24 bg-slate-700 text-white rounded-md p-1" onClick={add}>AddFruit</button>
      </div>
    </div>

  </>)

}
export default App