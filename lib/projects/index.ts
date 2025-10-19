import { StaticImageData } from 'next/image';
import { Domain, Technology } from '../constants';
import { PersonalProjects } from './personal';
import { WorkProjects } from './work';

export type Project = {
  id: string;
  title: string;
  description: string;
  fullDescription: string[];
  date: string;
  images: StaticImageData[];
  domains: Domain[];
  technologies: Technology[];
  githubUrl: string;
  liveUrl: string;
  lessons: string[];
  achievements: string[];
  careerExperience?: string;
};

export const Projects: Project[] = [...WorkProjects, ...PersonalProjects];
