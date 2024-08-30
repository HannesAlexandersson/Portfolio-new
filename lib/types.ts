
export interface ProjectProps {
    title: string;   
    description: string;
    link: string;    
    preview: string;   
}
export interface ProjectData {
    project: ProjectProps;
}

export interface NavLink {
    href: string;
    text: string;
    icon: string;
  }
  
export interface Projects {
    Name: string;
    Url: string;
    Github: string;
    img: string;
    path: string;
    description: string;
    preview?: string;
    tooltip?: string;
}

/* export interface ProjectCardsProps {
    oldProjects: Record<string, Projects>;
    projectData: Record<string, Projects>;
  } */

export interface ProjectCardsProps {
    oldProjects: Projects[];
    projectData: Projects[];
    thirdSemester: Projects[];
}

export interface Sliderimages{
    images: string[];    
}