import Preview from "@/components/Preview";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="outer-white">
        <div className="outer-black-thick">
          <div className="outer-white-thin">
            <div className="outer-black-thin">
           
              <div className="h-[85svh] bg-heroBg bg-pos relative bg-no-repeat bg-cover bg-center border-[22px]">
                              
                <div className="flex relative justify-center items-center flex-col w-[40%] py-8 px-12  ">

                  <div className="font-ibm text-primary-accent">                  

                    <div>
                      <h1 className="text-5xl m-0 shadow-md">WELCOME</h1>
                      <p className="text-xl m-0 shadow-md">To Hannes Alexanderssons portfolio</p>
                    </div>

                    <div className="my-5 mx-0 shadow-md">
                      This is where I store my collection of "websites" that I have done so far. Please feel free to look around. If you want to get in touch, dont hesitate to send me an e-mail or something!
                    </div>
                  </div>
                  

                </div>
                <div className="bottom-16 left-16 absolute ">
                    <a className="font-grandstander" href='mailto:s103154@gmail.com?subject=I want you to come work for me!'><span class="mailMe"><button class="btn-cta">Get In Touch</button></span></a>
                  </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-20 mb-40 flex justify-center items-center flex-col ">
          
          <div className="">
            <h2 className="text-3xl font-ibm">Recent projects:</h2>
          </div>
          
        <div className="mt-4 flex items-center justify-center content-center flex-col gap-14">   

          {projects.map((project) => (
            <Preview key={project.title} project={project} />
          ))}


          {/* <div className="flex flex-col content-center justify-center items-center">          
            <div className="w-[75%] text-primary-accent text-xl font-ibm">          
              <h4 className="mb-2 text-4xl"><a href="https://liameetup.vercel.app/">Branchevent</a></h4>
              <p className="mb-2 text-xl">
                Why dont start with the latest project? In Branchevent The webdevs and 
                the digital designers joined forces to develop an application for the big LIA 
                (internship) event hosted by Yrgo. Each group where
                to develop their own interpretation of Yrgos style, while still submit and operational 
                sign up application. We developed an matching app where the students could match 
                with the companies attending to find the companies that liked the same techstachs 
                as the students. Its built in react for the frontend and we built an node express 
                rest api for the backend
              </p>
            </div>
            <Link className="contents" href="https://liameetup.vercel.app/">
              <Image 
                className="w-[29%]" 
                src="src/Assets/screens/branchevent.svg" 
                alt="screenshot of branchevent website" 
                layout="responsive" 
                width={308} 
                height={282}
              />
            </Link>
          </div>
            
          <div className="flex flex-col content-center justify-center items-center">
            <div className="w-[75%] text-primary-accent text-xl font-ibm">
              <h4 className="mb-2 text-4xl">
                <a href="https://www.alexanderochson.se/Protech/">
                  Protech
                </a>
              </h4>
              <p className="mb-2 text-xl">
                Protech was a joint effort project in wich we, the web devs, 
                joined forces with the Digital Design and Graphical Artist students to create a landing 
                page for a fictive product. the GA-students created the products, the designers designed 
                the layout, and we the web devs made it a reality! Since this was early on the stach 
                only contain html, css and vanilla JS. 
                
                Unfortunatly I dont have hosting for my php projects atm.
              </p>
            </div>                      
            <Link className="contents" href="https://www.alexanderochson.se/Protech/">
              <Image 
                className="w-[29%]" 
                src="src/Assets/screens/Group 66.svg" 
                alt="screenshot of protech website"
                layout="responsive" 
                width={308} 
                height={282}
              />
            </Link>               
          </div>
          <div className="screen-inner-container">
            <div className="screen-text default-font">
              <h4 className="mb-2 text-4xl">
                <Link href="https://www.alexanderochson.se/Retronautica/">
                Retronautica
                </Link>
              </h4>
              <p className="mb-2 text-xl">
                Retronautica was a project in the course Digital Design where we was supposed to 
                create a website for our own dream cinema. Me and my project partner Liv both 
                love fantasy and science fiction, so ofcourse we made a science fiction cinema 
                who only plays old classics! It contains a landing page and a event page for 
                2000 A space odysee´. Again very early work and thus a lightweight stach of 
                html, css and JS
              </p>
            </div>                
            <Link className="screenLinks" href="https://www.alexanderochson.se/Retronautica/">
              <Image 
                  className="w-[29%]" 
                  src="src/Assets/screens/Group 63.svg" 
                  alt="screenshot of retronautica website"
                  layout="responsive" 
                  width={308} 
                  height={282}
                />
            </Link>
          </div>
          <div className="screen-inner-container">
            <div className="screen-text default-font">
              <h4><a href="https://www.alexanderochson.se/Yrgopelago/">Yrgopelago</a></h4>
              <p>Yrgopelago was a project we had over christmas 2023. It was a contest among the students of the class, where we each made a fictive hotel in the  fictive archopelago of Yrgopelago. We then all got 100 dollars each wich we could then spend on eachothers hotels. The student who had the most money on the end of the day won! In this project I used php and sqlite to handle the backend while the frontend is basic html and css with a little JS sprinkled in</p>
            </div>
              <a className="screenLinks" href="https://www.alexanderochson.se/Yrgopelago/">
                <img className="screen" src="src/Assets/screens/Group 62.svg" alt="screenshot of yrgopelago website"/>
              </a>
          </div>
          <div className="screen-inner-container">
            <div className="screen-text default-font">
              <h4>
                <a href="https://tictactoe-five-vert.vercel.app/">
                  ic Tac Toe
                </a>
              </h4>
              <p>If you get bored here, why dont head over to my first ever react application? Its currently hosted over at Vercel and is a very simple little tic tac toe game, where two players can play eachother. Its nothing fancy, nothing amazing, but still, creating a tic tac toe with React is for what i have heard a very common interview question for many tech companys. So here is mine!!!</p>
            </div>
            <a className="screenLinks" href="https://tictactoe-five-vert.vercel.app/">
              <img className="screen" src="src/Assets/screens/Group 86.svg" alt="screenshot of tic tac toe website"/>
            </a> 
          </div> */}

        </div>
      </div>

      <div className="endTxt card-content screen-title text-wrapper default-font ">
            <p>if you want to explore all of the different sites, then head over to the collection page!</p>
        </div>

      



      <hr />
    </main>
  );
}
