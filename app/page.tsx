import Preview from "@/components/Preview";
import { frontPagePreview } from "../lib/objects";
import Hero from "@/components/Hero";



export default function Home() {
  return (
    <main>
      
      <div className="bg-secondary-pattern bg-cover bg-no-repeat bg-center w-screen h-[100svh]">

      <Hero />
      
      </div>
      
      <div className="mt-20 mb-40 flex justify-center items-center flex-col ">

        <section className="flex flex-col justify-center items-start gap-4 mt-8 w-full px-12">     
        
          <p className="sectionSubText font-bebas text-[#f3e1c7] ">Välkommen till min</p>
          <h2 className="sectionHeadText font-bebas">portfolio!</h2>
          <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
            Den här sidan fungerar som ett sorts CV samt en kartläggning över alla projekt
            jag varit delaktig i. Under kollektionssidan hittar du projekten, men ett axplock får 
            du se här nedanför. Om du vill komma i kontakt med mig så kan du göra det via kontaktsidan.
          </p>
          
        </section>
          
          <div id="about" className="flex flex-wrap justify-center items-center mt-28 w-full">
            <h3 className="sectionHeadText font-bebas">Projekt</h3>
          </div>
          
        <div className="mt-4 flex items-center justify-center content-center flex-col gap-14 px-4 md:px-12">   

          {frontPagePreview.map((project) => (
            <Preview key={project.title} project={project} />
          ))}

        </div>
      </div>

      <div className="text-center py-8 px-12 font-ibm text-primary-accent ">
            <p>Om du vill utforska alla mina olika sidor så kan du kolla på kollektion-sidan!</p>
      </div>

      <hr />
    </main>
  );
}

{/*OLD HERO
            <div className="outer-white mr-8">
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
*/}