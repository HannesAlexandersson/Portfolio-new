import Preview from "@/components/Preview";
import { frontPagePreview, mobileApps } from "../lib/objects";
import Hero from "@/components/Hero";



export default function Home() {
  return (
    <main>
      
      <div className="bg-secondary-pattern bg-cover bg-no-repeat bg-center w-screen h-[100svh]">

      <Hero />
      
      </div>
      
      <div id="welcome" className="mt-20 mb-40 flex justify-center items-center flex-col ">

        <section  className="flex flex-col justify-center items-start gap-4 mt-8 w-full px-12">     
        
          <p className="sectionSubText font-bebas text-[#f3e1c7] ">Välkommen till min</p>
          <h2 className="sectionHeadText font-bebas">portfolio!</h2>
          <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
            Den här sidan fungerar som ett sorts CV samt en kartläggning över alla projekt
            jag varit delaktig i under min tid hos Yrgo. Under kollektionssidan hittar du projekten, men ett axplock får 
            du se här nedanför. Om du vill komma i kontakt med mig så kan du göra det via kontaktsidan.
          </p>
          
        </section>
          
          <div id="about" className="flex flex-wrap justify-center items-center mt-28 w-full">
            <h3 className="sectionHeadText font-bebas">Senaste Projekt</h3>
          </div>

          <div className="mt-4 flex flex-row items-center justify-center content-center ">         
            <h3 className="sectionSubText font-bebas text-2xl text-[#f3e1c7] content-center ">Mobil-appar</h3>
          </div>
          <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-14 px-4 items-start justify-items-center">
            
            {mobileApps.map((project) => (
              <Preview key={project.title} project={project} />
            ))}
          </div>
          <div className="mt-4 flex flex-row items-center justify-center content-center ">
            <h3 className="sectionSubText font-bebas text-2xl text-[#f3e1c7] content-center ">Hemsidor</h3>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-14 px-4 items-start justify-items-center">
            
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