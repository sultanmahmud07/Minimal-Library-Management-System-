import { Outlet } from "react-router"
import Navbar from "./pages/Shared/Navbar/Navbar"
import Footer from "./pages/Shared/Footer/Footer"

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
