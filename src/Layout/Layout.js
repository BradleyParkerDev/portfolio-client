import NavBar from "../Components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'

const Layout = (props) =>{
    return(
        <div id ='layout' className="relative min-h-screen flex flex-col">
            <NavBar/>
            <div className="flex-grow">
                <Outlet />
            </div>
            <div id='social-media' className="flex justify-end pr-[15px] lg:pr-[36px] mb-4  ">
                <a href="https://github.com/BradleyParkerDev" target="_blank" rel="noopener noreferrer">
                    <img src={github} className="h-[40px] w-[40px] mr-[11px]"  alt="GitHub"/>
                </a>

                <a href="https://www.linkedin.com/in/bradleyparkerdev/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} className="h-[40px] w-[40px]" alt="LinkedIn"/>                
                </a>
            </div>

            
        </div>
    )
}

export default Layout;


// import NavBar from "../Components/NavBar/NavBar";
// import { Outlet } from "react-router-dom";
// import github from '../images/github.png';
// import linkedin from '../images/linkedin.png';

// const Layout = (props) => {
//     return (
//         <div id='layout' className="relative min-h-screen flex flex-col">
//             <NavBar />
//             <div className="flex-grow">
//                 <Outlet />
//             </div>
//             <div id='social-media' className="flex justify-end mt-auto mb-4 mr-4">
//                 <a href="https://github.com" target="_blank" rel="noopener noreferrer">
//                     <img src={github} className="h-8 w-8 mx-2" alt="GitHub" />
//                 </a>
//                 <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
//                     <img src={linkedin} className="h-8 w-8 mx-2" alt="LinkedIn" />
//                 </a>
//             </div>
//         </div>
//     );
// }

// export default Layout;

