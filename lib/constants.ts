import {
  backend,
  boras,
  creator,
  mobile,
  scaffcalc,
  snake,
  web,
  yrgo,
} from "@/public/services/index";

import {
  alexanderochson,
  chuck,
  finance,
  glassmorphism,
  halsokollen as hälsokollen,
  krogare,
  lia,
  mojag,
  open,
  pong,
  protech,
  retro,
  snack,
  teams,
  tic,
  urbanstudio,
  water,
} from "@/public/projects/index";



export interface storyTextSections {
  sectionSubText: string;
  sectionHeadText: string;
  text: string;
}

export const storyIntro:storyTextSections = {
  sectionSubText: 'Introduktion',
  sectionHeadText: 'Vem är jag?',
  text: "Jag är en nyutexaminerad fullstack-utvecklare med en passion för programmering. Jag har en bakgrund inom offentlig sektor. Jag har arbetat hela mitt liv inom hälso- och sjukvården. Min bakgrund som sjuksköterska har gett mig ett unikt perspektiv på hur man löser problem och hur man samarbetar med människor. Jag har alltid haft ett intresse för teknik och har under de senaste åren arbetat med att utveckla mina programmeringskunskaper. Min utbildning är från Yrgo, som av branchen själv anses vara en av de bästa skolorna för webutveckling i Göteborg. Jag strävar alltid efter att bygga användarvänliga och tillgängliga applikationer som är både visuellt tilltalande och funktionella. Jag vill alltid att kunden ska känna sig inkluderad i processen och strävar alltid efter att leverera den bästa möjliga produkten. Jag skapar webbplatser och applikationer med hjälp av modern teknik som React, Next, Node, Express, MongoDB, PostgreSQL och mycket annat. Oavsett vad kunden behöver kan jag leverera. Jag försöker undvika äldre och föråldrad teknik som exempelvis Wordpress, även om det fortfarande är populärt och för tillfället pålitligt, så anser jag att det är föråldrat och sakta håller på att fasas ut. Med en modern teknikstack kan du framtidssäkra din applikation och göra den enklare att underhålla och att uppdatera.",
}

export const storySub1:storyTextSections = {
  sectionSubText: 'Bakgrund',
  sectionHeadText: 'Sjuksköterska',
  text: 'Ungefär 20 år. Så länge har jag arbetat som sjuksköterska på sjukhuset nattetid. Jag har sovit under dagen och arbetat på natten. Det har varit både upp- och nedgångar. Från början som nybörjare som lärde sig yrket, till det stora antiklimaxet som var den globala pandemin. Jag har pressat mig själv genom en av de tuffaste vidareutbildningarna som finns för en sjuksköterska i Sverige och blev specialistsjuksköterska inom anestesi 2016. Alltid vaken när alla andra sov. Jag har slitit på mitt sociala liv under tiden. Nu har jag kommit till insikten att jag behöver något annat i mitt liv. Eftersom jag alltid haft ett intresse och passion för programmering och datorer i allmänhet var valet enkelt. Så i januari 2023 skrev jag mitt allra första "Hello World"!',
}

export const storySub2:storyTextSections = {
  sectionSubText: 'Utbildning',
  sectionHeadText: 'Yrgo',
  text: 'Från den punkten började allt röra sig väldigt snabbt. Jag behövde uppfylla behörighetskraven för de flesta av de utbildningar jag hade i åtanke, så det allra första steget var att anmäla mig till en förberedande kurs för vuxna. Jag hade inte ens fått mina betyg när de stora behörighetstesterna för den aktuella Kodakademin kom. Att faktiskt klara proven och bli antagen kändes inte som en möjlighet för mig vid den tiden. Men på något sätt lyckades jag! Så tillbaka till skolbänken för mig! Med 4 års universitetsstudier bakom mig har jag viss erfarenhet av hur man studerar. Men vad jag inte har är programmeringserfarenhet. Som jag nämnde tidigare skrev jag mitt första "Hello World" ungefär 4 månader innan jag kom in på Yrgo. Tur för mig att jag har blivit förälskad i programmering. Det är tryggt att säga att jag gör mitt bästa för att försöka jämna ut spelplanen, så att säga. Jag spenderar nästan alla mina vakna timmar vid datorn, antingen med programmering eller genom att titta på tutorials. Jag ser det inte ens som ett arbete, jag älskar det och väljer det framför att spela videospel! Jag kan inte vänta på att få skriva "verkliga" program och webbplatser för riktiga kunder!',
}

