import { NavLink, ProjectProps, Projects, Sliderimages } from './types';

export const navLinks: NavLink[] = [
    { href: '/', text: 'Home', icon: '/Navicons/home.svg' },
    { href: '/collection', text: 'Collection', icon: '/Navicons/collection.svg' },
    { href: '/cv', text: 'CV', icon: '/Navicons/resume.svg' },
    { href: '/story', text: 'My Story', icon: '/Navicons/story.svg' },
    { href: '/contact', text: 'Contact Me', icon: '/Navicons/contact.svg' },
  ];

export const frontPagePreview: ProjectProps[] = [
    {
      title: "Konstiga Måsen",
      description: "Why dont start with the latest project? In Konstiga måsen we worked alongside the scriptwriters and ux designer students to create an application for children with the goal of on one hand teach them about the art culture of Lindholmen and on the other hand be a fun way for the family to get to know the neighborhood. The app is built in react for the frontend and since we didnt really have any need of an backend we settled on using Contentful for handling the 'backend'",
      link: "https://sammanslaget-green.vercel.app/",
      preview: "/Screens/masen1.png",
    },
    {
      title: "Mormor och jag",
      description: "A site I built for my wife using next.js and Sanity CMS. She uses it to sell stuff she creates, like ceramiks and clothing.",
      link: "https://mormorochjag.vercel.app/",
      preview: "/Screens/mojagScren.png",
    },
    {
      title: "Svenska krögare",
      description: "During the summer of 2024 me and a classmate where employed by the Svenska krögare to create and launch a new website for them. We built the page in next.js and used Contentful as CMS for the customer. This is my first actual web-dev job that I actually created something that is being used on a daily basis and earned me some sweet sweet cash!",
      link: "https://www.krogare.se/",
      preview: "/Screens/krogare.png",
    },
    {
      title: "Branchevent",
      description: "In Branchevent The webdevs and the digital designers joined forces to develop an application for the big LIA (internship) event hosted by Yrgo. Each group where to develop their own interpretation of Yrgos style, while still submit and operational sign up application. We developed an matching app where the students could match with the companies attending to find the companies that liked the same techstachs as the students. Its built in react for the frontend and we built an node express rest api for the backend",
      link: "https://liameetup.vercel.app/",
      preview: "/Screens/branchevent.svg",
    },
    {
      title: "Protech",
      description:
        "Protech was a joint effort project in wich we, the web devs, joined forces with the Digital Design and Graphical Artist students to create a landing page for a fictive product. the GA-students created the products, the designers designed the layout, and we the web devs made it a reality! Since this was early on the stach only contain html, css and vanilla JS. Unfortunatly I dont have hosting for my php projects atm.",
      link: "https://www.alexanderochson.se/Protech/",
      preview: "/Screens/Group 66.svg",
    },
    {
      title: "Retronautica",
      description:
        "Retronautica was a project in the course Digital Design where we was supposed to create a website for our own dream cinema. Me and my project partner Liv both love fantasy and science fiction, so ofcourse we made a science fiction cinema who only plays old classics! It contains a landing page and a event page for 2000 A space odysee´. Again very early work and thus a lightweight stach of html, css and JS. Another project I cant host atm.",
      link: "https://www.alexanderochson.se/Retronautica/",
      preview: "/Screens/Group 63.svg",
    },
    {
      title: "Yrgopelago",
      description:
        "Yrgopelago was a project we had over christmas 2023. It was a contest among the students of the class, where we each made a fictive hotel in the  fictive archopelago of Yrgopelago. We then all got 100 dollars each wich we could then spend on eachothers hotels. The student who had the most money on the end of the day won! In this project I used php and sqlite to handle the backend while the frontend is basic html and css with a little JS sprinkled in. To bad I cant host this atm.",
      link: "https://www.alexanderochson.se/Yrgopelago/",
      preview: "/Screens/Group 62.svg",
    },
  ]

