import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  thix,
  brain,
  predicat,
  onc,
  iaRobot,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const navLinksFr = [
  {
    id: "about",
    title: "À propos",
  },
  {
    id: "contact",
    title: "Contacter",
  },
];

const services = [
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
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiencesEnglish = [{
  title: "Data Collection", company_name: "Starbucks", icon: starbucks, iconBg: "#383E56", date: "March 2020 - April 2021", points: ["First, Onirix collects data about its users' dreams using its data collection algorithms.", "These algorithms gather information such as dream type, associated emotions, and relevant details such as people, places, and objects involved in the dream.",],
},
{
  title: "Data Analysis",
  company_name: "Tesla",
  icon: tesla,
  iconBg: "#E6DEDD",
  date: "Jan 2021 - Feb 2022",
  points: [
    "Once the data is collected, Onirix analyzes it using its data processing algorithms.",
    "These algorithms look for patterns and connections in the data to identify hidden meanings in dreams.",
  ],
},
{
  title: "Results Interpretation",
  company_name: "Shopify",
  icon: shopify,
  iconBg: "#383E56",
  date: "Jan 2022 - Jan 2023",
  points: [
    "After analyzing the data, Onirix interprets the results to identify hidden meanings in dreams.",
    "Researchers from the International Institute of Dreams work closely with Onirix to interpret the results and provide personalized prophetic predictions for each user.",
  ],
},
{
  title: "Personalized Results",
  company_name: "Meta",
  icon: meta,
  iconBg: "#E6DEDD",
  date: "Jan 2023 - Present",
  points: [
    "Finally, Onirix provides personalized results to each user based on the analysis and interpretation of their dream data.",
    "Results include prophetic predictions to help users anticipate their future, as well as useful information about upcoming events.",
  ],
},
];

const experiences = [
  {
    title: "Collecte des données",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    // date: "March 2020 - April 2021",
    points: [
      "Tout d'abord, Onirix collecte des données sur les rêves de ses utilisateurs à l'aide de ses algorithmes de collecte de données.",
      " Ces algorithmes collectent des informations telles que le type de rêve, les émotions associées et les détails pertinents tels que les personnes, les lieux et les objets impliqués dans le rêve.",
    ],
  },
  {
    title: "Analyse des données",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    // date: "Jan 2021 - Feb 2022",
    points: [
      "Une fois les données collectées, Onirix les analyse à l'aide de ses algorithmes de traitement de données. ",
      " Ces algorithmes cherchent des schémas et des connexions dans les données pour identifier les significations cachées dans les rêves.",
    ],
  },
  {
    title: "Interprétation des résultats",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    // date: "Jan 2022 - Jan 2023",
    points: [
      "Après l'analyse des données, Onirix interprète les résultats pour identifier les significations cachées dans les rêves.",
      "Les chercheurs de l'Institut International des Rêves travaillent en étroite collaboration avec Onirix pour interpréter les résultats et fournir des prédictions prémonitoires personnalisées pour chaque utilisateur.",
    ],
  },
  {
    title: "Fournir des résultats personnalisés",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    // date: "Jan 2023 - Present",
    points: [
      "Enfin, Onirix fournit des résultats personnalisés à chaque utilisateur en fonction de l'analyse et de l'interprétation des données de leurs rêves.",
      "Les résultats comprennent des prédictions prémonitoires pour aider les utilisateurs à anticiper leur avenir, ainsi que des informations utiles sur les événements à venir.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
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
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

const henimbola = "https://media.licdn.com/dms/image/C5603AQEe6rFkrXt1kg/profile-displayphoto-shrink_800_800/0/1600184379100?e=1689206400&v=beta&t=qOPb6M3CO5M2xOkjfm1khX_PSxkpBqL6sjQaCdxu31I";
const mahenina = "https://scontent.ftnr5-1.fna.fbcdn.net/v/t39.30808-6/271088005_1378803265883212_2977581742200704279_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGoIgMTqNhTeOkVvP-DAnH-9kMTLWvpy_n2QxMta-nL-bzMVnZ6U9iRiBFdAJg7nQR1wR5BtsX2jLxrhgFfXOY1&_nc_ohc=CcUtLeEGRT0AX9HCBFm&_nc_ht=scontent.ftnr5-1.fna&oh=00_AfCzGZ4gDtGsv71NQqvpm0fs-JVB0LVcN1jAS8qfoZKsTQ&oe=645B25A7";
const pappaReact = "https://media.licdn.com/dms/image/C4D03AQH-UgwgBR6f3A/profile-displayphoto-shrink_800_800/0/1616768632912?e=1689206400&v=beta&t=l3YVuRimEVnQUSNVwbapipiz2rkRNTVE8bdjWPVtQhA";


export const exploreWorlds = [
  {
    id: 'world-1',
    imgUrl: henimbola,
    job: 'Backend Developer',
    title: 'Henimbola',
  },
  {
    id: 'world-2',
    imgUrl: thix,
    job: 'Integrator',
    title: 'Christhino',
  },
  {
    id: 'world-3',
    imgUrl: mahenina,
    job: 'Designer',
    title: 'Mahenina',
  },
  {
    id: 'world-4',
    imgUrl: pappaReact,
    job: 'Frontend Developer',
    title: 'Pappa React',
  },
  // {
  //   id: 'world-5',
  //   imgUrl: '/planet-05.png',
  //   title: 'Hawkins Labs',
  // },
];

export const startingFeatures = [
  'Find a world that suits you and you want to enter',
  'Enter the world by reading basmalah to be safe',
  'No need to beat around the bush, just stay on the gas and have fun',
];

export const newFeatures = [
  {
    imgUrl: '/vrpano.svg',
    title: 'A new world',
    subtitle:
      'we have the latest update with new world for you to try never mind',
  },
  {
    imgUrl: '/headset.svg',
    title: 'More realistic',
    subtitle:
      'In the latest update, your eyes are narrow, making the world more realistic than ever',
  },
];





export { services, technologies, experiences, experiencesEnglish, testimonials, projects };