export const storySub3:storyTextSections = {
  sectionSubText: 'Fritid',
  sectionHeadText: 'Familj, nöjen och intressen',
  text: "På min fritid älskar jag att vara ute i naturen! Jag tar varje chans jag får att gå ut i skogen, campa och fiska eller bara vandra. Jag har en liten följeslagare i form av min hund Billy Bob Thornton. Om jag kunde skulle jag också ta med mina katter, men de tycker inte alltid om att vara ute lika mycket som jag gör! Jag bor med min vackra fru och två döttrar. Vi försöker resa och se världen så ofta vi kan. Tyvärr växer barnen och verkar inte vilja spendera lika mycket tid med sina gamla föräldrar som de brukade. Jag njuter mycket av min Sage barista master. Det är en manuell espressobryggare som brygger en perfekt espresso. Det kräver lite träning, men resan var väl värt det eftersom jag nu njuter av café-kvalitetskaffe varje dag! Förutom det finns det inte mycket mer att berätta om mig själv. Jag spelar videospel, jag älskar fotboll (änglarna) och njuter av familjelivet! Förhoppningsvis lär vi känna varandra snart när ni anställer mig!",
}

export const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
];


export const experiences = [
  {
    title: "Nursing Assistant",
    company_name: "Östra Sjukhuset",
    icon: snake,
    iconBg: "#383E56",
    date: "March 2004 - April 2010",
    points: [
      "Assisting patients with daily activities such as bathing, dressing, and eating.",
      "Standard medical procedures such as taking vital signs, administering medication, and changing bandages and taking blood samples.",
      "Working in multidisciplinary teams to provide comprehensive care to patients.",      
    ],
  },
  {
    title: "Fil. Kand. Nursing",
    company_name: "Borås Högskola",
    icon: boras,
    iconBg: "#E6DEDD",
    date: "Sep 2010 - Jun 2013",
    points: [
      "Nursing theory and practice.",
      "Medical and surgical nursing.",
      "Nursing research.",
      "Pharmacology.",
      "Caring science.",
    ],
  },
  {
    title: "Reg. Nurse",
    company_name: "Östra Sjukhuset",
    icon: snake,
    iconBg: "#383E56",
    date: "Jun 2013 - Jan 2016",
    points: [
      "Providing direct patient care, including administering medication, dressing wounds, and monitoring vital signs.",
      "Collaborating with other healthcare professionals to develop and implement care plans.",
      "Educating patients and their families about their conditions and treatment options.",
      "Maintaining accurate medical records and ensuring patient confidentiality",
      "Supervising nursing assistants and other support staff.",
      "In Intensive care unit for heart patiences with intensive and urgent cardio treatments such as 'Simdax', 'Corotrop' etc .",
    ],
  },
  {
    title: "Fil. Mag. Aneasthesic Nurse",
    company_name: "Borås Högskola",
    icon: boras,
    iconBg: "#E6DEDD",
    date: "Jan 2016 - Dec 2023",
    points: [
     "Learning Anesthesic care.",
      "How to administering anesthesia and monitoring patients during surgery.",
      "How to provide post-operative care and pain management.",
      "Learn to collaborating with surgeons, anesthesiologists, and other healthcare professionals to ensure patient safety.",
      
    ],
  },
  {
    title: "Aneasthesic Nurse",
    company_name: "Sahlgrenska Sjukhuset, Region Halland, Kålltorps Hospice",
    icon: snake,
    iconBg: "#383E56",
    date: "Jan 2016 - Dec 2023",
    points: [
     "Anesthesia care for patients undergoing surgery.",
      "Administering anesthesia and monitoring patients during surgery.",
      "Providing post-operative care and pain management.",
      "Collaborating with surgeons, anesthesiologists, and other healthcare professionals to ensure patient safety.",
      "Participating in emergency response teams to provide critical care in life-threatening situations.",
      "Caring for patients at the end of life in hospice care.",
    ],
  },
  {
    title: "Fullstack Developer program",
    company_name: "Yrgo",
    icon: yrgo,
    iconBg: "#E6DEDD",
    date: "Sep 2023 - Jun 2025",
    points: [
      "Frontend development using HTML, CSS, and JavaScript.",
      "Backend development using Node.js and Express, PHP etc.",
      "Database management with both relational and non-relational databases.",
      "Version control with Git and GitHub.",
      "Building and deploying web applications.",
      "Working with APIs and third-party services.",
      "Creating responsive and accessible user interfaces.",
      "Testing and debugging code.",
      "Using librarys and frameworks such as React, Next, Tailwind, Redux, Three.js, Laravel etc.",
    ],
  },
  {
    title: "Fullstack Developer Internship",
    company_name: "Scaffcalc",
    icon: scaffcalc,
    iconBg: "#383E56",
    date: "Nov 2024 - Mar 2025",
    points: [
     "Developing and maintaining scaffolding software. Built in react with three.js for 3d modeling alongside three/fiber, three/drei etc.",
     "Working with a team of developers to create new features and improve existing ones.",
      "Writing clean, efficient code that meets project requirements.",
      "Testing and debugging code to ensure it works correctly.",
      "State management with Zustand Toolkit.",
    ],
  },
];

