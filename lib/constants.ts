import {
  web,
  mobile,
  backend,
  creator,
} from "@/public/services/index";

export interface storyTextSections {
  sectionSubText: string;
  sectionHeadText: string;
  text: string;
}

export const storyIntro:storyTextSections = {
  sectionSubText: 'Introduktion',
  sectionHeadText: 'Vem är jag?',
  text: "Jag är en blivande fullstack-utvecklare med en passion för programmering. Jag har en bakgrund inom offentlig sektor. Jag har arbetat hela mitt liv inom hälso- och sjukvården. Min bakgrund som sjuksköterska har gett mig ett unikt perspektiv på hur man löser problem och hur man samarbetar med människor. Jag har alltid haft ett intresse för teknik och har under de senaste åren arbetat med att utveckla mina programmeringskunskaper. Min utbildning är från Yrgo, som av branchen själv anses vara en av de bästa skolorna för webutveckling i Göteborg. Jag strävar alltid efter att bygga användarvänliga och tillgängliga applikationer som är både visuellt tilltalande och funktionella. Jag vill alltid att kunden ska känna sig inkluderad i processen och strävar alltid efter att leverera den bästa möjliga produkten. Jag skapar webbplatser och applikationer med hjälp av modern teknik som React, Next, Node, Express, MongoDB, PostgreSQL och mycket annat. Oavsett vad kunden behöver kan jag leverera. Jag försöker undvika äldre och föråldrad teknik som exempelvis Wordpress, även om det fortfarande är populärt och för tillfället pålitligt, så anser jag att det är föråldrat och sakta håller på att fasas ut. Med en modern teknikstack kan du framtidssäkra din applikation och göra den enklare att underhålla och att uppdatera.",
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
