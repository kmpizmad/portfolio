import { useRef, useState, useCallback, useLayoutEffect } from 'react';
import { Badge } from '@/lib/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/lib/components/ui/tooltip';

function CatalogItemBadges({ badges, maxWidth }: CatalogItemBadgesProps): JSX.Element | null {
  const badgeContainerRef = useRef<HTMLDivElement>(null);
  const [croppedBadges, setCroppedBadges] = useState<string[]>(() => badges.slice(0, 5));
  const [restBadges, setRestBadges] = useState<string[]>(badges.slice(5));

  const hideBadges = useCallback(
    (container: HTMLDivElement, maxWidth: number) => {
      const nodes = Array.from(container.childNodes);
      const accumulatedWidth = nodes.reduce((prev, curr) => prev + (curr as HTMLDivElement).offsetWidth, 0);
      const currentWidth = accumulatedWidth + (nodes.length - 1) * 4;

      if (maxWidth < currentWidth) {
        setCroppedBadges(croppedBadges.slice(0, -1));
        setRestBadges(prev => [croppedBadges.at(-1) || '', ...prev]);
      }
    },
    [croppedBadges],
  );

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
    <div ref={badgeContainerRef} className="flex items-baseline gap-1 cursor-default max-w-max">
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
            <TooltipContent side="right" className="border-none bg-primary text-primary-foreground">
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

export default CatalogItemBadges;

export interface CatalogItemBadgesProps {
  badges: string[];
  maxWidth: number;
}
