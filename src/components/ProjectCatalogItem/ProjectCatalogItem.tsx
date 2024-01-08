import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import ImageGallery from 'react-image-gallery';
import { Badge } from '@/lib/components/ui/badge';
import { Button } from '@/lib/components/ui/button';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/lib/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { ExternalLink, GalleryHorizontal, X } from 'lucide-react';

const iconEffectClasses = 'transition-all duration-300 hover:scale-110';
const iconSize = 36;

function ProjectCatalogItem({
  imageUrl,
  headline,
  summary,
  siteUrl,
  badges = [],
  images = [],
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
      <div className="max-w-sm overflow-hidden rounded-lg shadow-lg">
        <div className="relative overflow-hidden cursor-pointer group" style={{ width: 384, height: 256 }}>
          <div className="absolute z-10 flex flex-col gap-2 transition-opacity duration-300 opacity-0 top-2 right-2 group-hover:opacity-100 text-primary-foreground">
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
                onClick={() => setShowGallery(true)}
              />
            )}
          </div>
          <Image
            className="object-cover transition-all duration-300 group-hover:opacity-90 group-hover:scale-110"
            src={imageUrl}
            alt={imageUrl}
            fill
            unoptimized={process.env.NODE_ENV !== 'production'}
          />
        </div>
        <div ref={textContainerRef} className="flex flex-col gap-2 px-4 py-3 border-t border-blue-100 bg-slate-100">
          <Badges badges={badges} maxWidth={maxWidth} />
          <h2 className="text-2xl font-semibold">{headline}</h2>
          <Summary minHeight={55} className="leading-snug" text={summary} />
        </div>
      </div>
      {showGallery && <Gallery images={images} onClose={() => setShowGallery(false)} />}
    </>
  );
}

export default ProjectCatalogItem;

function Badges({ badges, maxWidth }: BadgesProps): JSX.Element | null {
  const badgeContainerRef = useRef<HTMLDivElement>(null);
  const [croppedBadges, setCroppedBadges] = useState<string[]>(() => badges.slice(0, 5));
  const [restBadges, setRestBadges] = useState<string[]>(badges.slice(5));

  const hideBadges = useCallback((container: HTMLDivElement, maxWidth: number) => {
    const nodes = Array.from(container.childNodes);
    const accumulatedWidth = nodes.reduce((prev, curr) => prev + (curr as HTMLDivElement).offsetWidth, 0);
    const currentWidth = accumulatedWidth + (nodes.length - 1) * 4;

    if (maxWidth < currentWidth) {
      let newBadge: string;
      setCroppedBadges(prev => {
        newBadge = prev.pop() || '';
        return [...prev];
      });
      setRestBadges(prev => [newBadge, ...prev]);
    }
  }, []);

  useLayoutEffect(() => {
    if (!badgeContainerRef.current) return;

    const handler = () => hideBadges(badgeContainerRef.current!, maxWidth);

    handler();
    window.addEventListener('resize', handler);

    return () => {
      window.removeEventListener('resize', handler);
    };
  }, [hideBadges, maxWidth]);

  return (
    <div ref={badgeContainerRef} className="flex items-center gap-1 cursor-default max-w-max">
      {croppedBadges.map((badgeLabel, index) => (
        <Badge key={`badge-${badgeLabel}-${index}`} variant="default">
          {badgeLabel}
        </Badge>
      ))}
      {restBadges.length > 0 && (
        <TooltipProvider delayDuration={150}>
          <Tooltip>
            <TooltipTrigger>
              <Badge variant="default" className="cursor-default">{`+${restBadges.length}`}</Badge>
            </TooltipTrigger>
            <TooltipContent side="right" className="bg-primary text-primary-foreground opacity-85">
              {restBadges.map((badge, index) => (
                <div key={`rest-badge-${badge}-${index}`}>{badge}</div>
              ))}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </div>
  );
}

function Summary({ text, minHeight = 48, className }: SummaryProps): JSX.Element | null {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const changeHeight = useCallback(() => setIsExpanded(prev => !prev), []);

  useEffect(() => {
    return () => {
      setIsExpanded(false);
    };
  }, []);

  return (
    <>
      <div
        className={cn('grid grid-rows-[0fr] overflow-hidden transition-all duration-300', className, {
          'grid-rows-[1fr]': isExpanded,
        })}
      >
        <div style={{ minHeight }}>
          <p className="hyphens-auto">{text}</p>
        </div>
      </div>
      <div className="relative">
        {!isExpanded && (
          <div className="absolute -top-1 left-2 right-2" style={{ boxShadow: '0 0 15px 5px rgba(0,0,0,0.35)' }}></div>
        )}
        <Button className="w-full" variant="default" onClick={changeHeight}>
          {isExpanded ? 'Show less' : 'Show more'}
        </Button>
      </div>
    </>
  );
}

function Gallery({ images, onClose }: GalleryProps): JSX.Element | null {
  const imageGalleryRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div className="absolute top-0 bottom-0 left-0 right-0 z-50 bg-black opacity-90"></div>
      <div
        className="absolute top-0 bottom-0 left-0 right-0 z-50"
        onClick={e => {
          if (imageGalleryRef.current?.querySelector('.image-gallery')?.contains(e.target as HTMLDivElement)) return;
          onClose();
        }}
      >
        <div ref={imageGalleryRef} className="flex items-center justify-center w-full h-full">
          <ImageGallery
            items={images?.map(image => ({ original: image, thumbnail: image }))}
            additionalClass="w-full"
            thumbnailPosition="left"
            infinite={false}
            showPlayButton={false}
            renderCustomControls={() => (
              <button
                type="button"
                className="absolute p-[15px] top-0 right-0 image-gallery-icon"
                onClick={() => onClose()}
              >
                <X className="image-gallery-svg" />
              </button>
            )}
          />
        </div>
      </div>
    </>
  );
}

export interface CatalogItemProps {
  imageUrl: string;
  headline: string;
  summary: string;
  siteUrl?: string;
  badges?: string[];
  images?: string[];
}

export interface BadgesProps {
  badges: string[];
  maxWidth: number;
}

export interface SummaryProps {
  text: string;
  minHeight?: number;
  className?: string;
}

export interface GalleryProps {
  images: string[];
  onClose: () => void;
}
