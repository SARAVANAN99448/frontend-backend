import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
const Signup = () => {
    const [username, setusername] = useState()
    const [password, setpassword] = useState()
    const navigate = useNavigate()
   
    const handleusername = (evt) => {
        setusername(evt.target.value)
       
    }

    const handlepassword = (evt) => {
        setpassword(evt.target.value)
    }

    const check = () => {
        var details = axios.post("http://localhost:5000/d", { "username": username, "password": password })
       navigate("/login")
    }



    return (<>
        <div className="flex justify-center p-10 items-center bg-slate-800" style={{ height: "641px" }}>
            <div className=" bg-[#7deeca] p-10  text-center rounded-md">
                <h1 className="font-bold text-3xl">Hi you there</h1><br />
                <input className="outline-none p-1 rounded-md name" onChange={handleusername} value={username} type="text" placeholder="Username" /><br />
                <span className="nameerror text-red-600"></span><br />
                <input className="outline-none p-1 rounded-md" onChange={handlepassword} value={password} type="text" placeholder="Password" /><br /><br />
                <input className="outline-none p-1 rounded-md" type="text" placeholder="Confrim Password" /><br /><br />
                <button className="bg-black text-white p-1.5 rounded-md mb-3" onClick={check}>Signup</button>
                <p>Already have an account? <Link className="underline" to={'/login'}>Login</Link></p>
            </div>



        </div>
    </>)

}
export default Signup