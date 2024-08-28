import { useState } from 'react';
import { createCopyright } from "@/lib/utils"

export default function Footer(){
    const [date, setDate] = useState('');

    setDate(createCopyright());

    return(
<footer className="footer">
      <div class="copyright">
        <p>{date}</p>
      </div>
      
      <div className="social">
        <a href="https://github.com/HannesAlexandersson">
          <Image src="src/Assets/social-media/github-light.svg" />
        </a>
        <a href="https://www.linkedin.com/in/hannes-alexandersson-3226952b3/">
          <Image src="src/Assets/social-media/linkedin.svg" />
        </a>
      </div>
    </footer>
  </body>
</html>
    );
}



    
    