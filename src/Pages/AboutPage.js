
const AboutPage = () =>{
    const skills = ['HTML','CSS','JavaScript','React','MongoDb','Express','Git','Unix','Python']
    return(
        <div id='aboutpage-container'>

            {/* About Content */}
            <div id='aboutpage-div1' className="flex justify-center mt-[94px] w-[100%]  h-[auto]  border-black border-dashed border-[1px]">
                <div id='ap-div1-inner' className="w-[100%] max-w-[530px]  h-[auto] mr-[20px] ml-[20px]  border-black border-dashed border-[1px]">
                    

                    <div id='ap-div1-title' className="flex justify-center w-[100%] h-[auto]  border-black border-dashed border-[1px]">
                        <p className="font-awakenning antialiased text-[32px] md:text-[36px] md-lg:text-[42px] lg:text-[48px]  border-black border-dashed border-[1px]">About</p>
                    </div>
                    <div id='ap-div1-summary' className="flex justify-center w-[100%]  h-[auto]  text-[16px] md:text-[24px] mt-[30px]  border-black border-dashed border-[1px]">
                        <p className="text-center">This section touches on my background, interests, and skills.</p>
                    </div>
                </div>


            </div>

            {/* Background, Interests and Skills Content */}
            <div id='ap-div1-content-container' className="mt-[90px] pr-[20px] pl-[20px] mb-[105px] lg:flex w-[100%]  border-black border-dashed border-[1px]">
                <div id='background-interests' className="lg:mr-[150px] min-h-[365px] h-[auto] max-w-[555px] w-[100%] mb-[40px]  border-black border-dashed border-[1px]">
                    <div id='bi-title' className="h-[auto] w-[100%] font-awakenning antialiased text-[24px] border-black border-dashed border-[1px]">
                        <p>My Background and Interests</p>
                    </div>
                    <div id='bi-content' className="text-[14px] md:text-[16px] ">
                        <p className="text-left leading-[30px]">I like coding, and I enjoy creating applications that people will use.  I began my web development journey after completing a MBA program.   I went to a bootcamp that spanned 14 months; it consisted of 11 months of full-stack development, and 3 months of Python development.  As a hobby, I like to study the Linux operating system, and other programming languages.   I hope to one day create or contribute to an open-source project.  I also have an interest in entrepreneurship.</p>
                    </div>
                </div>
                <div id='skills' className="min-h-[270px] h-[auto] w-[100%] border-black border-dashed border-[1px]">
                    <div id='skills-title' className="h-[auto] w-[100%] font-awakenning antialiased text-[24px] border-black border-dashed border-[1px]">
                        <p>Skills</p>
                    </div>
                    <div>

                    </div>
                </div>                    
            </div>
        </div>
    )
}

export default AboutPage;