import NavBar from "../Components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
const Layout = (props) =>{
    return(
        <div id ='layout'>
            <NavBar/>
            <Outlet/>
        </div>
    )
}

export default Layout;