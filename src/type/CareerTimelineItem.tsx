export interface CareerTimelineItemType {
  companyName: string;
  location: string;
  title: string;
  positionStartTime: string;
  positionEndTime: string;
  description: string;
}

export const CareerTimelineItemInitialState = {
  companyName: '',
  location: '',
  title: '',
  positionStartTime: '',
  positionEndTime: '',
  description: '',
};
