import Preview from "@/components/Preview";
import { frontPagePreview } from "../lib/objects";



export default function Home() {
  return (
    <main>
      <div className="outer-white">
        <div className="outer-black-thick">
          <div className="outer-white-thin">
            <div className="outer-black-thin">
           
              <div className="flex flex-col justify-between h-[85svh] bg-heroBg bg-pos relative bg-no-repeat bg-cover bg-center rounded-[22px]">
                              
                <div className="flex relative justify-center items-center flex-col w-full md:w-[40%] md:ml-0 py-8 px-12   ">

                  <div className="font-ibm text-primary-accent">                  

                    <div>
                      <h1 className="text-5xl m-0">WELCOME</h1>
                      <p className="text-xl m-0">To Hannes Alexanderssons portfolio</p>
                    </div>

                    <div className="my-5 mx-0">
                      This is where I store my collection of &rdquo;websites&rdquo; that I have done so far. Please feel free to look around. If you want to get in touch, dont hesitate to send me an e-mail or something!
                    </div>
                  </div>
                  

                </div>
                <div className="flex justify-center items-center md:justify-start md:px-12 mb-12">
                    <a className="font-grandstander" href='mailto:s103154@gmail.com?subject=I want you to come work for me!'>
                      <span className="mailMe">
                        <button className="btn-cta hover:bg-[#f3e1c7] hover:text-[#161415] hover:scale-105 bg-[#161415] text-[#f3e1c7] py-[10px] px-[20px] border-[2px] border-[#f45325] rounded-[5px] cursor-pointer">Get In Touch</button>
                      </span>
                    </a>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-20 mb-40 flex justify-center items-center flex-col ">
          
          <div className="flex justify-center items-center mt-8 mb-4">
            <h2 className="text-5xl font-ibm text-[#f3e1c7]">Recent projects:</h2>
          </div>
          
        <div className="mt-4 flex items-center justify-center content-center flex-col gap-14 px-4 md:px-32">   

          {frontPagePreview.map((project) => (
            <Preview key={project.title} project={project} />
          ))}

        </div>
      </div>

      <div className="text-center py-8 px-12 font-ibm text-primary-accent ">
            <p>if you want to explore all of the different sites, then head over to the collection page!</p>
      </div>

      <hr />
    </main>
  );
}
