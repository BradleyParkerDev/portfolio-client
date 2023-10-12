
const AboutPage = () =>{
    const skills = ['HTML','CSS','JavaScript','React','MongoDb','Express','Git','Unix','Python']
    return(
        <div id='aboutpage-div1' className="flex justify-center mt-[94px] w-[100%] min-h-[205px] h-auto">
            <div id='ap-div1-inner' className="w-[100%] max-w-[530px] min-h-[205px] h-auto mr-[20px] ml-[20px]">
                
                {/* Inner Content */}
                <div id='ap-div1-title' className="flex justify-center w-[100%] h-[35px] lg:h-[50px]">
                    <p className="font-awakenning antialiased text-[32px] md:text-[36px] md-lg:text-[42px] lg:text-[48px] ">About</p>
                </div>
                <div id='ap-div1-summary' className="flex justify-center w-[100%] min-h-[75px] h-[auto] lg:h-[50px] text-[16px] md:text-[24px] mt-[30px]">
                    <p className="text-center">This section touches on my background, interests, and skills.</p>
                </div>
                <div id='ap-div1-content-container' className="lg:flex">
                    <div id='background-interests'>

                    </div>
                    <div id='skills'>

                    </div>                    
                </div>


            </div>
        </div>
    )
}

export default AboutPage;