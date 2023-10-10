import { useNavigate } from 'react-router-dom'

const HomePage = (props) =>{
    const navigate = useNavigate()

    // See projects button
    const seeProjectsButton = () =>{

        return(
        
            <div onClick={()=>{navigate('/projects')}} id='see-projects-button' className="flex justify-center pt-[7px] lg:pt-[20px] w-[110px] h-[40px] lg:w-[220px] lg:h-[80px] bg-portfolio-red rounded-[10px]">
                
                <p className='text-[white] text-[20px] lg:text-[36px] font-awakenning antialiased'>See Projects</p>
            </div>
           
        )
    }





    return(
        <div id='hompage-div1' className="flex justify-center mt-[94px] w-[100%] min-h-[205px] h-auto border-black border-dashed border-[1px]">
            <div id='hp-div1-inner' className="w-[100%] max-w-[530px] min-h-[205px] h-auto mr-[20px] ml-[20px] border-black border-dashed border-[1px]">
                
                {/* Inner Content */}
                <div id='hp-div1-title' className="flex justify-center w-[100%] h-[35px] lg:h-[50px] border-black border-dashed border-[1px]">
                    <p className="font-awakenning antialiased text-[24px] md:text-[32px] lg:text-[48px] ">Hello, I am Bradley Parker</p>
                </div>
                <div id='hp-div1-summary' className="flex justify-center w-[100%] h-[75px] lg:h-[50px] text-[16px] md:text-[24px] border-black border-dashed border-[1px]">
                    <p className="text-center">A motivated full-stack developer that creates great products.</p>
                </div>
                <div id='hp-div1-button-container' className="flex justify-center pt-[47px] w-[100%] h-[95px] border-black border-dashed border-[1px]">
                    {seeProjectsButton()}
                </div>


            </div>
        </div>
    )
}

export default HomePage;