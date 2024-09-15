import { FaHtml5 } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { IoLogoCss3, IoLogoReact } from "react-icons/io5";
import { SiPhp } from "react-icons/si";
import { FaStackOverflow } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa6";


export default function Cv(){
    
    const technicalSkills = [
        { name: 'HTML', icon: FaHtml5, color: 'text-[#c95d2e]', progress: '70%' },
        { name: 'Javascript', icon: TbBrandJavascript, color: 'text-[#b0bc1e]', progress: '50%' },
        { name: 'CSS', icon: IoLogoCss3, color: 'text-[#147bbc]', progress: '58%' },
        { name: 'React', icon: IoLogoReact, color: 'text-[#69bcbc]', progress: '35%' },
        { name: 'PHP', icon: SiPhp, color: 'text-[#6F5091]', progress: '55%' },
        { name: 'Stack OverFlow', icon: FaStackOverflow, color: 'text-[#FFA500]', progress: '85%' },
      ];
    
      const professionalSkills = [
        { name: 'Samarbete', percentage: '90%', animationName: 'animate-path1' },
        { name: 'Problemlösning', percentage: '70%', animationName: 'animate-path2' },
        { name: 'Kreativitet', percentage: '70%', animationName: 'animate-path3' },
        { name: 'Kommunikation', percentage: '90%', animationName: 'animate-path4' },
      ];

    return(
       
        <main className="bg-[#081b29] text-white p-8 font-bebas">
            <div className="pt-12">  
                <h1 className="text-center text-5xl font-bold mb-4">
                    Mina <span className="text-[#0ef]">färdigheter</span>
                </h1>
                
                <section className="flex flex-wrap">
                    <div className="w-full p-10" id="skills">
                        <h2 className="text-center text-3xl font-bold mb-8 underline underline-offset-8 decoration-2">Tekniska kunskaper</h2>
                        <p className="text-center text-lg mb-8">En visuell presentation av min egen helt godtyckliga uppskattning av mina programmerings kunskaper.</p>
                        <div className="space-y-10">
                        {technicalSkills.map((skill, index) => (
                            <div key={index} className="relative">
                            <div className="flex items-center mb-2">
                                <skill.icon className={`${skill.color} w-6 h-6 mr-2`} />
                                <span className="text-lg animate-showText opacity-0">{skill.name}</span>
                            </div>
                            <div className="h-2 bg-black rounded-full">
                                <div 
                                className="h-full bg-[#0ef] rounded-full animate-animate origin-left"
                                style={{ width: skill.progress }}
                                ></div>
                            </div>
                            <span className="absolute right-0 top-0 text-sm bg-black px-2 py-1 rounded animate-showText opacity-0">{skill.progress}</span>
                            </div>
                        ))}
                        </div>
                    </div>

                    <div className="w-full p-10">
                        <h2 className="text-center text-3xl font-bold mb-8 underline underline-offset-8 decoration-2">Professionella kunskaper</h2>
                        <div className="flex flex-wrap justify-around">
                        {professionalSkills.map((skill, index) => (
                            <div key={index} className="w-1/2 mb-8 text-center mx-4">
                            <div className="relative inline-block">
                                <FaRegCircle className="w-32 h-32 text-[#0ef]" />
                                <svg className="w-32 h-32 absolute top-0 left-0" viewBox="0 0 32 32">
                                <circle
                                    cx="16"
                                    cy="16"
                                    r="14"
                                    fill="none"
                                    stroke="#0ef"
                                    strokeWidth="4"
                                    strokeDasharray="88"
                                    strokeDashoffset="88"
                                    transform="rotate(-90 16 16)"
                                    className={`animate-[animate-bar_1s_linear_forwards] ${skill.animationName}`}
                                />
                                </svg>
                                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-bold animate-showText opacity-0">
                                {skill.percentage}
                                </span>
                            </div>
                            <p className="mt-2 text-lg animate-showText opacity-0">{skill.name}</p>
                            </div>
                        ))}
                        </div>
                    </div>
                    </section>
                </div>

                <div className="mt-16">
                    <h2 className="text-center text-4xl font-bold text-[#0ef] mb-4">Curriculum Vitae</h2>
                    <iframe src="/PDF/HannesCV.pdf" className="w-full min-h-[600px]" />
                </div>
    
  
        </main>
    );
}