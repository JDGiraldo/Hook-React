import { UserProvider } from "./context/UserProvider";
import { Navigate, Route, Routes, Link } from "react-router-dom"
import {HomePage} from './HomePage';
import { AboutPage} from './AboutPage';
import {LoginPage} from './LoginPage';
import { Navbar } from "./Navbar";

export const MainApp = () => {
  return (
    <UserProvider>
    {/* <h1>MainApp</h1> */}
    <Navbar/>
    <hr />
    
    <Routes>
      <Route path="/" element={ <HomePage/> }/>
      <Route path="About" element={ <AboutPage/> }/>
      <Route path="login" element={ <LoginPage/> }/>

      {/* <Route path="/*" element={ <LoginPage/> }/> */}
      <Route path="/*" element={ <Navigate to="/About" /> }/>
    </Routes>
    </UserProvider>
  )
}
