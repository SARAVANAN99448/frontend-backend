import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Signup from './components/Signup.jsx'
import Login from './components/Login.jsx'
createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <Routes>
    <Route path='/' element={<Signup/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='app' element={<App/>}></Route>
 </Routes>
 </BrowserRouter>
)
