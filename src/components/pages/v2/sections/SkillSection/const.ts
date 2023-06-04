import type { Stack } from './type';

export const STACK_DATA: { [stack in Stack]: { label: string; key: string }[] } = {
  frontend: [
    {
      label: 'HTML',
      key: 'html5',
    },
    {
      label: 'CSS',
      key: 'css3',
    },
    {
      label: 'Sass',
      key: 'sass',
    },
    {
      label: 'JavaScript',
      key: 'javascript',
    },
    {
      label: 'TypeScript',
      key: 'typescript',
    },
    {
      label: 'React',
      key: 'react',
    },
    {
      label: 'Next.js',
      key: 'nextjs',
    },
    {
      label: 'Vue.js',
      key: 'vuejs',
    },
    {
      label: 'Nuxt.js',
      key: 'nuxtjs',
    },
    {
      label: 'Node.js',
      key: 'nodejs',
    },
    {
      label: 'Webpack',
      key: 'webpack',
    },
    {
      label: 'Storybook',
      key: 'storybook',
    },
    {
      label: 'Jest',
      key: 'jest',
    },
    {
      label: 'JQuery',
      key: 'jquery',
    },
  ],
  backend: [
    {
      label: 'Java',
      key: 'java',
    },
    {
      label: 'Spring',
      key: 'spring',
    },
    {
      label: 'Ruby',
      key: 'ruby',
    },
    {
      label: 'Ruby on Rails',
      key: 'rails',
    },
    {
      label: 'RSpec',
      key: 'rspec',
    },
    {
      label: 'Nest.js',
      key: 'nestjs',
    },
  ],
  infrastructure: [
    {
      label: 'AWS',
      key: 'aws',
    },
    {
      label: 'Terraform',
      key: 'terraform',
    },
    {
      label: 'Docker',
      key: 'docker',
    },
    {
      label: 'MySQL',
      key: 'mysql',
    },
    {
      label: 'PostgreSQL',
      key: 'postgresql',
    },
  ],
  other: [
    {
      label: 'Git',
      key: 'git',
    },
    {
      label: 'Figma',
      key: 'figma',
    },
    {
      label: 'Slack',
      key: 'slack',
    },
    {
      label: 'VSCode',
      key: 'vscode',
    },
  ],
};
