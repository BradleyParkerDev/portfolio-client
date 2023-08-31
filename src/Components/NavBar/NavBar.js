import bradleyPhoto from '../../images/Bradley Photo.png'
import hamburger from '../../images/Hamburger.png'
import reject from '../../images/reject.png'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
const NavBar = (props) =>{
    const [sideNavWidth, setSideNavWidth] = useState('0px')


    const openNav = () => {
        setSideNavWidth('100%')
        console.log(sideNavWidth)

    }

    const closeNav = () => {
        setSideNavWidth('0px')

    }

    const handleNav = (pageName) => {

        navigate(`${pageName}`)
        closeNav()

    }












    const navigate = useNavigate()
    return(
        <div>

            {/* Hidden Side Nav */}
            <div id = 'side-nav' style={{width: `${sideNavWidth}`, transition:'0.5s'}} className='lg:w-[0px] top-0 right-0 h-full bg-white z-10 duration-500 overflow-x-hidden fixed '>
                <img className='h-[25px] w-[25px]' src={reject} onClick={()=>{closeNav()}}/>
            </div>



            {/* Visible NavBar */}
            <div id='navbar-container' className=" flex font-awakenning  border-black border-dashed border-[1px]">
                <div id='logo' className='flex min-w-[235px] md:min-w-[275px]'>
                    <div id='nav-photo'>
                        <img className='h-[65px] w-[65px] md:h-[75px] md:w-[75px] ml-[8px] mt-[9px] md:mt-[29px] ' src={bradleyPhoto}/>
                    </div>
                    <div id='nav-name' className=' ml-[23px] mt-[30px] md:mt-[57px] text-[24px] h-[24px] md:text-[32px] md:h-[32px] border-black border-dashed border-[1px]'>
                        <p>
                            Bradley Parker
                        </p>
                    </div>                
                </div>

                {/*Desktop - Home, About, Projects, and Contact visible */}
                <div id='nav-links-desktop' className='hidden lg:contents '>
                    <div className='flex justify-end w-[100%] pt-[57px] border-black border-dashed border-[1px]' style={{fontSize:'32px', lineHeight:'32px'}}>
                        <p className='mr-[36px]  border-black border-dashed border-[1px]'>
                            Home 
                        </p>
                        <p className='mr-[27px]'>
                            About 
                        </p>
                        <p className='mr-[27px]'>
                            Projects 
                        </p>  
                        <p className='mr-[60px]'>
                            Contact 
                        </p>                      
                    </div>
                </div>
                {/* Mobile and Tablet - Hamburger Menu Button Visible  */}
                <div id='nav-hamburger' className='lg:hidden flex justify-end w-[100%] border-black border-dashed border-[1px]'>
                    <img className='h-[45px] w-[45px] mr-[18px] mt-[19px] md:mt-[36px] ' src={hamburger} onClick={()=>{openNav()}}/>

                </div>
            </div>


        </div>

    )
}

export default NavBar;