import ContactForm from '../../components/ContactForm';
import StarsCanvas from "@/components/Stars";


export default function Contact(){   
      

return(
    <main className="px-8 md:-px-32"> 
     
        <div className="wrapper flex flex-col items-center justify-center">
             
            <div className="social-wrapper flex flex-col items-center justify-center gap-12">
                         
               
                <div className="relative z-0">
                    <ContactForm /> 
                    <StarsCanvas />
                </div>
            </div>
        </div>
    </main>
    );
}