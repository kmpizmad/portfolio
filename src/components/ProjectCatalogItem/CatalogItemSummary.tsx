import { useState, useMemo, useCallback, useEffect } from 'react';
import { Button } from '@/lib/components/ui/button';
import { cn } from '@/lib/utils';

function CatalogItemSummary({
  text,
  minHeight = 48,
  isActive = true,
  className,
}: CatalogItemSummaryProps): JSX.Element | null {
  const [isExpanded, setIsExpanded] = useState<boolean>(isActive);
  const buttonRenderCondition = useMemo(() => text.length > 88, [text.length]);
  const changeHeight = useCallback(() => setIsExpanded(prev => !prev), []);

  useEffect(() => {
    return () => {
      setIsExpanded(false);
    };
  }, []);

  useEffect(() => {
    if (!isActive) setIsExpanded(false);
  }, [isActive]);

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
      {buttonRenderCondition && (
        <div className="relative">
          {!isExpanded && (
            <div
              className="absolute -top-1 left-2 right-2"
              style={{ boxShadow: '0 0 15px 5px rgba(0,0,0,0.35)' }}
            ></div>
          )}
          <Button className="w-full" variant="default" onClick={changeHeight}>
            {isExpanded ? 'Show less' : 'Show more'}
          </Button>
        </div>
      )}
    </>
  );
}

export default CatalogItemSummary;

export interface CatalogItemSummaryProps {
  text: string;
  minHeight?: number;
  isActive?: boolean;
  className?: string;
}
