import { FaHtml5 } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { IoLogoCss3, IoLogoReact } from "react-icons/io5";
import { SiPhp } from "react-icons/si";
import { FaStackOverflow } from "react-icons/fa";


export default function Cv(){

    return(
        <main className="bg-[#fff] m-0 p-0 font-bebas">
            <div className="pt-12">  
                <h1 className="text-center text-7xl pb-3 pt-4">
                    My <span className="text-[#0ef]">skills</span>
                </h1>
                
                <section>
                    <div className="w-full p-[2.5rem]" id="skills">
                        <h1 className="text-center underline underline-offset-[.5rem] mb-8 ">Technical skills</h1>
                        <p className="font-ibm text-center text-xl pt-0 px-4 pb-3">A visual representation of my own estimate of my programming skills. Based off my near pears at school</p>
                       
                        <div className="Technical-bars my-10 mx-0">

                            <div className="bar text-xl first:mt-0 last:mb-0"><FaHtml5 className="fill-[#c95d2e]"/>  

                                <div className="indfo"> 
                                    <span className="text-[1.1em] font-medium opacity-0 animate-showText">HTML</span>                       
                                </div>
                            

                                <div className="progress-line  html relative rounded-[10px] h-[0.275rem] bg-black origin-left animate-animate">
                                
                                    <span className="h-full w-[80%] bg-[#0ef] absolute rounded-[10px] animate-animate origin-left "></span>
                                </div>

                            </div>

                            <div className="bar text-xl first:mt-0 last:mb-0">
                                <TbBrandJavascript className="fill-[#b0bc1e]" />   

                                <div className="indfo">   
                                    <span className="text-[1.1em] font-medium opacity-0 animate-showText">Javascript</span>                        
                                </div>
                            
                                <div className="progress-line javascript">
                                    <span className="h-full w-[65%] bg-[#0ef] absolute rounded-[10px] animate-animate origin-left"></span>
                                </div>

                            </div>
                            
                            <div className="bar text-xl first:mt-0 last:mb-0">
                            <IoLogoCss3 className="fill-[#147bbc]"/>  

                                <div className="indfo">   
                                    <span className="text-[1.1em] font-medium opacity-0 animate-showText">CSS</span>                        
                                </div>
                            
                                <div className="progress-line css">
                                    <span className="h-full w-[60%] bg-[#0ef] absolute rounded-[10px] animate-animate origin-left"></span>
                                </div>

                            </div>

                            <div className="bar text-xl first:mt-0 last:mb-0">
                            <IoLogoReact color="#69bcbc" />       

                                <div className="indfo">    
                                    <span className="text-[1.1em] font-medium opacity-0 animate-showText">React</span>                       
                                </div>
                            
                                <div className="progress-line react">
                                    <span className="h-full w-[50%] bg-[#0ef] absolute rounded-[10px] animate-animate origin-left"></span>
                                </div>

                            </div>

                            <div className="bar text-xl first:mt-0 last:mb-0">
                            <SiPhp color="#6F5091"/>      

                                <div className="indfo">        
                                    <span className="text-[1.1em] font-medium opacity-0 animate-showText">PHP</span>                   
                                </div>
                            
                                <div className="progress-line php">
                                    <span className="h-full w-[70%] bg-[#0ef] absolute rounded-[10px] animate-animate origin-left"></span>
                                </div>

                            </div>
                            
                            <div className="bar text-xl first:mt-0 last:mb-0">
                            <FaStackOverflow color="#FFA500" />      

                                <div className="indfo">        
                                    <span className="text-[1.1em] font-medium opacity-0 animate-showText">Stack OverFlow</span>                   
                                </div>
                            
                                <div className="progress-line SOF">
                                    <span className="h-full w-[50%] bg-[#0ef] absolute rounded-[10px] animate-animate origin-left"></span>
                                </div>

                            </div>
                        </div>

                    </div>

                    

                    <div className="container1 w-full p-10 ">
                        <h1 className="heading text-center underline underline-offset-[.5rem] mb-8">Proffessional skills</h1>
                        <div className="radial-bars">

                            <div className="radial-bar">
                                <svg x="0px" y="0px" viewBox="0 0 200 200">
                                    <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                                    <circle className="path path-1" cx="100" cy="100" r="80"></circle>
                                </svg>
                                <div className="percentage">90%</div> 
                                <div className="text">Teamwork</div> 
                            </div>

                            <div className="radial-bar">
                                <svg x="0px" y="0px" viewBox="0 0 200 200">
                                    <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                                    <circle className="path path-2" cx="100" cy="100" r="80"></circle>
                                </svg>
                                <div className="percentage">70%</div> 
                                <div className="text">Problem Solving</div> 
                            </div>

                            <div className="radial-bar">
                                <svg x="0px" y="0px" viewBox="0 0 200 200">
                                    <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                                    <circle className="path path-3" cx="100" cy="100" r="80"></circle>
                                </svg>
                                <div className="percentage">70%</div> 
                                <div className="text">Creativity</div> 
                            </div>

                            <div className="radial-bar">
                                <svg x="0px" y="0px" viewBox="0 0 200 200">
                                    <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                                    <circle className="path path-4" cx="100" cy="100" r="80"></circle>
                                </svg>
                                <div className="percentage">90%</div> 
                                <div className="text">Communication</div> 
                            </div>


                        </div>
                    </div>

                        
                </section>
            </div>



            <div className="outer-ram">
                <h1 className="website-title default-font">Curriculum Vitae</h1>
                <embed src="src/Assets/docs/HannesCV(6).pdf" type="application/pdf" width="100%" height="600px" />
            </div>
        </main>
    );
}