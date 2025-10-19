import ICAgileLogo from '@/public/techstack/agile.png';
import ScaledAgileLogo from '@/public/techstack/agile_scaled.png';
import AlibabaACKLogo from '@/public/techstack/alibaba_ack.png';
import AlibabaCloudLogo from '@/public/techstack/alibaba_cloud.png';
import AppiumLogo from '@/public/techstack/appium.png';
import AppleLogo from '@/public/techstack/apple.png';
import AWSCloudLogo from '@/public/techstack/aws.png';
import AzureCloudLogo from '@/public/techstack/azure_cloud.png';
import AzureDevOpsLogo from '@/public/techstack/azure_devops.png';
import BlocLogo from '@/public/techstack/bloc.png';
import CursorLogo from '@/public/techstack/cursor.png';
import DartLogo from '@/public/techstack/dart.png';
import DatadogLogo from '@/public/techstack/datadog.png';
import DockerLogo from '@/public/techstack/docker.png';
import DynatraceLogo from '@/public/techstack/dynatrace.png';
import EthereumLogo from '@/public/techstack/ethereum.png';
import ExpressJSLogo from '@/public/techstack/expressjs.png';
import FigmaLogo from '@/public/techstack/figma.png';
import FlutterLogo from '@/public/techstack/flutter.png';
import GetXLogo from '@/public/techstack/getx.png';
import GigyaLogo from '@/public/techstack/gigya.png';
import GitHubActionsLogo from '@/public/techstack/github_actions.png';
import GitHubCopilotLogo from '@/public/techstack/github_copilot.png';
import GolangLogo from '@/public/techstack/golang.png';
import GoogleAnalyticsLogo from '@/public/techstack/google_analytics.png';
import GoogleTagManagerLogo from '@/public/techstack/google_tag_manager.png';
import HyperLedgerFabricLogo from '@/public/techstack/hyperledger_fabric.png';
import IPFSLogo from '@/public/techstack/ipfs.png';
import JavascriptLogo from '@/public/techstack/javascript.png';
import JestLogo from '@/public/techstack/jest.png';
import JiraLogo from '@/public/techstack/jira.png';
import KakaoLogo from '@/public/techstack/kakao.png';
import MagentoLogo from '@/public/techstack/magento.png';
import MaterialUILogo from '@/public/techstack/material_ui.png';
import M365Logo from '@/public/techstack/microsoft_365.png';
import MongoDBLogo from '@/public/techstack/mongodb.png';
import MySQLLogo from '@/public/techstack/mysql.png';
import NestJSLogo from '@/public/techstack/nestjs.png';
import NextJSLogo from '@/public/techstack/nextjs.png';
import NodeJSLogo from '@/public/techstack/nodejs.png';
import PALOITLogo from '@/public/techstack/palo_it.png';
import PlaywrightLogo from '@/public/techstack/playwright.png';
import PostgreSQLLogo from '@/public/techstack/postgresql.png';
import PostmanLogo from '@/public/techstack/postman.png';
import PowerAutomateLogo from '@/public/techstack/power_automate.png';
import PowerBILogo from '@/public/techstack/power_bi.png';
import PrismaLogo from '@/public/techstack/prisma.png';
import PythonLogo from '@/public/techstack/python.png';
import RadixUILogo from '@/public/techstack/radix_ui.png';
import ReactLogo from '@/public/techstack/reactjs.png';
import ReduxLogo from '@/public/techstack/redux.png';
import SalesforceMarketingCloudLogo from '@/public/techstack/salesforce.png';
import SanityLogo from '@/public/techstack/sanity.png';
import SnowflakeLogo from '@/public/techstack/snowflake.png';
import SolidityLogo from '@/public/techstack/solidity.png';
import StrapiCMSLogo from '@/public/techstack/strapi.png';
import StripeLogo from '@/public/techstack/stripe.png';
import SWRLogo from '@/public/techstack/swr.png';
import TaroJSLogo from '@/public/techstack/tarojs.png';
import TypeScriptLogo from '@/public/techstack/typescript.png';
import Web3JSLogo from '@/public/techstack/web3js.png';
import WeixinLogo from '@/public/techstack/weixin.png';
import WeixinDevtoolsLogo from '@/public/techstack/weixin_devtools.png';

