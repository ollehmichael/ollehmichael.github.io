import PALOITLogo from '@/public/techstack/palo_it.png';
import { StaticImageData } from 'next/image';

export interface CareerItem {
  startDate: string;
  endDate: string | null;
  position: string;
  company: string;
  companyLink: string | null;
  highlightLinks: string[];
  logo: StaticImageData | null;
  description: string;
  projectIds?: string[];
}

export const CareerTimeline: CareerItem[] = [
  {
    startDate: 'Aug 2022',
    endDate: null,
    position: 'Software Engineer / Tech Consultant',
    company: 'PALO IT Hong Kong Limited',
    companyLink: 'https://www.palo-it.com/en/',
    highlightLinks: [],
    logo: PALOITLogo,
    description:
      'This is where I currently am, and where I developed my deep expertise in software engineering. Most importantly, this is where I learned "how" to be an effective teammate - not only be a teammate you want to have on your team, but also a teammate that makes the team better.',
    projectIds: [
      'digital-signage',
      'supply-chain-management',
      'renewable-energy-trading',
      'vip-loyalty',
      'impact-tracker',
      'data-visualization-dashboard',
      'aircraft-component-management',
      'gen-e2-methodology',
      'lnl-wechat-miniprogram',
      'lnl-gen-e2-methodology',
      'bcorp-certification',
    ],
  },
  {
    startDate: 'Oct 2025',
    endDate: null,
    position: 'Full Stack Developer',
    company: 'Pocket Chiro (Self-Employed)',
    companyLink: null,
    highlightLinks: [],
    logo: null,
    description:
      'One of my closest friends is a chiropractor, and he was telling me about how difficult his patients find it to stay consistent with a given rehab / recovery program, especially when they have to do it on their own time. So we decided to build a mobile app that allows those who need posture or mobility improvements to easily access personalized programs and track their progress over time, all while being able to talk to our Chiro AI.',
    projectIds: ['pocket-chiro'],
  },
  {
    startDate: 'Aug 2025',
    endDate: null,
    position: 'Full Stack Developer',
    company: 'Influencer Marketplace (Self-Employed)',
    companyLink: null,
    highlightLinks: [],
    logo: null,
    description:
      'I recognized a common challenge among early-stage content creators: the difficulty in fully investing their time and effort into creating content because they were struggling to juggle a full-time job as well as creating content. To address this, I decided to build a platform that connects these creators with brands looking for authentic promotion, allowing creators to monetize their influence and focus more on content creation.',
    projectIds: ['influencer-marketplace'],
  },
  {
    startDate: 'Feb 2025',
    endDate: null,
    position: 'Co-Host',
    company: 'HK Developer Network (Self-Organized)',
    companyLink: null,
    highlightLinks: [],
    logo: null,
    description:
      'I saw a need for a community where developers (or anyone interested in tech) in Hong Kong could come together and not only share their knowledge and experiences, but also bounce around ideas on how to elevate the reputation of the tech industry in Hong Kong.',
    projectIds: ['hong-kong-developer-network'],
  },
  {
    startDate: 'May 2024',
    endDate: 'Dec 2024',
    position: 'Full Stack Developer',
    company: 'Ecomportal (Self-Employed)',
    companyLink: 'https://www.ecomportal.co/',
    highlightLinks: [],
    logo: null,
    description:
      'This is where I got to experiment with AI-powered development process. I had been experimenting with AI-powered development at work, and I was at a point where I was confident with the process I had developed.',
    projectIds: ['ecommerce-platform'],
  },
  {
    startDate: 'Jun 2022',
    endDate: 'Dec 2022',
    position: 'Frontend Lead / Founding Member',
    company: 'Cover Finance (Self-Employed)',
    companyLink: null,
    highlightLinks: [],
    logo: null,
    description:
      'This was where I got to learn about the DeFi space. I got to learn about smart contracts, tokenomics, and the challenges of building in a rapidly evolving space.',
    projectIds: ['cover-finance'],
  },
  {
    startDate: 'Jan 2021',
    endDate: 'Jan 2022',
    position: 'Tech Lead / Founding Member',
    company: 'Project Humankind NFT (Self-Employed)',
    companyLink: null,
    highlightLinks: [],
    logo: null,
    description:
      'This is where I started to dive in the blockchain space. My friends and I wanted to do something meaningful with the NFT craze, so we decided to launch a collection that promotes people of all backgrounds to come together and create a better future for all of us. Our slogan was "Be human, be kind."',
    projectIds: ['project-humankind-nft'],
  },
  {
    startDate: 'Jan 2021',
    endDate: 'Jan 2022',
    position: 'Frontend Lead',
    company: 'Sketch Basketball Limited',
    companyLink: 'https://www.sketchbball.com/',
    highlightLinks: [],
    logo: null,
    description:
      "One of my friends that I had been playing basketball together for a long time started his own league in Hong Kong, and I was more than happy to help develop the frontend of the company's main website and admin panel",
    projectIds: ['sketch-basketball-website'],
  },
  {
    startDate: 'Jan 2021',
    endDate: null,
    position: 'Full Stack Developer',
    company: 'Freelance (Self-Employed)',
    companyLink: null,
    highlightLinks: [],
    logo: null,
    description:
      'I started my freelance journey here. In I was taught that "experience" is a powerful asset in software engineering - leading to partially to make money as a university student, but mainly to rapidly build up my experience as a software developer.',
    projectIds: [],
  },
  {
    startDate: 'Jan 2021',
    endDate: 'Dec 2021',
    position: 'Author (Almost)',
    company: 'Fairy Tales Retold (Self-Employed)',
    companyLink: null,
    highlightLinks: [],
    logo: null,
    description:
      'I was wondering why some people find it so challenging to learn how to develop, even the simplest logics. So I rewrote some popular fairy tales to indirectly teach fundamental programming concepts to children between ages 5-12.',
    projectIds: ['comic-books'],
  },
  {
    startDate: 'Aug 2020',
    endDate: 'Dec 2020',
    position: 'Junior Software Developer',
    company: 'Dayta AI Limited',
    companyLink: 'https://www.dayta.ai/',
    highlightLinks: [],
    logo: null,
    description:
      'By this time, I had fallen in love with software development. So I took some time off from school to continue working and learning from the amazing team at Dayta AI Limited.',
    projectIds: ['emsd-energy-management', 'cyclops-dashboard'],
  },
  {
    startDate: 'Jun 2020',
    endDate: 'Aug 2020',
    position: 'Software Developer Intern',
    company: 'Dayta AI Limited',
    companyLink: 'https://www.dayta.ai/',
    highlightLinks: [],
    logo: null,
    description:
      'This marks the very beginning of my software engineering career. This is where I learned the fundamentals of software engineering, from the best people I could have ever met to start my career.',
    projectIds: ['emsd-energy-management', 'cyclops-dashboard'],
  },
  {
    startDate: 'Aug 2016',
    endDate: 'Jun 2018',
    position: 'Drill Sergeant',
    company: 'Korean Army Training Center',
    companyLink: null,
    highlightLinks: [],
    logo: null,
    description:
      'This is when I changed the most as a person. I learned to empathize with the true meaning of several key values of my life - discipline, teamwork, resilience, and most importantly, humility. I learned the importance of clear communication and structured processes.',
    projectIds: [],
  },
];