export const thirdSemester: Projects[] = [
  {
    Name: "Konstiga Måsen",
    Url: "https://sammanslaget-green.vercel.app/",
    Github: "",
    img: "/Screenshots//masenBig.png",
    path: "/extWebPage?name=Konstiga-Måsen",
    description: "Konstiga måsen is a joint venture with the scriptwriters and ux designer students to create an application for children with the goal of on one hand teach them about the art culture of Lindholmen and on the other hand be a fun way for the family to get to know the neighborhood. The app is built in react. ",
    tooltip: "Konstiga måsen is a joint venture with the scriptwriters and ux designer students to create an application for children with the goal of on one hand teach them about the art culture of Lindholmen and on the other hand be a fun way for the family to get to know the neighborhood. The app is built in react. "
  },
  {
    Name: "Svenska krögare",
    Url: "https://www.krogare.se/",
    Github: "N/A",
    img: "/Screenshots/krogare.png",
    path: "/extWebPage?name=Svenska-krögare",
    description: "During the summer of 2024 me and a classmate where employed by the Svenska krögare to create and launch a new website for them. We built the page in next.js and used Contentful as CMS for the customer. This is my first actual web-dev job that I actually created something that is being used on a daily basis and earned me some sweet sweet cash!",
    tooltip: "My first actual web-dev work. During the summer of 2024 me and a friend worked together to create a completly new website for 'Svenska krögare'. Becouse of this was an actual paid job I dont own the source code and cant provide you with an github link. The site is built in next.js and we used Contentful as CMS for the customer.",
  },
  {
    Name: "Mormor och jag",
    Url: "https://mormorochjag.vercel.app/",
    Github: "https://github.com/HannesAlexandersson/Mormorochjag",
    img: "/Screenshots/mojag.png",
    path: "/extWebPage?name=Mormor-och-jag",
    description: "Mormor och jag is what my wife calls herself when she creates ceramiks and sewing. She mainly does it for funs, but latley she actually have managed to get some stuff sold. So with higher demands comes an need to reach out to more people. So with an combination of tic-toc shorts and reels with this new website she can do just that! Also I took it as an learning occasion. I used next.js and Sanity CMS.",
    tooltip: " Mormor och jag is what my wife calls herself when she creates ceramiks and sewing. She mainly does it for funs, but latley she actually have managed to get some stuff sold. So with higher demands comes an need to reach out to more people. So with an combination of tic-toc shorts and reels with this new website she can do just that! Also I took it as an learning occasion. I used next.js and Sanity CMS."
  }
];


