import Link from "next/link";
import Image from "next/image";
import { ProjectData } from "@/lib/types";

export default function Preview({ project }: ProjectData) {

    return(
      <div className="flex flex-col items-center my-8 w-full">
      <div className="w-full text-secondary text-xl font-ibm">
        <h3 className="sectionSubText font-bebas text-[#f3e1c7] self-start">       
          <Link href={project.link}>
            {project.title}
          </Link>
        </h3>        
      </div>
      <div className="mt-3">
        <Link className="contents" href={project.link}>
          <Image
            src={project.preview}
            alt="screenshot of Branchevent website"
            layout="responsive"
            width={308}
            height={282}
            className="max-w-[600px] max-h-[400px]"
          />
        </Link>
      </div>
    </div>
    );
}