export const projects = [
   {
     name: "GlassMorphism",
    description: "En template för Alexander&son. Byggd mestadels för att hålla mig sysselsatt medans jag söker jobb men med en alternativ agenda för att kunna säljas till kund genom Alexander&son.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Contentful CMS",
        color: "green-text-gradient",
      },
    ],
    image: glassmorphism,
    source_code_link: "https://github.com/HannesAlexandersson/glassmorphism",
    link: "https://www.glassmorphism-fawn.vercel.app",
  },
  {
     name: "Urban Studio",
    description: "En template för Alexander&son. Byggd mestadels för att hålla mig sysselsatt medans jag söker jobb men med en alternativ agenda för att kunna säljas till kund genom Alexander&son.",
    tags: [
      {
        name: "Next.js",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "blue-text-gradient",
      },
      {
        name: "Contentful CMS",
        color: "pink-text-gradient",
      },
    ],
    image: urbanstudio,
    source_code_link: "https://github.com/HannesAlexandersson/urban-studio",
    link: "https://www.urban-studio-nine.vercel.app",
  },
  {
    name: "Alexander&son",
    description: "Webbyrån Alexander&sons hemsida. Min egna webbyrå där jag erbjduer webbutvecklingstjänster till överkomliga priser.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Framer Motion",
        color: "pink-text-gradient",
      },
    ],
    image: alexanderochson,
    source_code_link: "https://github.com/HannesAlexandersson/alexanderochson",
    link: "https://www.alexanderandson.com/",
  },
  {
    name: "Svenska Krögare",
    description:
      "En komplett hemsida för Svenska krögare. Innehåller web-to-lead med nyhetsbrev och member subscription",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Contentful CMS",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: krogare,
    source_code_link: "https://github.com/krogare/krogare",
    link: "https://www.krogare.se/",
  },
  {
    name: "Hälsokollen",
    description:
      "Mitt examensarbete. En prototyp för en app som är en del av ett utvecklingsprojekt för lekterapin hos Drottning Silvias barn- och ungdomssjukhus.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Expo",
        color: "green-text-gradient",
      },
      {
        name: "Supabase",
        color: "pink-text-gradient",
      },
    ],
    image: hälsokollen,
    source_code_link: "https://github.com/HannesAlexandersson/examensarbete",
    link: "https://github.com/HannesAlexandersson/examensarbete",
  },
  {
    name: "Mormorochjag",
    description:
      "En kombinerad 'blog' och webshop för min frus hemmagjorda produkter.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Sanity CMS",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },      
    ],
    image: mojag,
    source_code_link: "https://github.com/HannesAlexandersson/Mormorochjag",
    link: "https://mormorochjag.vercel.app/",
  },  
  {
    name: "LIA meetup",
    description:
      "En event sida för vårt LIA meetup event. Den låter studenter och företag matcha baserat på deras gemensamma tech preferenser.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "express.js",
        color: "green-text-gradient",
      },
    ],
    image: lia,
    source_code_link: "https://github.com/HannesAlexandersson/Branshevent",
    link: "https://liameetup.vercel.app/",
  },
  {
    name: "Protech",
    description:
      "Ett skolprojekt där vi samarbetade med Digital design studenterna för att skapa en landingpage för ett fiktivt företag och product. Sidan hostas med gratistier på Render vilket kan medföra att den ibland har lång laddningstid.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "vanilla js",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
    ],
    image: protech,
    source_code_link: "https://github.com/HannesAlexandersson/Protech",
    link: "https://protechsite.onrender.com/",
  },
  {
    name: "Chuck Norris joke generator",
    description:
      "Som vårt första React arbete skulle vi skriva en simpel app som använder valfritt öpett API. Vi valde att skapa en Chuck Norris joke generator.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },      
      {
        name: "css",
        color: "pink-text-gradient",
      },      
    ],
    image: chuck,
    source_code_link: "https://github.com/HannesAlexandersson/The-Chuck-Norris-generator",
    link: "https://the-chuck-norris-generator.vercel.app/",
  },
  {
    name: "Retronautica",
    description:
      "Ett av de allra första skol projekten. Det är en landingpage och en detalj sida för en fiktiv biograf. Sidan hostas med gratistier på Render vilket kan medföra att den ibland har lång laddningstid.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },      
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "vanilla js",
        color: "pink-text-gradient",
      },      
    ],
    image: retro,
    source_code_link: "https://github.com/HannesAlexandersson/Retronautica",
    link: "https://retronautica.onrender.com",
  },
  {
    name: "Tick Tack Toe",
    description:
      "Mitt allra typescript projekt. En skoluppgift där jag gjorde ett enkelt tic tac toe spel, komplett med AI och multiplayer mode.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },      
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },      
    ],
    image: tic,
    source_code_link: "https://github.com/HannesAlexandersson/typescriptProject",
    link: "https://typescript-project-three.vercel.app/",
  },
  {
    name: "Finance app",
    description:
    "Ett litet sidoprojekt där användaren kan knappa in en aktie och få tillbaka aktuell kurs. Backenden hostas med gratistier på Render vilket kan medföra att den ibland har lång laddningstid.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },      
      {
        name: "express.js",
        color: "pink-text-gradient",
      },      
    ],
    image: finance,
    source_code_link: "https://github.com/HannesAlexandersson/FinanceApp",
    link: "https://finance-app-five-neon.vercel.app/",
  },
  {
    name: "Waterworks",
    description:
    "Ett skolprojekt där vi använder ett API från Göteborgs stad för att visa nederbörd och vattennivåer från en rad olika mätstationer runt om i Göteborg. Byggd med Vanilla JS och plain html/css.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },      
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },      
    ],
    image: water,
    source_code_link: "https://github.com/HannesAlexandersson/waterworks",
    link: "https://waterworks-six.vercel.app/",
  },
  {
    name: "Pong",
    description:
    "Ett litet sidoprojekt där jag byggt en pong klon med vanilla js. I nuläget finns det enbart multiplayer läge.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },      
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },      
    ],
    image: pong,
    source_code_link: "https://github.com/HannesAlexandersson/pong-game",
    link: "https://pong-game-pi-nine.vercel.app/",
  },
  {
    name: "Open API",
    description:
    "Det allra första skolprojektet där vi fick använda javascript. Vi skulle bygga en liten applikation som använder valfritt öppet API. Jag byggde en liten hub där jag sedan samlat alla applikationer jag byggt som använder olika API:er.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },      
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },      
    ],
    image: open,
    source_code_link: "https://github.com/HannesAlexandersson/OpenAPI",
    link: "https://alexanderochson.com/OpenAPI",
  },
  
];