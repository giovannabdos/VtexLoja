import React from 'react';
import { useCssHandles } from 'vtex.css-handles';
import { useProduct } from 'vtex.product-context'

const CSS_HANDLES = ['content','clase1','clase2','clase3'] as const


const ApiPdp: React.FC = () => {
  const handles = useCssHandles(CSS_HANDLES)
  const productContextValue = useProduct()


  if (productContextValue?.product?.categories[0] == "/Woman/"){

    return (
    <div className={`${handles.content}`}>
      <p className={`${handles.clase1}`}>{productContextValue?.product?.clusterHighlights[0]?.name}</p>
      <p className={`${handles.clase2}`}>{productContextValue?.product?.clusterHighlights[1]?.name}</p>
      <p className={`${handles.clase3}`}>{productContextValue?.product?.clusterHighlights[2]?.name}</p>
    </div>
  );
    } else {
      return null
    }
};

export default ApiPdp;
