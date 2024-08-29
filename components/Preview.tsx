import Link from "next/link";
import Image from "next/image";
import { ProjectData } from "@/lib/types";

export default function Preview({ project }: ProjectData) {

    return(
        <div className="flex flex-col content-center justify-center items-center">          
            <div className="w-[75%] text-primary-accent text-xl font-ibm px-4">          
                <h4 className="mb-2 text-4xl">
                    <Link href={project.link}>
                        {project.title}
                    </Link>
                </h4>
              <p className="mb-2 text-xl">
                {project.description}
              </p>
            </div>
            <div className="w-[75%] ">
              <Link className="contents" href={project.link}>
                <Image                 
                  src={project.preview} 
                  alt="screenshot of Branchevent website" 
                  layout="responsive" 
                  width={308} 
                  height={282}
                  
                />
              </Link>
            </div>
          </div>
    );
}