import { StaticImageData } from 'next/image';

// Domain constants - single source of truth
export const DOMAINS = {
  WEB: 'Web',
  MOBILE: 'Mobile',
  BACKEND: 'Backend',
  CLOUD_INFRA: 'Cloud / Infra / SaaS',
  DEVSECOPS: 'DevSecOps',
  BLOCKCHAIN: 'Blockchain / Web3',
  DATA: 'Data',
  AI_ML: 'AI/ML',
  AI_POWERED: 'AI-Powered',
  SUSTAINABILITY: 'Sustainability',
  WECHAT: 'WeChat',
  TALKS_WORKSHOPS: 'Talks / Workshops',
  PROJECT_MANAGEMENT: 'Project Management',
  OTHERS: 'Others',
} as const;

export type Domain = (typeof DOMAINS)[keyof typeof DOMAINS];

export const PROJECT_DOMAINS = [
  DOMAINS.WEB,
  DOMAINS.MOBILE,
  DOMAINS.BACKEND,
  DOMAINS.CLOUD_INFRA,
  DOMAINS.DEVSECOPS,
  DOMAINS.BLOCKCHAIN,
  DOMAINS.DATA,
  DOMAINS.AI_ML,
  DOMAINS.AI_POWERED,
  DOMAINS.SUSTAINABILITY,
  DOMAINS.WECHAT,
  DOMAINS.TALKS_WORKSHOPS,
  DOMAINS.PROJECT_MANAGEMENT,
  DOMAINS.OTHERS,
] as Domain[];

// Technology constants - single source of truth
export const TECHNOLOGIES = {
  // Web
  REACT_JS: 'React.js',
  NEXT_JS: 'Next.js',
  TYPESCRIPT_WEB: 'TypeScript (Web)',
  JAVASCRIPT_WEB: 'JavaScript (Web)',
  PLAYWRIGHT_WEB: 'Playwright (Web)',
  JEST_WEB: 'Jest (Web)',
  REDUX_WEB: 'Redux (Web)',
  MATERIAL_UI: 'Material UI',
  RADIX_UI: 'Radix UI',

  // Mobile
  REACT_NATIVE: 'React Native',
  TYPESCRIPT_MOBILE: 'TypeScript (Mobile)',
  FLUTTER: 'Flutter',
  DART: 'Dart',
  BLOC: 'BLoC',
  GETX: 'GetX',
  REDUX_MOBILE: 'Redux (Mobile)',
  JEST_MOBILE: 'Jest (Mobile)',
  SWR: 'SWR',
  TARO_JS: 'Taro.js',

  // Backend
  PYTHON: 'Python',
  NEST_JS: 'Nest.js',
  TYPESCRIPT_BACKEND: 'TypeScript (Backend)',
  GOLANG_BACKEND: 'Golang (Backend)',
  EXPRESS_JS: 'Express.js',
  NODE_JS: 'Node.js',
  GIGYA: 'Gigya',
  KAKAO_AUTH: 'Kakao Auth',
  APPLE_AUTH: 'Apple Auth',
  PRISMA: 'Prisma',

  // Data
  SNOWFLAKE: 'Snowflake',
  MAGENTO: 'Magento',
  POWER_BI: 'Microsoft PowerBI',
  POSTGRESQL: 'PostgreSQL',
  MYSQL: 'MySQL',
  IPFS: 'IPFS',
  STRAPI: 'Strapi',
  MONGODB: 'MongoDB',

  // Blockchain
  SOLIDITY: 'Solidity',
  WEB3_JS: 'Web3.js',
  ETHEREUM: 'Ethereum',
  HYPERLEDGER_FABRIC: 'Hyperledger Fabric',
  GOLANG_BLOCKCHAIN: 'Golang (Blockchain)',

  // Cloud/DevOps
  AZURE_CLOUD: 'Azure Cloud',
  AZURE_DEVOPS: 'Azure DevOps',
  AWS_CLOUD: 'AWS Cloud',
  ALIBABA_CLOUD: 'Alibaba Cloud',
  ALIBABA_ACK: 'Alibaba ACK',
  SALESFORCE_MARKETING_CLOUD: 'Salesforce Marketing Cloud',
  DOCKER: 'Docker',
  DATADOG: 'Datadog',
  DYNATRACE: 'Dynatrace',
  POSTMAN: 'Postman',
  APPIUM: 'Appium',
  GOOGLE_ANALYTICS: 'Google Analytics',
  GOOGLE_TAG_MANAGER: 'Google Tag Manager',
  GITHUB_ACTIONS: 'GitHub Actions',
  SANITY: 'Sanity',
  STRIPE: 'Stripe',

  // Project Management
  AGILE_METHODOLOGY: 'Agile Methodology',
  SCALED_AGILE_METHODOLOGY: 'Scaled Agile Methodology',
  GEN_E2_METHODOLOGY: 'Gen-e2 Methodology',
  JIRA: 'Jira',
  GITHUB_COPILOT: 'GitHub Copilot',
  CURSOR: 'Cursor',
  FIGMA: 'Figma',
  WEIXIN_DEVTOOLS: 'Weixin Devtools',
  WEIXIN_DEVELOPER_PORTAL: 'Weixin Developer Portal',
  M365_COPILOT: 'Microsoft 365 Copilot',
  POWER_AUTOMATE: 'Microsoft Power Automate',

  // AI_ML
  AI_ML: 'AI/ML',
} as const;

