import ProjectCards from "@/components/ProjectCards";
import { projectData, oldProjects, thirdSemester } from "@/lib/objects";
import Works from "@/components/Works";

function Collection(){
    return(
        <main className="relative text-primary-accent flex flex-row flex-wrap justify-start items-center section-contain mt-28">
            <Works />            
        </main>
    )
/* 
    return(
        <div>
            <div className="flex flex-col justify-center items-center my-24 px-12">
                <h1 className="text-3xl font-bold text-primary-accent mb-8">Disclaimer:</h1>

                    <p className="text-xl text-primary-accent">
                        Pretty much the entire first year we used primarly php, and now, im sorry to say, 
                        I have no means to host my php projects. This means that many of theese projects 
                        isnt hosted atm. If you REALLY want to see them in action I guess you can clode 
                        the repo and run them locally.
                    </p>
            </div>
            <ProjectCards oldProjects={oldProjects} projectData={projectData} thirdSemester={thirdSemester} />
        </div>
    );
     */
}

export default Collection;