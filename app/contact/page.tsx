import Link from "next/link";

export default function Contact(){

return(
    <main className="px-8 md:-px-32">            
        <div className="wrapper flex flex-col items-center justify-center gap-20 w-full h-screen">
             
            <div className="social-wrapper flex flex-col items-center justify-center gap-12">
                <div className="contact-textWrapper text-primary-accent font-ibm flex items-center justify-center text-center">
                    <p>Easiest way to contact me is Linkedin or on Github! Or why not 
                        <Link 
                            className="detail-font font-bebas" 
                            href='mailto:s103154@gmail.com?subject=I want you to come work for me!'
                        >
                            <span className="mailMe text-orange-400 pl-2">
                                    Email Me!
                            </span>
                        </Link>
                    </p>
                </div>            
            </div>
        </div>
    </main>
    );
}