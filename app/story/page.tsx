import Image from 'next/image';
import Slider from '@/components/Slider';
import giphy from '@/public/Giphy/giphy.gif';

export default function Story(){

    return(
        <main>
            <div className="relative text-primary-accent flex flex-row flex-wrap justify-center items-center mx-auto p-20 gap-12 top-8">
                <section className="divider">
                    <span>
                        <h1 className="mb-8 text-4xl font-ibm">
                            A life in the shadows
                        </h1>
                    </span>                   
                    <span className="flex flex-row flex-wrap justify-center gap-4 font-bebas">
                        <p className='text-primary-accent text-xl '>
                            About 20 years. Thats how long I have worked as a nurse in the hospital by night.
                            There have been ups and there have been downs. From the beginning as a novice learning the trade,
                            To big anticlimax that was the global pandemic. I&rsquo;ve pushed myself through one of the toughest further education
                            there is for a nurse in sweden and became an specialist nurse in anesthesia 2016.  
                        </p>                        
                        <div className=" border-wrapperWhite">
                        
                            <div className="border-wrapperBlack1">
                                <div className="border-wrapperWhite">
                                    <div className="border-wrapperBlack2">                                    
                                        <div className="flex justify-center items-center shadow-md overflow-hidden">
                                            <Image 
                                                src={giphy} 
                                                alt="mixing antibiotic at night" 
                                                layout='responsive'
                                                width={628}
                                                height={353}                                                 
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p className='text-primary-accent text-xl '>
                            Always awake when everybody else was asleep. Butchering my own social-life in the progress. 
                            Now I&rsquo;ve come to the conclusion that I need something else in my life. Seeing as I&rsquo;ve always 
                            had an interest and passion for programming and computer in general, the choice was easy. 
                            So in january of 2023 I wrote my very first &ldquo;Hello World&ldquo;! 
                        </p>

                        <p className='text-primary-accent text-xl '>
                            From that point everything started to move very fast. I had to provide eligibility for most of the 
                            educations I had in mind, so the very first step was to enroll in an pre eligibility class for adults. 
                            I hadn&rsquo;t even gotten my grades when the big eligibility tests for the actual code Academy came around.
                            To actual pass the exams and get admitted did&rsquo;nt feel as an possibility for me at the time.
                            But Lo and behold, I did!
                        </p>
                    </span>
                    
                </section>
                <section className="divider">
                    <span><h1 className="mb-8 text-4xl font-ibm">A new life</h1></span>
                    <span className="flex flex-row flex-wrap justify-center gap-4 font-bebas">
                        <p className='text-primary-accent text-xl '>
                        So back to the school life for me it was! Having 4 years of university studies in the back I do have some experience in how to study.
                        But what dont have is programming experience. As I said earlier I wrote my first &ldquo;Hello World&ldquo; about 4 months before I got in at Yrgo school. 
                        Lucky me, that I have fell in love with programming. Safe to say that Im doing my best to try and level the playing field sort of say. I spend almost all my 
                        waking hours at the computer either programming or watching tutorials. I dont even see it as a choir, I love it and choose it over playing video games! I cant wait for
                        getting to write &ldquo;real&ldquo; programs and websites for real customers! 
                        </p>
                    </span>
                </section>

            <section className="divider">
                    <span className="flex flex-row flex-wrap justify-center gap-4 font-bebas">
                    
                        <p className='text-primary-accent text-xl '>
                        In my spare time I love the outdoors! I take every chance I get to go out in the woods, camping and fishing or just hiking.
                        I have a little companion in the form of my dog Billy Bob Thornton. If I could I would also take my cats, but always
                        they dont enjoy the outdoors as much as I do! 
                        </p>

                        

                        <p className='text-primary-accent text-xl '>
                        I live with my beautiful wife and 2 daughters. We try to travel and see the world as often as we can. 
                        unfortunately the kids are growing and doesn&rsquo;t seem to want to spend as much time with their old parents as they
                        used to do. 
                        </p>

                        

                        <p className='text-primary-accent text-xl '>
                        I very much enjoy my Sage barista master. Its an manuel espresso brewer that brews a perfect espresso. It
                        takes a bit of training, but the journey was well worth it as Im now enjoying café quality coffee every day!
                        </p>

                        

                        <p className='text-primary-accent text-xl '>
                        Other than that, it isn&rsquo;t really much left to tell you about myself. I play videogames, I love football (änglarna),
                        and enjoy the family life! Hopefully well get to know one another soon enough when you hire me! 
                        </p>

                        
                    </span>
                </section>
                
                <div className="border-wrapperWhite">
                    <div className="border-wrapperBlack1">
                        <div className="border-wrapperWhite">
                            <div className="border-wrapperBlack2">    
                                <div className="h-[100svh] w-[90svw] m-0 overflow-hidden relative bg-default-bg ">
                                    <Slider />                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}