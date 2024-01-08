import { useRef } from 'react';
import ImageGallery from 'react-image-gallery';
import { X } from 'lucide-react';

function CatalogItemGallery({ images, onClose }: CatalogItemGalleryProps): JSX.Element | null {
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
        <div ref={imageGalleryRef} className="flex items-center justify-center w-full h-full max-w-5xl mx-auto">
          <ImageGallery
            items={images}
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

export default CatalogItemGallery;

export interface CatalogItemGalleryProps {
  images: { original: string; thumbnail: string }[];
  onClose: () => void;
}
