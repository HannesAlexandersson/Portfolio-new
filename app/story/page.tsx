
import Slider from '@/components/Slider';
import { images } from '@/lib/objects';
import { storyIntro, storyTextSections, storySub1, storySub2, storySub3 } from '@/lib/constants';
import StoryBoard from '@/components/StoryBoard';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/lib/constants';
import Experience from '@/components/Timeline';


export default function Story(){

    return(
        
        <main className="relative text-primary-accent flex flex-row flex-wrap justify-center items-center section-contain">
            <section className="mt-32 w-full">
                   

               <StoryBoard textsections={storyIntro} />
                 
               </section>

               <section className="mt-32">
                <div className="border-wrapperWhite mt-12">
                    <div className="border-wrapperBlack1">
                        <div className="border-wrapperWhite">
                            <div className="border-wrapperBlack2">    
                                <div className="h-[80svh] w-[90svw] m-0 overflow-hidden relative bg-default-bg rounded-[22px] ">                                    
                                    <Slider images={images} />                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-16 w-full">
                <StoryBoard textsections={storySub1} />
            </section>

            <section className="mt-16 w-full">
                <StoryBoard textsections={storySub2} />
                <div className="mt-20 flex flex-wrap gap-10 ">
                    {services.map((service, index) => (
                    <ServiceCard key={index} index={index} {...service} />
                    ))}
                </div>
            </section>

            <section className="mt-16 w-full">
                <StoryBoard textsections={storySub3} />
            </section>

            <section className="mt-16 w-full h-full">
                <Experience />
            </section>
        </main>
    );
}