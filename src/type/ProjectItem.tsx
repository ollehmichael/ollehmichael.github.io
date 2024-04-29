export interface ProjectItemType {
  title: string;
  projectID: string;
  imageList: string[];
  ndaSigned: boolean;
  description: string;
  briefDescription: string;
  techStackList: string[];
  tagList: string[];
  githubLink: string;
  status: string;
}

export const ProjectItemInitialState = {
  title: '',
  projectID: '',
  imageList: [''],
  ndaSigned: false,
  description: '',
  briefDescription: '',
  techStackList: [],
  tagList: [],
  githubLink: '',
  status: 'To Do',
};
