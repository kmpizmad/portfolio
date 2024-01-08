import type { Meta, StoryObj } from '@storybook/react';
import ProjectCatalogItem from './ProjectCatalogItem';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/ProjectCatalogItem',
  component: ProjectCatalogItem,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof ProjectCatalogItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Item: Story = {
  args: {
    // imageUrl: 'https://i.imgur.com/LMLn22O.png',
    imageUrl: 'https://i.imgur.com/ro2YBcO.png',
    headline: 'Transition from legacy to Next',
    summary:
      'Implemented UX design with reusable components, using the pages folder structure without SSR. Added functionality with hooks and providers (including custom made npm packages). Feature list includes authentication, operations on owned items, protected routes, dynamic UI update for item selecting.',
    siteUrl: 'https://sugarmozi.hu',
    badges: [
      'Next.js',
      'TypeScript',
      'Material UI',
      'CSS3',
      'Tailwind',
      'React Query v3',
      'Swiper',
      'react-form-hook',
      'zod',
      'Google Analytics',
      'Google Maps',
    ],
    images: [
      'https://i.imgur.com/ro2YBcO.png',
      'https://i.imgur.com/G0hnTUC.png',
      'https://i.imgur.com/soK7atN.png',
      'https://i.imgur.com/az0eLTj.png',
      'https://i.imgur.com/ifOfxQq.png',
      'https://i.imgur.com/9xMkzJD.png',
      'https://i.imgur.com/ifOfxQq.png',
      'https://i.imgur.com/az0eLTj.png',
      'https://i.imgur.com/k1kcovq.png',
      'https://i.imgur.com/otei5oE.png',
      'https://i.imgur.com/RYnNYaD.png',
    ],
  },
};
