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
  gigaverse,
  xpcover,
  energi,
  innvoaccer,
  dashboard,
  ball,
  galvix
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "Front End Developer",
    icon: mobile,
  },
  {
    title: "MERN Stack",
    icon: backend,
  },
  {
    title: "Web3 Engineer",
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

const experiences = [
  {
    title: 'Senior Software Engineer',
    company_name: 'Galvix',
    icon: galvix,
    iconBg: '#E6DEDD',
    date: 'Nov 2023 - Present',
    points: [
      'Drove the product architecture, functionality, and user interface design from inception to a fully realized and market-ready solution.',
      'Conceived, designed, and implemented the entire Galvix SaaS product, demonstrating a profound understanding of business requirements, user needs, and technical feasibility.',
      'Established and led a dynamic front-end development team to bring the Galvix vision to life, fostering collaboration, innovation, and a commitment to excellence.',
      ' Worked closely with cross-functional teams, including back-end developers, UX/UI designers, and product managers, to integrate all components seamlessly and ensure a cohesive user experience.',
    ],
  },
  {
    title: 'Senior Full Stack Developer',
    company_name: 'Gigaverse Ecosystem (Web3)',
    icon: gigaverse,
    iconBg: '#E6DEDD',
    date: 'Sep 2022 - Nov 2023',
    points: [
      'Led technical teams in executing strategies, designs, and implementations across five projects, including a successful NFT launch.',
      'Guided teams in formulating and executing protocol strategies, including tailored bot development. Ensured project milestones through effective planning and the use of cutting-edge technologies (Solidity, IPFS).',
      'Developed and deployed a verified smart contract for the virtual currency $GIGS on the Binance Smart Chain (BSC), ensuring seamless token launch functionality.',
      ' Integrated an NFT candy machine using Metaplex standard contracts, enabling direct NFT listings from trusted sources and enhancing project accessibility.',
    ],
  },
  {
    title: 'Frontend Engineer',
    company_name: 'Energi.io (Web3)',
    icon: energi,
    iconBg: '#383E56',
    date: 'Mar 2022 - Sep 2022',
    points: [
      'Demonstrated expertise in creating Decentralized applications (dApps) using blockchain tech, including smart contract integration for full functionality.',
      'Designed user-friendly dApp interfaces using Web3 libraries, Web3 wallets, and Decentralized storage.',
      'Collaborated with design and product teams, integrating third-party APIs for enhanced dApp features.',
      'Managed server-side development with cutting-edge tech and streamlined deployment using DevOps tools.',
    ],
  },
  {
    title: 'Senior Software Engineer',
    company_name: 'XPCover',
    icon: xpcover,
    iconBg: '#383E56',
    date: 'Sep 2020 - Mar 2022',
    points: [
      'Led a team of 5 developers in web application design, development, and deployment, ensuring on-time delivery and quality compliance.',
      'Collaborated with product managers and stakeholders to define project requirements, scope, and objectives, improving project outcomes and customer satisfaction.',
      'Mentored junior developers, conducted code reviews, and provided  guidance to foster a culture of learning and improvement.',
      'Led initiatives to optimize application performance, reduce page load times, and enhance user experience through responsive design and front-end optimization.',
    ],
  },
  {
    title: 'Full stack Developer',
    company_name: 'Innovaccer Inc.',
    icon: innvoaccer,
    iconBg: '#E6DEDD',
    date: 'Jun 2019 - Sep 2019',
    points: [
      'Collaborated within an agile team, employing Angular to deliver comprehensive client solutions, leading to reduced bug reports and the introduction of user-friendly designs and features.',
      'Managed a Google news crawler using Django and harnessed Google AppScripts for spreadsheet automation, resulting in a significant 70% reduction in marketing efforts.',
      'Optimized development timelines by extending them by 15% while simultaneously cutting maintenance costs by 25%.',
      'Conducted thorough testing of website pages and forms, including code injection tests, and implemented automated website and form testing procedures to ensure robust functionality and security.',
    ],
  },
]

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
    name: 'CoinGecko API Integration with React',
    description:
      'Developed a React app integrating CoinGecko API for real-time cryptocurrency data. Utilized Ant Design for the user interface.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'goingecko',
        color: 'green-text-gradient',
      },
      {
        name: 'ant',
        color: 'pink-text-gradient',
      },
    ],
    image: dashboard,
    source_code_link:
      'https://github.com/shaddymsz/react-crypto-dashboard-coingecko',
  },
  {
    name: 'React-Three 3D Ball Game',
    description:
      'Developed an immersive 3D ball game using React and React-Three, featuring realistic physics, online multiplayer mode, and responsive design.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'three.js',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: ball,
    source_code_link: 'https://3dball-game.vercel.app/',
  },
  {
    name: 'Cryptocurrency Portfolio tracker',
    description:
      'ReactJS and ExpressJS project for tracking cryptocurrency holdings across wallets and exchanges, resulting in a 25% increase in portfolio management efficiency.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'restAPI',
        color: 'green-text-gradient',
      },
      {
        name: 'bootstrap',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    source_code_link: 'https://github.com/shaddymsz',
  },
]

export { services, technologies, experiences, testimonials, projects };
