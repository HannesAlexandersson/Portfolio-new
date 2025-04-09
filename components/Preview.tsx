import Link from "next/link";
import Image from "next/image";
import { ProjectData } from "@/lib/types";

export default function Preview({ project }: ProjectData) {

    return(
    <section  className="flex flex-col justify-center items-start gap-4 my-8 w-full px-12">
     <div className="mt-4 max-w-3xl">
        <h2 className="sm:text-[20px] text-[18px] uppercase tracking-wider font-bebas text-[#f3e1c7] self-start">       
          <Link href={project.link}>
            {project.title}
          </Link>
        </h2>
        {project.titleDescription && (
        <p className="text-pretty text-sm text-[#f3e1c7] font-ibm ">{project.titleDescription}</p>
        )}
     </div>
      <div className="flex flex-col md:flex-row mt-4 gap-4 items-start justify-center ">
        <Link className="contents" href={project.link}>
          <Image
            src={project.preview}
            alt="screenshot of Branchevent website"
            layout="responsive"
            width={308}
            height={282}
            className="max-w-[500px] max-h-[400px]"
          />
        </Link>
        <div className="max-w-lg">
        {project.description && (
        <p className="text-pretty text-sm text-[#f3e1c7] font-ibm">{project.description}</p>
        )}
      </div>
      </div>
      
   
    </section>
    );
}