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
          
        {/* <div id="about" className="flex flex-wrap sm:justify-center md:justify-start items-center my-28 w-full px-12">
          <h3 className="sectionHeadText font-bebas">Senaste Projekt</h3>
        </div>
        
        <div className="mt-4 flex flex-row items-center justify-center content-center ">         
          <h3 className="sectionSubText font-bebas text-3xl text-[#f3e1c7] content-center ">Mobil-appar</h3>
        </div>
          
        
          
          {mobileApps.map((project) => (
            <Preview key={project.title} project={project} />
          ))}
       
        <div className="mt-4 flex flex-row items-center justify-center content-center ">
          <h3 className="sectionSubText font-bebas text-2xl text-[#f3e1c7] content-center ">Hemsidor</h3>
        </div>
        
          
          {frontPagePreview.map((project) => (
            <Preview key={project.title} project={project} />
          ))} */}

      <section  className="flex flex-col justify-center items-start gap-4 mt-8 w-full px-12">     
        
        
        <h2 className="sectionHeadText font-bebas">Vem är jag?</h2>
        <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Jag är en före detta sjuksköterska som efter pandemin bestämde mig för att byta karriär. Jag har alltid haft ett intresse för teknik och design, 
          och efter att ha lärt mig grunderna i programmering och webbutveckling under min tid på Yrgo, förfinat de kunskaperna samt förädlat dem under min tid hos Scaffcalc,
          har jag nu börjat utforska arbetsmarknaden. Jag har en passion för att skapa användarvänliga och estetiskt tilltalande digitala lösningar och är absolut inte bunden till att enbart arbeta med att skapa hemsidor och appar.

          Jag är alltid nyfiken på att lära mig mer och ser fram emot att ta mig an nya utmaningar inom tech-branschen och kan lika gärna se mig som software developer som att arbeta på en webbyrå. Är du nyfiken på att veta mer om mig kan du läsa lite mer utförligt 
          på &#39;historia&#39; sidan. Jag är alltid öppen för nya möjligheter och samarbeten, så tveka inte att höra av dig om du har något spännande projekt i åtanke och tror att jag skulle passa in i det. 
        </p>
        
      </section>
        
      </div>

      <div className="text-center py-8 px-12 font-ibm text-primary-accent ">
            <p>Om du vill utforska alla mina olika hemsidor så kan du kolla på kollektion-sidan!</p>
      </div>

      <hr />
    </main>
  );
}