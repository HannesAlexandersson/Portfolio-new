export default function Cv(){

    return(
        <main>
            <div class="skillset-container">
    
    
    <h1 class="sub-title">
        My <span>skills</span>
    </h1>
    
    <section>
        <div class="container1" id="skills">
            <h1 class="heading">Technical skills</h1>
            <p class="default-font sub-title-p">A visual representation of my own estimate of my programming skills. Based off my near pears at school</p>
            <div class="Technical-bars">

                <div class="bar"><i style="color: #c95d2e" class='bx bxl-html5'></i>    

                    <div class="indfo"> 
                        <span>HTML</span>                       
                    </div>
                

                    <div class="progress-line html">
                        <span></span>
                    </div>

                </div>

                <div class="bar"><i style="color: #b0bc1e" class='bx bxl-javascript'></i>   

                    <div class="indfo">   
                        <span>Javascript</span>                        
                    </div>
                
                    <div class="progress-line javascript">
                        <span></span>
                    </div>

                </div>
                
                <div class="bar"><i style="color: #147bbc" class='bx bxl-css3'></i>  

                    <div class="indfo">   
                        <span>CSS</span>                        
                    </div>
                
                    <div class="progress-line css">
                        <span></span>
                    </div>

                </div>

                <div class="bar"><i style="color: #69bcbc" class='bx bxl-react'></i>        

                    <div class="indfo">    
                        <span>React</span>                       
                    </div>
                
                    <div class="progress-line react">
                        <span></span>
                    </div>

                </div>

                <div class="bar"><i style="color: #6F5091" class='bx bxl-php'></i>      

                    <div class="indfo">        
                        <span>PHP</span>                   
                    </div>
                
                    <div class="progress-line php">
                        <span></span>
                    </div>

                </div>
                
                <div class="bar"><i style="color: #FFA500" class='bx bxl-stack-overflow'></i>      

                    <div class="indfo">        
                        <span>Stack OverFlow</span>                   
                    </div>
                
                    <div class="progress-line SOF">
                        <span></span>
                    </div>

                </div>
            </div>

        </div>
        <!-- radial bars start <i class='bx bxl-stack-overflow'></i> -->

        <div class="container1">
            <h1 class="heading">Proffessional skills</h1>
            <div class="radial-bars">

                <div class="radial-bar">
                    <svg x="0px" y="0px" viewBox="0 0 200 200">
                        <circle class="progress-bar" cx="100" cy="100" r="80"></circle>
                        <circle class="path path-1" cx="100" cy="100" r="80"></circle>
                    </svg>
                    <div class="percentage">90%</div> 
                    <div class="text">Teamwork</div> 
                </div>

                <div class="radial-bar">
                    <svg x="0px" y="0px" viewBox="0 0 200 200">
                        <circle class="progress-bar" cx="100" cy="100" r="80"></circle>
                        <circle class="path path-2" cx="100" cy="100" r="80"></circle>
                    </svg>
                    <div class="percentage">70%</div> 
                    <div class="text">Problem Solving</div> 
                </div>

                <div class="radial-bar">
                    <svg x="0px" y="0px" viewBox="0 0 200 200">
                        <circle class="progress-bar" cx="100" cy="100" r="80"></circle>
                        <circle class="path path-3" cx="100" cy="100" r="80"></circle>
                    </svg>
                    <div class="percentage">70%</div> 
                    <div class="text">Creativity</div> 
                </div>

                <div class="radial-bar">
                    <svg x="0px" y="0px" viewBox="0 0 200 200">
                        <circle class="progress-bar" cx="100" cy="100" r="80"></circle>
                        <circle class="path path-4" cx="100" cy="100" r="80"></circle>
                    </svg>
                    <div class="percentage">90%</div> 
                    <div class="text">Communication</div> 
                </div>


            </div>
        </div>

             
    </section>
</div>



<div class="outer-ram">
    <h1 class="website-title default-font">Curriculum Vitae</h1>
    <embed src="src/Assets/docs/HannesCV(6).pdf" type="application/pdf" width="100%" height="600px">
</div>
        </main>
    );
}