import Link from "next/link";
import Image from "next/image";
import { ProjectData } from "@/lib/types";

export default function Preview({ project }: ProjectData) {

    return(
        <div className="flex flex-col content-center justify-center items-center my-8">          
            <div className="w-[75%] md:w-full text-secondary text-xl font-ibm">          
                <h4 className="mb-2 text-4xl text-white">
                    <Link href={project.link}>
                        {project.title}
                    </Link>
                </h4>
              <p className="mb-2 text-xl">
                {project.description}
              </p>
            </div>
            <div className="mt-3">
              <Link className="contents" href={project.link}>
                <Image                 
                  src={project.preview} 
                  alt="screenshot of Branchevent website" 
                  layout="responsive" 
                  width={308} 
                  height={282}
                  className="max-w-[600px] max-h-[400px] "
                />
              </Link>
            </div>
            <div id="about" className="flex flex-wrap justify-center items-center mt-8 mb-4 w-full">
              <hr className="w-[90%] bg-white h-1" />
            </div>
          </div>
    );
}