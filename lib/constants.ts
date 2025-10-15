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
import ExpressJSLogo from '@/public/techstack/expressjs.png';
import FigmaLogo from '@/public/techstack/figma.png';
import FlutterLogo from '@/public/techstack/flutter.png';
import GetXLogo from '@/public/techstack/getx.png';
import GigyaLogo from '@/public/techstack/gigya.png';
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
import M365Logo from '@/public/techstack/microsoft_365.png';
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
import ReactLogo from '@/public/techstack/reactjs.png';
import ReduxLogo from '@/public/techstack/redux.png';
import SalesforceMarketingCloudLogo from '@/public/techstack/salesforce.png';
import SnowflakeLogo from '@/public/techstack/snowflake.png';
import StrapiCMSLogo from '@/public/techstack/strapi.png';
import SWRLogo from '@/public/techstack/swr.png';
import TaroJSLogo from '@/public/techstack/tarojs.png';
import TypeScriptLogo from '@/public/techstack/typescript.png';
import WeixinLogo from '@/public/techstack/weixin.png';
import WeixinDevtoolsLogo from '@/public/techstack/weixin_devtools.png';

import { StaticImageData } from 'next/image';

export type DomainConfig = {
  title: string;
  technologies: {
    key: string;
    name: string;
    imagePath: StaticImageData | null;
  }[];
};

