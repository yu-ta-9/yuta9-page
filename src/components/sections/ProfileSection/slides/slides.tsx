import { QualificationSlide } from './QualificationSlide';
import { SkillSlide } from './SkillSlide';

type Slides = {
  title: string;
  content: JSX.Element;
};

export const SLIDES: Slides[] = [
  {
    title: 'Skill',
    content: <SkillSlide />,
  },
  {
    title: 'Qualification',
    content: <QualificationSlide />,
  },
];
