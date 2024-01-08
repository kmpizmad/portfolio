import Image from 'next/image';
import Link from 'next/link';
import { useLayoutEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { cn } from '@/lib/utils';
import { ExternalLink, GalleryHorizontal } from 'lucide-react';
import CatalogItemBadges from './CatalogItemBadges';
import CatalogItemSummary from './CatalogItemSummary';
import CatalogItemGallery, { CatalogItemGalleryProps } from './CatalogItemGallery';

const iconEffectClasses = 'transition-all duration-300 hover:scale-110';
const iconSize = 36;

function ProjectCatalogItem({
  thumbnailUrl,
  headline,
  summary,
  siteUrl,
  isDarkTonedThumbnail,
  badges = [],
  images = [],
  isActive = true,
}: CatalogItemProps): JSX.Element | null {
  const textContainerRef = useRef<HTMLDivElement>(null);
  const [maxWidth, setMaxWidth] = useState<number>(Infinity);
  const [showGallery, setShowGallery] = useState<boolean>(false);

  useLayoutEffect(() => {
    if (!textContainerRef.current) return;
    const computedStyle = getComputedStyle(textContainerRef.current);
    let maxWidth = textContainerRef.current.clientWidth;
    maxWidth -= parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight);
    setMaxWidth(maxWidth);
  }, []);

  return (
    <>
      <div
        className={cn('relative max-w-sm overflow-hidden rounded-lg shadow-lg cursor-default', {
          'pointer-events-none': !isActive,
        })}
      >
        <div
          className={cn(
            'absolute top-0 bottom-0 left-0 right-0 z-50 pointer-events-none opacity-0 transition-opacity duration-300',
            { 'opacity-100': !isActive },
          )}
          style={{ backgroundColor: 'rgba(0,0,0,0.25)' }}
        ></div>
        <Thumbnail
          thumbnailUrl={thumbnailUrl}
          isDarkToned={isDarkTonedThumbnail}
          images={images}
          siteUrl={siteUrl}
          onGalleryOpen={() => setShowGallery(true)}
        />
        <div ref={textContainerRef} className="flex flex-col gap-2 px-4 py-3 border-t border-blue-100 bg-slate-100">
          <CatalogItemBadges badges={badges} maxWidth={maxWidth} />
          <h2 className="text-2xl font-semibold">{headline}</h2>
          <CatalogItemSummary minHeight={55} className="leading-snug" text={summary} isActive={isActive} />
        </div>
      </div>
      {showGallery &&
        ReactDOM.createPortal(
          <CatalogItemGallery images={images} onClose={() => setShowGallery(false)} />,
          document.body,
        )}
    </>
  );
}

export default ProjectCatalogItem;

function Thumbnail({
  thumbnailUrl,
  isDarkToned,
  images = [],
  siteUrl,
  onGalleryOpen,
}: ThumbnailProps): JSX.Element | null {
  return (
    <>
      <div className="relative overflow-hidden cursor-pointer bg-background group" style={{ width: 384, height: 256 }}>
        <div
          className={`absolute z-10 flex flex-col gap-2 transition-opacity duration-300 opacity-0 top-2 right-2 group-hover:opacity-100 ${
            isDarkToned ? 'text-primary-foreground' : 'text-secondary-foreground'
          }`}
        >
          {siteUrl && (
            <Link href={siteUrl} target="_blank">
              <ExternalLink width={iconSize} height={iconSize} className={iconEffectClasses} />
            </Link>
          )}
          {images.length > 0 && (
            <GalleryHorizontal
              width={iconSize}
              height={iconSize}
              className={iconEffectClasses}
              onClick={() => {
                if (onGalleryOpen) onGalleryOpen();
              }}
            />
          )}
        </div>
        <Image
          className="object-cover transition-all duration-300 group-hover:opacity-90 group-hover:scale-110"
          src={thumbnailUrl}
          alt={thumbnailUrl}
          fill
          unoptimized={process.env.NODE_ENV !== 'production'}
        />
      </div>
    </>
  );
}

export interface CatalogItemProps {
  thumbnailUrl: string;
  headline: string;
  summary: string;
  isDarkTonedThumbnail?: boolean;
  badges?: string[];
  siteUrl?: string;
  images?: CatalogItemGalleryProps['images'];
  isActive?: boolean;
}

interface ThumbnailProps {
  thumbnailUrl: string;
  isDarkToned?: boolean;
  images?: CatalogItemGalleryProps['images'];
  siteUrl?: string;
  onGalleryOpen?: () => void;
}