export const projectData: Projects[] = [
  {
    Name: "the-finance-app",
    Url: "https://finance-app-five-neon.vercel.app/",
    Github: "https://github.com/HannesAlexandersson/FinanceApp",
    img: "/Screenshots/financeapp.jpg",
    path: "/extWebPage?name=the-finance-app",
    description: "a webscraper using react node.js express and playwright, The backend is hosted at Render and Im experience some problems. Its more then a little wonky at best. It seems to me that the user needs to first make a request to 'start' the backend, and then another to actually get the app to work!",
    tooltip: "a webscraper using react node.js express and playwright, The backend is hosted at Render and Im experience some problems. It seems that any time i want to use the app I need to log in to render and restart the webservice for the api to work"
  },
 {
    Name: "the-Chuck-Norris-Generator",
    Url: "https://the-chuck-norris-generator.vercel.app/",
    Github: "https://github.com/HannesAlexandersson/The-Chuck-Norris-generator",
    img: "/Screenshots/chuck.png",
    path: "/extWebPage?name=the-Chuck-Norris-Generator",
    description: "Its the product of the examination of the react course at Yrgo, built with... SUPRISE SUPRISE REACT!!! and also uses express.js. Its a simple react app that uses a open api to fetch Chuck Norris jokes",
    tooltip: "built with react node.js express. its a simply react app that uses a open api to fetch Chuck Norris jokes"
  },
  {
    Name: "BranchEvent",
    Url: "https://liameetup.vercel.app/",
    Github: "https://github.com/HannesAlexandersson/Branshevent",
    img: "/Screenshots/branchevent.png",    
    path: "/extWebPage?name=branchevent",
    description: "Why dont start with the latest project? In Branchevent The webdevs and the digital designers joined forces to develop an application for the big LIA (internship) event hosted by Yrgo. Each group where to develop their own interpretation of Yrgos style, while still submit and operational sign up application. We developed an matching app where the students could match with the companies attending to find the companies that liked the same techstachs as the students. Its built in react for the frontend and we built an node express rest api for the backend",
    tooltip: "react node.js express. A call project to built a event page for a LIA event where students and companys can get to know eachother a bit before LIA period. It also houses a matchmaking function"
  },
 {
    Name: "Retronautica",
    Url: "https://www.alexanderochson.se/Retronautica/",
    Github: "https://github.com/HannesAlexandersson/Retronautica",
    img: "/Screenshots/retroscreenshot.png",
    path: "/extWebPage?name=Retronautica",
    description: "Retronautica was a project in the course Digital Design where we was supposed to create a website for our own dream cinema. Me and my project partner Liv both love fantasy and science fiction, so ofcourse we made a science fiction cinema who only plays old classics! It contains a landing page and a event page for 2000 A space odysee´. Again very early work and thus a lightweight stach of html, css and JS. Unfortunatly I dont have hosting for my php projects atm.",
    tooltip: "A project in the digital design course, Where we would utilize our new gained skills in figma to create a fictive cinema landing page"
  },
 {
    Name: "pong-game",
    Url: "https://www.alexanderochson.se/pong-game/",
    Github: "https://github.com/HannesAlexandersson/pong-game",
    img: "/Screenshots/pongscreenshot.png",
    path: "/extWebPage?name=pong-game",
    description: "an simple vanilla JS app where I recreate the classic pong game",
    tooltip: "an simple vanilla JS app where I recreate the classic pong game"
  },
 {
    Name: "Protech",
    Url: "https://www.alexanderochson.se/Protech/",
    Github: "https://github.com/HannesAlexandersson/Protech",
    img: "/Screenshots/Protechscreenshot.png",
    path: "/extWebPage?name=Protech",
    description: "Protech was a joint effort project in wich we, the web devs, joined forces with the Digital Design and Graphical Artist students to create a landing page for a fictive product. the GA-students created the products, the designers designed the layout, and we the web devs made it a reality! Since this was early on the stach only contain html, css and vanilla JS. Unfortunatly I dont have hosting for my php projects atm.",
    tooltip: "One of the first big projects we did togheter with the Degital design class and the computer graphical students. Built in php and plain html and css."
  },
  {
    Name: "Yrgopelago",
    Url: "https://www.alexanderochson.se/Yrgopelago/",
    Github: "https://github.com/HannesAlexandersson/Yrgopelago",
    img: "/Screenshots/Yrgopelagoscreenshot.png",
    path: "/extWebPage?name=Yrgopelago",
    description: "Yrgopelago was a project we had over christmas 2023. It was a contest among the students of the class, where we each made a fictive hotel in the  fictive archopelago of Yrgopelago. We then all got 100 dollars each wich we could then spend on eachothers hotels. The student who had the most money on the end of the day won! In this project I used php and sqlite to handle the backend while the frontend is basic html and css with a little JS sprinkled in.  Unfortunatly I dont have hosting for my php projects atm.",
    tooltip: "A fully operational fictive hotel where the user can book one of 3 rooms. Connected to the central bank of Yrgopelago where we keep our fictive money! php vanilla JS sqlite and css"
  },
 {
    Name: "Parallax-project",
    Url: "https://www.alexanderochson.se/Parallax-project/",
    Github: "https://github.com/HannesAlexandersson/Parallax-project",
    img: "/Screenshots/halloweenscreenshot.png",
    path: "/extWebPage?name=Parallax-project",
    description: "This is the result of an online web-dev course tutorial. Unfortunatly I dont have hosting for my php projects atm.",
    tooltip: "Testing some parralax effects"
  },
  {
    Name: "Waterworks",
    Url: "https://alexanderochson.se/waterworks/",
    Github: "https://github.com/HannesAlexandersson/waterworks",
    img: "/Screenshots/waterworks.png",
    path: "/extWebPage?name=Waterworks",
    description: "This was a project in the course of handling API's. We where to create a app that uses an public api of Gothenburg city. The api shows the precipitation of a couple of measue stations. We used vanilla JS and html and css.",
    tooltip: "Built fully in vanilla JS esm modules. Uses a api from GBG stad about percipications"
  },
 {
    Name: "Tic Tac Toe",
    Url: "https://typescript-project-three.vercel.app/",
    Github: "https://github.com/HannesAlexandersson/typescriptProject",
    img: "/Screenshots/tictac.png",
    path: "/extWebPage?name=tic-tac-toe",
    description: "If you get bored here, why dont head over to my first ever react application? Its currently hosted over at Vercel and is a very simple little tic tac toe game, where two players can play eachother. Its nothing fancy, nothing amazing, but still, creating a tic tac toe with React is for what i have heard a very common interview question for many tech companys. So here is mine!!! I also recently updated the app to typescript for educational purpuses. When I was already modifying it I also took the opportunity to add some nicer styling, I hope you like it!",
    tooltip: "My first typescript app. A simple tic tac toe game."
  },
 {
    Name: "Hannes-portfolio",
    Url: "https://alexanderochson.se/portfolio/",
    Github: "https://github.com/HannesAlexandersson/portfolio",
    img: "/Screenshots/portfolio.jpg",
    path: "/extWebPage?name=portfolio",
    description: "This is my portfolio. I built it with react and next.js. Its actually a refactoring of my old portfolio site that was built in a custom made php router system. But since I lost my hosting abilitys I needed to refactor it to host on Vercel. I have also tried to make it as SEO friendly, again, for educational purpuses.",
    tooltip: "next.js"
  }
];

