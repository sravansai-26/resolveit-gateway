import React, { useState } from 'react';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt?: string;
  className?: string;
}

const FALLBACK_SRC = "/images/no_image.png";

function Image({
  src,
  alt = "Image",
  className = "",
  ...props
}: ImageProps) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => {
        if (imgSrc !== FALLBACK_SRC) {
          setImgSrc(FALLBACK_SRC);
        }
      }}
      {...props}
    />
  );
}

export default Image;
