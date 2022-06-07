import { MusicSection } from './MusicSection';
import { ProfileSection } from './ProfileSection';
import { TopSection } from './TopSection';
import { WorkSection } from './WorkSection';

import variables from '../../../styles/variables.module.scss';

type Sections = {
  title: string;
  section: string;
  content: JSX.Element;
  bgColor: string;
};

export const SECTIONS: Sections[] = [
  {
    title: '',
    section: 'top',
    content: <TopSection />,
    bgColor: '',
  },
  {
    title: '',
    section: 'profile',
    content: <ProfileSection />,
    bgColor: variables.colorSecondary,
  },
  {
    title: 'Work',
    section: 'work',
    content: <WorkSection />,
    bgColor: variables.colorThird,
  },
  {
    title: 'Music',
    section: 'music',
    content: <MusicSection />,
    bgColor: variables.colorSecondary,
  },
];
