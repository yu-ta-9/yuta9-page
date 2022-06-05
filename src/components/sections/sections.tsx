import { IntroductionSection } from './IntroductionSection';
import { MusicSection } from './MusicSection';
import { TopSection } from './TopSection';
import { WorkSection } from './WorkSection';

import variables from '../../../styles/variables.module.scss';

type Sections = {
  title: string;
  content: JSX.Element;
  bgColor: string;
};

export const SECTIONS: Sections[] = [
  {
    title: '',
    content: <TopSection />,
    bgColor: '',
  },
  {
    title: '',
    content: <IntroductionSection />,
    bgColor: variables.colorSecondary,
  },
  {
    title: 'Work',
    content: <WorkSection />,
    bgColor: variables.colorThird,
  },
  {
    title: 'Music',
    content: <MusicSection />,
    bgColor: variables.colorSecondary,
  },
];