export type Technology = (typeof TECHNOLOGIES)[keyof typeof TECHNOLOGIES];

export type DomainTechMap = {
  title: Domain;
  technologies: {
    key: Technology;
    name: string;
    imagePath: StaticImageData | null;
  }[];
};

// Predefined technology mapping by domain
export const DOMAIN_TECH_MAP: DomainTechMap[] = [
  {
    title: DOMAINS.WEB,
    technologies: [
      { key: TECHNOLOGIES.REACT_JS, name: 'React.js', imagePath: ReactLogo },
      { key: TECHNOLOGIES.NEXT_JS, name: 'Next.js', imagePath: NextJSLogo },
      {
        key: TECHNOLOGIES.TYPESCRIPT_WEB,
        name: 'TypeScript',
        imagePath: TypeScriptLogo,
      },
      {
        key: TECHNOLOGIES.JAVASCRIPT_WEB,
        name: 'JavaScript',
        imagePath: JavascriptLogo,
      },
      {
        key: TECHNOLOGIES.PLAYWRIGHT_WEB,
        name: 'Playwright',
        imagePath: PlaywrightLogo,
      },
      { key: TECHNOLOGIES.JEST_WEB, name: 'Jest', imagePath: JestLogo },
      { key: TECHNOLOGIES.REDUX_WEB, name: 'Redux', imagePath: ReduxLogo },
      {
        key: TECHNOLOGIES.MATERIAL_UI,
        name: 'Material UI',
        imagePath: MaterialUILogo,
      },
      {
        key: TECHNOLOGIES.RADIX_UI,
        name: 'Radix UI',
        imagePath: RadixUILogo,
      },
    ],
  },
  {
    title: DOMAINS.MOBILE,
    technologies: [
      {
        key: TECHNOLOGIES.REACT_NATIVE,
        name: 'React Native',
        imagePath: ReactLogo,
      },
      {
        key: TECHNOLOGIES.TYPESCRIPT_MOBILE,
        name: 'TypeScript',
        imagePath: TypeScriptLogo,
      },
      { key: TECHNOLOGIES.FLUTTER, name: 'Flutter', imagePath: FlutterLogo },
      { key: TECHNOLOGIES.DART, name: 'Dart', imagePath: DartLogo },
      { key: TECHNOLOGIES.BLOC, name: 'Bloc', imagePath: BlocLogo },
      { key: TECHNOLOGIES.GETX, name: 'GetX', imagePath: GetXLogo },
      { key: TECHNOLOGIES.REDUX_MOBILE, name: 'Redux', imagePath: ReduxLogo },
      { key: TECHNOLOGIES.JEST_MOBILE, name: 'Jest', imagePath: JestLogo },
      { key: TECHNOLOGIES.SWR, name: 'SWR', imagePath: SWRLogo },
      { key: TECHNOLOGIES.TARO_JS, name: 'Taro', imagePath: TaroJSLogo },
    ],
  },
  {
    title: DOMAINS.BACKEND,
    technologies: [
      { key: TECHNOLOGIES.PYTHON, name: 'Python', imagePath: PythonLogo },
      { key: TECHNOLOGIES.NEST_JS, name: 'Nest.js', imagePath: NestJSLogo },
      {
        key: TECHNOLOGIES.TYPESCRIPT_BACKEND,
        name: 'TypeScript',
        imagePath: TypeScriptLogo,
      },
      {
        key: TECHNOLOGIES.GOLANG_BACKEND,
        name: 'Golang',
        imagePath: GolangLogo,
      },
      {
        key: TECHNOLOGIES.EXPRESS_JS,
        name: 'Express.js',
        imagePath: ExpressJSLogo,
      },
      { key: TECHNOLOGIES.NODE_JS, name: 'Node.js', imagePath: NodeJSLogo },
      { key: TECHNOLOGIES.GIGYA, name: 'Gigya', imagePath: GigyaLogo },
      {
        key: TECHNOLOGIES.KAKAO_AUTH,
        name: 'Kakao Auth',
        imagePath: KakaoLogo,
      },
      {
        key: TECHNOLOGIES.APPLE_AUTH,
        name: 'Apple Auth',
        imagePath: AppleLogo,
      },
      { key: TECHNOLOGIES.PRISMA, name: 'Prisma', imagePath: PrismaLogo },
    ],
  },
  {
    title: DOMAINS.DATA,
    technologies: [
      {
        key: TECHNOLOGIES.SNOWFLAKE,
        name: 'Snowflake',
        imagePath: SnowflakeLogo,
      },
      { key: TECHNOLOGIES.MAGENTO, name: 'Magento', imagePath: MagentoLogo },
      { key: TECHNOLOGIES.POWER_BI, name: 'PowerBI', imagePath: PowerBILogo },
      {
        key: TECHNOLOGIES.POSTGRESQL,
        name: 'PostgreSQL',
        imagePath: PostgreSQLLogo,
      },
      { key: TECHNOLOGIES.MYSQL, name: 'MySQL', imagePath: MySQLLogo },
      { key: TECHNOLOGIES.IPFS, name: 'IPFS', imagePath: IPFSLogo },
      { key: TECHNOLOGIES.STRAPI, name: 'Strapi', imagePath: StrapiCMSLogo },
      { key: TECHNOLOGIES.MONGODB, name: 'MongoDB', imagePath: MongoDBLogo },
    ],
  },
  {
    title: DOMAINS.BLOCKCHAIN,
    technologies: [
      {
        key: TECHNOLOGIES.SOLIDITY,
        name: 'Solidity',
        imagePath: SolidityLogo,
      },
      {
        key: TECHNOLOGIES.WEB3_JS,
        name: 'Web3.js',
        imagePath: Web3JSLogo,
      },
      {
        key: TECHNOLOGIES.ETHEREUM,
        name: 'Ethereum',
        imagePath: EthereumLogo,
      },
      {
        key: TECHNOLOGIES.GOLANG_BLOCKCHAIN,
        name: 'Golang',
        imagePath: GolangLogo,
      },
      {
        key: TECHNOLOGIES.HYPERLEDGER_FABRIC,
        name: 'Hyperledger Fabric',
        imagePath: HyperLedgerFabricLogo,
      },
    ],
  },
  {
    title: DOMAINS.CLOUD_INFRA,
    technologies: [
      {
        key: TECHNOLOGIES.AZURE_CLOUD,
        name: 'Azure Cloud',
        imagePath: AzureCloudLogo,
      },
      {
        key: TECHNOLOGIES.AZURE_DEVOPS,
        name: 'Azure DevOps',
        imagePath: AzureDevOpsLogo,
      },
      {
        key: TECHNOLOGIES.AWS_CLOUD,
        name: 'AWS Cloud',
        imagePath: AWSCloudLogo,
      },
      {
        key: TECHNOLOGIES.ALIBABA_CLOUD,
        name: 'Alibaba Cloud',
        imagePath: AlibabaCloudLogo,
      },
      { key: TECHNOLOGIES.ALIBABA_ACK, name: 'ACK', imagePath: AlibabaACKLogo },
      {
        key: TECHNOLOGIES.SALESFORCE_MARKETING_CLOUD,
        name: 'SFMC',
        imagePath: SalesforceMarketingCloudLogo,
      },
      { key: TECHNOLOGIES.DOCKER, name: 'Docker', imagePath: DockerLogo },
      { key: TECHNOLOGIES.DATADOG, name: 'Datadog', imagePath: DatadogLogo },
      {
        key: TECHNOLOGIES.DYNATRACE,
        name: 'Dynatrace',
        imagePath: DynatraceLogo,
      },
      { key: TECHNOLOGIES.POSTMAN, name: 'Postman', imagePath: PostmanLogo },
      { key: TECHNOLOGIES.APPIUM, name: 'Appium', imagePath: AppiumLogo },
      {
        key: TECHNOLOGIES.GOOGLE_ANALYTICS,
        name: 'Google Analytics',
        imagePath: GoogleAnalyticsLogo,
      },
      {
        key: TECHNOLOGIES.GOOGLE_TAG_MANAGER,
        name: 'Google Tag Manager',
        imagePath: GoogleTagManagerLogo,
      },
      {
        key: TECHNOLOGIES.GITHUB_ACTIONS,
        name: 'GitHub Actions',
        imagePath: GitHubActionsLogo,
      },
      {
        key: TECHNOLOGIES.SANITY,
        name: 'Sanity',
        imagePath: SanityLogo,
      },
      {
        key: TECHNOLOGIES.STRIPE,
        name: 'Stripe',
        imagePath: StripeLogo,
      },
    ],
  },
  {
    title: DOMAINS.PROJECT_MANAGEMENT,
    technologies: [
      {
        key: TECHNOLOGIES.AGILE_METHODOLOGY,
        name: 'Agile / Scrum',
        imagePath: ICAgileLogo,
      },
      {
        key: TECHNOLOGIES.SCALED_AGILE_METHODOLOGY,
        name: 'Scaled Agile',
        imagePath: ScaledAgileLogo,
      },
      {
        key: TECHNOLOGIES.GEN_E2_METHODOLOGY,
        name: 'Gen-e2',
        imagePath: PALOITLogo,
      },
      { key: TECHNOLOGIES.JIRA, name: 'Jira', imagePath: JiraLogo },
      {
        key: TECHNOLOGIES.GITHUB_COPILOT,
        name: 'GitHub Copilot',
        imagePath: GitHubCopilotLogo,
      },
      {
        key: TECHNOLOGIES.CURSOR,
        name: 'Cursor',
        imagePath: CursorLogo,
      },
      {
        key: TECHNOLOGIES.FIGMA,
        name: 'Figma',
        imagePath: FigmaLogo,
      },
      {
        key: TECHNOLOGIES.WEIXIN_DEVTOOLS,
        name: 'Weixin Devtools',
        imagePath: WeixinDevtoolsLogo,
      },
      {
        key: TECHNOLOGIES.WEIXIN_DEVELOPER_PORTAL,
        name: 'Weixin Portal',
        imagePath: WeixinLogo,
      },
      {
        key: TECHNOLOGIES.M365_COPILOT,
        name: 'M365 Copilot',
        imagePath: M365Logo,
      },
      {
        key: TECHNOLOGIES.POWER_AUTOMATE,
        name: 'Power Automate',
        imagePath: PowerAutomateLogo,
      },
    ],
  },
];

