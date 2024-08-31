import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { Navigate } from "react-router-dom"
const Login =()=>{
    const [username,setusername]=useState()
    const [password,setpassword]=useState()
    const navigate =useNavigate()
    const handleusername=(evt)=>{
        setusername(evt.target.value)
    }
    const handlepassword=(evt)=>{
        setpassword(evt.target.value)
    }
    const check=()=>{
       const details=axios.post("http://localhost:5000/login",{"username":username,"password":password})
        details.then(function(data){
            if(data.data==true){
                navigate('/app')
            }
        })
    }
    return(<>
     <div className="flex justify-center p-10 items-center bg-slate-800" style={{ height: "641px" }}>
            <div className=" bg-[#7deeca] p-10  text-center rounded-md">
                <h1 className="font-bold text-3xl">Hi you there</h1><br />
                <input className="outline-none p-1 rounded-md" onChange={handleusername} value={username} type="text" placeholder="Username" /><br /><br />
                <input className="outline-none p-1 rounded-md" onChange={handlepassword} value={password} type="text" placeholder="Password" /><br /><br />
                <input  className="outline-none p-1 rounded-md" type="number" placeholder="Mobile Number" /><br /><br />
                <button className="bg-black text-white p-1.5 rounded-md mb-2" onClick={check}>Login</button>
            <p>Don't have an account? <Link className="underline" to={'/'}>Signup</Link></p>
            </div>


        </div>
    </>)

}
export default Login