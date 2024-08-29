
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