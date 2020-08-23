import React from 'react';
import { Carousel } from 'antd';

export default function CarouselImages() {
  return (
    <div className="auth-carousel">
      <Carousel effect="fade" dots={false} autoplay={true}>
        <div>
          <div className="auth-image auth-image-1"></div>
        </div>
        <div>
          <div className="auth-image auth-image-2"></div>
        </div>
        <div>
          <div className="auth-image auth-image-3"></div>
        </div>
        <div>
          <div className="auth-image auth-image-4"></div>
        </div>
      </Carousel>
    </div>
  );
}