// Predefined technology mapping by domain
export const DOMAIN_TECH_MAP: DomainConfig[] = [
  {
    title: 'Web',
    technologies: [
      { key: 'React.js', name: 'React.js', imagePath: ReactLogo },
      { key: 'Next.js', name: 'Next.js', imagePath: NextJSLogo },
      {
        key: 'TypeScript (Web)',
        name: 'TypeScript',
        imagePath: TypeScriptLogo,
      },
      {
        key: 'JavaScript (Web)',
        name: 'JavaScript',
        imagePath: JavascriptLogo,
      },
      {
        key: 'Playwright (Web)',
        name: 'Playwright',
        imagePath: PlaywrightLogo,
      },
      { key: 'Jest (Web)', name: 'Jest', imagePath: JestLogo },
      { key: 'Redux (Web)', name: 'Redux', imagePath: ReduxLogo },
    ],
  },
  {
    title: 'Mobile',
    technologies: [
      { key: 'React Native', name: 'React Native', imagePath: ReactLogo },
      {
        key: 'TypeScript (Mobile)',
        name: 'TypeScript',
        imagePath: TypeScriptLogo,
      },
      { key: 'Flutter', name: 'Flutter', imagePath: FlutterLogo },
      { key: 'Dart', name: 'Dart', imagePath: DartLogo },
      { key: 'Bloc', name: 'Bloc', imagePath: BlocLogo },
      { key: 'GetX', name: 'GetX', imagePath: GetXLogo },
      { key: 'Redux (Mobile)', name: 'Redux', imagePath: ReduxLogo },
      { key: 'Jest (Mobile)', name: 'Jest', imagePath: JestLogo },
      { key: 'SWR', name: 'SWR', imagePath: SWRLogo },
      { key: 'Taro.js', name: 'Taro', imagePath: TaroJSLogo },
    ],
  },
  {
    title: 'Backend',
    technologies: [
      { key: 'Python', name: 'Python', imagePath: PythonLogo },
      { key: 'Nest.js', name: 'Nest.js', imagePath: NestJSLogo },
      {
        key: 'TypeScript (Backend)',
        name: 'TypeScript',
        imagePath: TypeScriptLogo,
      },
      { key: 'Golang (Backend)', name: 'Golang', imagePath: GolangLogo },
      { key: 'Express.js', name: 'Express.js', imagePath: ExpressJSLogo },
      { key: 'Node.js (Backend)', name: 'Node.js', imagePath: NodeJSLogo },
      { key: 'Gigya', name: 'Gigya', imagePath: GigyaLogo },
      { key: 'Kakao Auth', name: 'Kakao Auth', imagePath: KakaoLogo },
      { key: 'Apple Auth', name: 'Apple Auth', imagePath: AppleLogo },
      { key: 'Prisma', name: 'Prisma', imagePath: PrismaLogo },
    ],
  },
  {
    title: 'Data',
    technologies: [
      { key: 'Snowflake', name: 'Snowflake', imagePath: SnowflakeLogo },
      { key: 'Magento', name: 'Magento', imagePath: MagentoLogo },
      { key: 'Microsoft PowerBI', name: 'PowerBI', imagePath: PowerBILogo },
      { key: 'PostgreSQL', name: 'PostgreSQL', imagePath: PostgreSQLLogo },
      { key: 'MySQL', name: 'MySQL', imagePath: MySQLLogo },
      { key: 'IPFS', name: 'IPFS', imagePath: IPFSLogo },
      { key: 'Strapi', name: 'Strapi', imagePath: StrapiCMSLogo },
    ],
  },
  {
    title: 'Blockchain',
    technologies: [
      { key: 'Golang (Blockchain)', name: 'Golang', imagePath: GolangLogo },
      {
        key: 'Hyperledger Fabric',
        name: 'Hyperledger Fabric',
        imagePath: HyperLedgerFabricLogo,
      },
    ],
  },
  {
    title: 'Cloud / DevOps / SaaS',
    technologies: [
      { key: 'Azure Cloud', name: 'Azure Cloud', imagePath: AzureCloudLogo },
      { key: 'Azure DevOps', name: 'Azure DevOps', imagePath: AzureDevOpsLogo },
      { key: 'AWS Cloud', name: 'AWS Cloud', imagePath: AWSCloudLogo },
      {
        key: 'Alibaba Cloud',
        name: 'Alibaba Cloud',
        imagePath: AlibabaCloudLogo,
      },
      { key: 'Alibaba ACK', name: 'ACK', imagePath: AlibabaACKLogo },
      {
        key: 'Salesforce Marketing Cloud',
        name: 'SFMC',
        imagePath: SalesforceMarketingCloudLogo,
      },
      { key: 'Docker', name: 'Docker', imagePath: DockerLogo },
      { key: 'Datadog', name: 'Datadog', imagePath: DatadogLogo },
      { key: 'Dynatrace', name: 'Dynatrace', imagePath: DynatraceLogo },
      { key: 'Postman', name: 'Postman', imagePath: PostmanLogo },
      { key: 'Appium', name: 'Appium', imagePath: AppiumLogo },
      {
        key: 'Google Analytics',
        name: 'Google Analytics',
        imagePath: GoogleAnalyticsLogo,
      },
      {
        key: 'Google Tag Manager',
        name: 'Google Tag Manager',
        imagePath: GoogleTagManagerLogo,
      },
    ],
  },
  {
    title: 'Project Management',
    technologies: [
      {
        key: 'Agile Methodology',
        name: 'Agile / Scrum',
        imagePath: ICAgileLogo,
      },
      {
        key: 'Scaled Agile Methodology',
        name: 'Scaled Agile',
        imagePath: ScaledAgileLogo,
      },
      {
        key: 'Gen-e2 Methodology',
        name: 'Gen-e2',
        imagePath: PALOITLogo,
      },
      { key: 'Jira', name: 'Jira', imagePath: JiraLogo },
      {
        key: 'GitHub Copilot',
        name: 'GitHub Copilot',
        imagePath: GitHubCopilotLogo,
      },
      {
        key: 'Cursor',
        name: 'Cursor',
        imagePath: CursorLogo,
      },
      {
        key: 'Figma',
        name: 'Figma',
        imagePath: FigmaLogo,
      },
      {
        key: 'Weixin Devtools',
        name: 'Weixin Devtools',
        imagePath: WeixinDevtoolsLogo,
      },
      {
        key: 'Weixin Developer Portal',
        name: 'Weixin Portal',
        imagePath: WeixinLogo,
      },
      {
        key: 'Microsoft 365 Copilot',
        name: 'M365 Copilot',
        imagePath: M365Logo,
      },
      {
        key: 'Microsoft Power Automate',
        name: 'Power Automate',
        imagePath: PowerAutomateLogo,
      },
    ],
  },
];

export const PROJECT_DOMAINS = [
  'Web',
  'Mobile',
  'Backend',
  'DevOps',
  'Blockchain',
  'Data',
  'AI/ML',
  'AI-Powered',
];

export const PROJECT_TECHNOLOGIES = [
  'Javascript',
  'TypeScript',
  'Python',
  'Database',
  'Solidity',
  'React Native',
];