export const oldProjects: Projects[] = [
  {
    Name: "SomeTeams",
    Url: "https://www.alexanderochson.se/SomeTeams/",
    Github: "https://github.com/HannesAlexandersson/SomeTeams",
    img: "/Screenshots/someteamsscreenshot.png",
    path: "/extWebPage?name=SomeTeams",
    description: "the very first thing we did at Yrgo and thus my very first website ever. Atm its not hosted.",
    tooltip: "the very first thing we did at Yrgo and thus my very first website ever."
  },
 {
    Name: "snack-o-mat",
    Url: "https://www.alexanderochson.se/snack-o-mat/",
    Github: "https://github.com/HannesAlexandersson/snack-o-mat",
    img: "/Screenshots/snacscreenshot.png",
    path: "/extWebPage?name=snack-o-mat",
    description: "the second thing we did at Yrgo. Atm its not hosted.",
    tooltip: "the second thing we did at Yrgo."
  },
 {
    Name: "OpenAPI",
    Url: "https://www.alexanderochson.se/OpenAPI/",
    Github: "https://github.com/HannesAlexandersson/OpenAPI",
    img: "/Screenshots/openscreenshot.png",
    path: "/extWebPage?name=OpenAPI",
    description: "The first time we got to use api. So i built an hub for collecting all my API projects. So this site leads to a collection of API projects we have done over the year at Yrgo. Atm its not hosted.",
    tooltip: "The first time we got to use api. So i built an hub for collecting all my API projects. So this site leads to a collection of API projects we have done over the year at Yrgo"
  },
 {
    Name: "theRoom",
    Url: "https://www.alexanderochson.se/theRoom/",
    Github: "https://github.com/HannesAlexandersson/theRoom",
    img: "/Screenshots/roomscreenshot.png",
    path: "/extWebPage?name=theRoom",
    description: "Just for giggles. Its using the text to speech function to get the computer to read out some quotes from the room. Atm its not hosted.",
    tooltip: "Just for giggles. Its using the text to speech function to get the computer to read out some quotes from the room"
  }
];

export const images = [  
  '/Images/pom.jpg',  
  '/Images/bull.jpg',
  '/Images/billytable.jpg',
  '/Images/billyston.jpg',
  '/Images/billyLake.jpg',
  '/Images/cat.jpg',
  '/Images/tent.jpg',
  '/Images/paddle.jpg',
  '/Images/locht.jpg',
  '/Images/barnskrid.jpg',
  '/Images/barne.jpeg',
  '/Images/fatboy.jpg',
  '/Images/tripplecoffe.jpg',
  '/Images/caposhino.jpg',
  '/Images/hannes.jpg',
  '/Images/hannes3.jpg',
  '/Images/sunset.jpg'
];