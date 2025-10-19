import { StaticImageData } from 'next/image';
import { PersonalProjects } from './personal';
import { WorkProjects } from './work';

export type Project = {
  id: string;
  title: string;
  description: string;
  fullDescription: string[];
  date: string;
  images: StaticImageData[];
  domains: string[];
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  lessons: string[];
  achievements: string[];
  careerExperience?: string;
};

export const Projects: Project[] = [...WorkProjects, ...PersonalProjects];
