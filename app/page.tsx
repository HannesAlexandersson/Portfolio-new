import Hero from "@/components/Hero";
import Preview from "@/components/Preview";
import { frontPagePreview, mobileApps } from "../lib/objects";



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
            Den här portfolion fungerar som ett sorts CV samt en kartläggning över diverse projekt
            jag varit delaktig i. Om du vill komma i kontakt med mig så kan du göra det via kontaktsidan eller skicka ett mail.
          </p>
          
        </section>

      <section  className="flex flex-col justify-center items-start gap-4 mt-8 w-full px-12">     
        
        
        <h2 className="sectionHeadText font-bebas">Vem är jag?</h2>
        <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Jag är en före detta sjuksköterska som efter pandemin bestämde mig för att byta karriär. Jag har alltid haft ett intresse för teknik och design, 
          och efter att ha lärt mig grunderna i programmering och webbutveckling under min tid på Yrgo, förfinat de kunskaperna samt förädlat dem under min tid hos Scaffcalc,
          har jag nu börjat utforska arbetsmarknaden. Jag har en passion för att skapa användarvänliga och estetiskt tilltalande digitala lösningar.

          Jag är alltid nyfiken på att lära mig mer och ser fram emot att ta mig an nya utmaningar inom tech-branschen. Är du nyfiken på att veta mer om mig kan du läsa lite mer utförligt 
          på &#39;historia&#39; sidan. Jag är alltid öppen för nya möjligheter och samarbeten, så tveka inte att höra av dig om du har något spännande projekt i åtanke och tror att jag skulle passa in i det. 
        </p>
        
      </section>
        
      </div>

      <div className="text-center py-8 px-12 font-ibm text-primary-accent ">
            <p>Spana in kollektions sidan om du vill gå direkt till mina projekt!</p>
      </div>

      <hr />
    </main>
  );
}