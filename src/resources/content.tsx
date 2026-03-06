import { About, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Moiz",
  lastName: "Ali",
  name: `Moiz Ali`,
  role: "Blockchain & Full-Stack Engineer",
  avatar: "/images/avatar.jpeg",
  email: "moizmughalali@gmail.com",
  location: "Asia/Karachi",
  languages: ["English", "Urdu"],
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Weekly insights on Blockchain, DeFi Security, and Full-Stack Development</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/HoodClock/",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/moiz-ali-72bbb9333/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Showcasing my work as a ${person.role}`,
  headline: <>Building the Future With Code</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Blockchain Security Engineer</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/",
  },
  subline: (
    <>
      I'm Moiz — a passionate Blockchain engineer & full-stack developer.<br />
      I build security tools, Web3 apps, and high-impact products like TxShield.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Moiz is a Pakistan-based blockchain engineer specializing in DeFi security, smart contract
        development, and modern full-stack applications. He builds powerful tools like TxShield,
        and is driven by the mission to make Web3 safer and more
        accessible for everyone.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "TxShield",
        timeframe: "2024 - Present",
        role: "Founder & Lead Engineer",
        achievements: [
          <>Built an advanced transaction simulation & smart-contract analysis system.</>,
          <>Designed honeypot, phishing, and bytecode-level threat detection modules.</>,
          <>Collaborating with industry tools for integrations (BubbleMaps, Goplus etc.).</>,
        ],
        images: [],
      },
      {
        company: "Freelance / Personal Projects",
        timeframe: "2021 - Present",
        role: "Blockchain & Full-Stack Developer",
        achievements: [
          <>Developed multiple Web3 dApps, NFT utilities, and MERN applications.</>,
          <>Built educational content on blockchain, smart contracts, and DeFi security.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Self-Taught Engineer",
        description: <>Learned MERN stack, Solidity, Web3.js, Ethers.js, Hardhat, and Next.js.</>,
      },
      {
        name: "TxShield Business Venture",
        description: <>Focused on building TxShield, a high‑impact Web3 security platform, scaling integrations, and pursuing long‑term ambitions to establish TxShield as a core DeFi security layer.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Blockchain Development",
        description: <>Smart contract engineering, security analysis, and DeFi tools.</>,
        tags: [
          { name: "Solidity", icon: "solidity" },
          { name: "Ethers.js", icon: "javascript" },
          { name: "Web3.js", icon: "javascript" },
          { name: "Hardhat", icon: "javascript" },
        ],
        images: [],
      },
      {
        title: "MERN & Full-Stack",
        description: <>Building production-ready web apps using React, Node, MongoDB and Next.js.</>,
        tags: [
          { name: "JavaScript", icon: "javascript" },
          { name: "React", icon: "react" },
          { name: "Next.js", icon: "nextjs" },
          { name: "MongoDB", icon: "supabase" },
        ],
        images: [],
      },
    ],
  },
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Blockchain security tools & full-stack projects by ${person.name}`,
};

export { person, social, newsletter, home, about, work };
