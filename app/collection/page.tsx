import ProjectCards from "@/components/ProjectCards";
import { projectData, oldProjects, thirdSemester } from "@/lib/objects";
import Works from "@/components/Works";

function Collection(){
    return(
        <main className="relative text-primary-accent flex flex-row flex-wrap justify-start items-center section-contain mt-28">
            <Works />            
        </main>
    )
}

export default Collection;