export type TechnologyGroupMap = {
  [key: string]: Technology[];
};

// Technology groups for filtering - maps display name to actual technology values
export const TECHNOLOGY_GROUP_MAP: TechnologyGroupMap = {
  JavaScript: [
    TECHNOLOGIES.REACT_JS,
    TECHNOLOGIES.REACT_NATIVE,
    TECHNOLOGIES.NEXT_JS,
    TECHNOLOGIES.NODE_JS,
    TECHNOLOGIES.EXPRESS_JS,
    TECHNOLOGIES.JAVASCRIPT_WEB,
    TECHNOLOGIES.NEST_JS,
    TECHNOLOGIES.REDUX_WEB,
    TECHNOLOGIES.REDUX_MOBILE,
    TECHNOLOGIES.JEST_WEB,
    TECHNOLOGIES.JEST_MOBILE,
    TECHNOLOGIES.SWR,
    TECHNOLOGIES.TARO_JS,
    TECHNOLOGIES.MATERIAL_UI,
    TECHNOLOGIES.RADIX_UI,
  ],
  TypeScript: [
    TECHNOLOGIES.TYPESCRIPT_WEB,
    TECHNOLOGIES.TYPESCRIPT_BACKEND,
    TECHNOLOGIES.TYPESCRIPT_MOBILE,
  ],
  Python: [TECHNOLOGIES.PYTHON],
  Database: [
    TECHNOLOGIES.POSTGRESQL,
    TECHNOLOGIES.MYSQL,
    TECHNOLOGIES.SNOWFLAKE,
    TECHNOLOGIES.MAGENTO,
    TECHNOLOGIES.STRAPI,
  ],
  Solidity: [TECHNOLOGIES.SOLIDITY],
  Flutter: [
    TECHNOLOGIES.FLUTTER,
    TECHNOLOGIES.DART,
    TECHNOLOGIES.BLOC,
    TECHNOLOGIES.GETX,
  ],
  Golang: [TECHNOLOGIES.GOLANG_BACKEND, TECHNOLOGIES.GOLANG_BLOCKCHAIN],
  AWS: [TECHNOLOGIES.AWS_CLOUD],
  Azure: [TECHNOLOGIES.AZURE_CLOUD, TECHNOLOGIES.AZURE_DEVOPS],
  Docker: [TECHNOLOGIES.DOCKER],
  Alibaba: [TECHNOLOGIES.ALIBABA_CLOUD, TECHNOLOGIES.ALIBABA_ACK],
  Blockchain: [TECHNOLOGIES.HYPERLEDGER_FABRIC, TECHNOLOGIES.IPFS],
  Testing: [
    TECHNOLOGIES.PLAYWRIGHT_WEB,
    TECHNOLOGIES.APPIUM,
    TECHNOLOGIES.POSTMAN,
  ],
  Analytics: [
    TECHNOLOGIES.GOOGLE_ANALYTICS,
    TECHNOLOGIES.GOOGLE_TAG_MANAGER,
    TECHNOLOGIES.DATADOG,
    TECHNOLOGIES.DYNATRACE,
  ],
  'Low-Code': [
    TECHNOLOGIES.POWER_BI,
    TECHNOLOGIES.POWER_AUTOMATE,
    TECHNOLOGIES.SALESFORCE_MARKETING_CLOUD,
  ],
  'Project Management': [
    TECHNOLOGIES.AGILE_METHODOLOGY,
    TECHNOLOGIES.SCALED_AGILE_METHODOLOGY,
    TECHNOLOGIES.GEN_E2_METHODOLOGY,
    TECHNOLOGIES.JIRA,
    TECHNOLOGIES.FIGMA,
  ],
  'AI Tools': [
    TECHNOLOGIES.GITHUB_COPILOT,
    TECHNOLOGIES.CURSOR,
    TECHNOLOGIES.M365_COPILOT,
  ],
  WeChat: [
    TECHNOLOGIES.WEIXIN_DEVTOOLS,
    TECHNOLOGIES.WEIXIN_DEVELOPER_PORTAL,
    TECHNOLOGIES.TARO_JS,
  ],
  // Authentication: [TECHNOLOGIES.GIGYA, TECHNOLOGIES.KAKAO_AUTH, TECHNOLOGIES.APPLE_AUTH],
  ORM: [TECHNOLOGIES.PRISMA],
};

export const PROJECT_TECHNOLOGIES = Object.keys(
  TECHNOLOGY_GROUP_MAP
) as Technology[];
