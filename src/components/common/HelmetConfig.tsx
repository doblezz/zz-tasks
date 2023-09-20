import React from 'react';
import { Helmet } from 'react-helmet-async';

interface HelmetConfigProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const HelmetConfig: React.FC<HelmetConfigProps> = ({
  title = 'Zz Tasks',
  description,
  image,
  url,
}) => {
  return (
    <Helmet>
      <title>{(title === '') ? title : 'Zz Tasks | '+ title}</title>
      {description && <meta name="description" content={description} />}
      {image && <meta property="og:image" content={image} />}
      {url && <meta property="og:url" content={url} />}
    </Helmet>
  );
};

export default HelmetConfig;