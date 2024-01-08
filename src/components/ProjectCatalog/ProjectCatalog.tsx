'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow } from 'swiper/modules';
import ProjectCatalogItem, { CatalogItemProps } from './ProjectCatalogItem/ProjectCatalogItem';

function ProjectCatalog({ projects }: Props): JSX.Element | null {
  return (
    <div className="swiper-container">
      <Swiper
        modules={[Navigation, EffectCoverflow]}
        slidesPerView="auto"
        navigation
        centeredSlides
        autoplay
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 80,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        }}
        // initialSlide={Math.ceil(projects.length / 2) - 1}
      >
        {projects.map((projectProps, index) => (
          <SwiperSlide key={`project-item-${index}`} className="flex items-center justify-center">
            {({ isActive }) => <ProjectCatalogItem {...projectProps} isActive={isActive} />}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProjectCatalog;

interface Props {
  projects: CatalogItemProps[];
}
