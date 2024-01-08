import ProjectCatalog from '@/components/ProjectCatalog/ProjectCatalog';
import { CatalogItemProps } from '@/components/ProjectCatalog/ProjectCatalogItem/ProjectCatalogItem';

const projects: CatalogItemProps[] = [
  {
    thumbnailUrl: 'https://i.imgur.com/ro2YBcO.png',
    isDarkTonedThumbnail: true,
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
      { original: 'https://i.imgur.com/ro2YBcO.png', thumbnail: 'https://i.imgur.com/ro2YBcOt.png' },
      { original: 'https://i.imgur.com/G0hnTUC.png', thumbnail: 'https://i.imgur.com/G0hnTUCt.png' },
      { original: 'https://i.imgur.com/soK7atN.png', thumbnail: 'https://i.imgur.com/soK7atNt.png' },
      { original: 'https://i.imgur.com/az0eLTj.png', thumbnail: 'https://i.imgur.com/az0eLTjt.png' },
      { original: 'https://i.imgur.com/ifOfxQq.png', thumbnail: 'https://i.imgur.com/ifOfxQqt.png' },
      { original: 'https://i.imgur.com/9xMkzJD.png', thumbnail: 'https://i.imgur.com/9xMkzJDt.png' },
      { original: 'https://i.imgur.com/ifOfxQq.png', thumbnail: 'https://i.imgur.com/ifOfxQqt.png' },
      { original: 'https://i.imgur.com/az0eLTj.png', thumbnail: 'https://i.imgur.com/az0eLTjt.png' },
      { original: 'https://i.imgur.com/k1kcovq.png', thumbnail: 'https://i.imgur.com/k1kcovqt.png' },
      { original: 'https://i.imgur.com/otei5oE.png', thumbnail: 'https://i.imgur.com/otei5oEt.png' },
      { original: 'https://i.imgur.com/RYnNYaD.png', thumbnail: 'https://i.imgur.com/RYnNYaDt.png' },
    ],
  },
  {
    thumbnailUrl: 'https://i.imgur.com/ro2YBcO.png',
    headline: 'Calendar app for tracking HomeOffice days',
    summary: 'Lorem ipsum dolor sit amet',
    badges: ['Angular12', 'TypeScript', 'Angular Material', 'SCSS'],
  },
  {
    thumbnailUrl: 'https://i.imgur.com/ePu3zPA.png',
    headline: 'Multistep registration form',
    summary: 'Lorem ipsum dolor sit amet',
    badges: ['HTML5', 'CSS3', 'JavaScript'],
    siteUrl: 'https://github.com/kmpizmad/vanilla-multistep-signup-form',
    images: [
      { original: 'https://i.imgur.com/ePu3zPA.png', thumbnail: 'https://i.imgur.com/ePu3zPAt.png' },
      { original: 'https://i.imgur.com/hzFJvNz.png', thumbnail: 'https://i.imgur.com/hzFJvNzt.png' },
      { original: 'https://i.imgur.com/4RUtlgW.png', thumbnail: 'https://i.imgur.com/4RUtlgWt.png' },
    ],
  },
  {
    thumbnailUrl: 'https://i.imgur.com/4ckSXXN.png',
    headline: 'Super tic-tac-toe game',
    summary: 'Lorem ipsum dolor sit amet',
    badges: ['HTML5', 'CSS3', 'JavaScript'],
    siteUrl: 'https://github.com/kmpizmad/super-tic-tac-toe',
    images: [
      { original: 'https://i.imgur.com/VZVezcy.png', thumbnail: 'https://i.imgur.com/VZVezcyt.png' },
      { original: 'https://i.imgur.com/MkA1acF.png', thumbnail: 'https://i.imgur.com/MkA1acFt.png' },
      { original: 'https://i.imgur.com/2r2gCMH.png', thumbnail: 'https://i.imgur.com/2r2gCMHt.png' },
      { original: 'https://i.imgur.com/YTf4Xzc.png', thumbnail: 'https://i.imgur.com/YTf4Xzct.png' },
      { original: 'https://i.imgur.com/4ckSXXN.png', thumbnail: 'https://i.imgur.com/4ckSXXNt.png' },
    ],
  },
  {
    thumbnailUrl: 'https://i.imgur.com/OCw9tZj.png',
    isDarkTonedThumbnail: true,
    headline: 'Email scraper for Shopify websites',
    summary: 'Lorem ipsum dolor sit amet',
    badges: ['Node', 'TypeScript', 'Express', 'Puppeteer', 'REST API', 'Exceljs'],
    siteUrl: 'https://github.com/kmpizmad/shopify-email-scraper',
    images: [{ original: 'https://i.imgur.com/OCw9tZj.png', thumbnail: 'https://i.imgur.com/OCw9tZjt.png' }],
  },
  {
    thumbnailUrl: 'https://i.imgur.com/OCw9tZj.png',
    headline: 'Drag & drop icons (grid-based game)',
    summary: 'Lorem ipsum dolor sit amet',
    badges: ['Next.js', 'TypeScript', 'Tailwind'],
    siteUrl: 'https://github.com/kmpizmad/shopify-email-scraper',
    images: [{ original: 'https://i.imgur.com/OCw9tZj.png', thumbnail: 'https://i.imgur.com/OCw9tZjt.png' }],
  },
  {
    thumbnailUrl: 'https://i.imgur.com/OCw9tZj.png',
    headline: 'Card design for table',
    summary: 'Lorem ipsum dolor sit amet',
    badges: ['Angular17', 'TypeScript', 'CSS3', 'Unit test'],
    siteUrl: 'https://github.com/kmpizmad/shopify-email-scraper',
    images: [{ original: 'https://i.imgur.com/OCw9tZj.png', thumbnail: 'https://i.imgur.com/OCw9tZjt.png' }],
  },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <ProjectCatalog projects={projects} />
    </main>
  );
}
