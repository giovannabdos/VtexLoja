import React from 'react';
import { useProduct } from 'vtex.product-context'
import { useCssHandles } from 'vtex.css-handles';

const CSS_HANDLES = ['cor1','cor2','cor3'] as const

const Teste: React.FC = () => {
  const productContextValue = useProduct()
  const handles = useCssHandles(CSS_HANDLES)

  const colorClass = (name: string) => {
    let color = handles.cor1
    if (name === 'Novidade') {
      color = handles.cor2
    } else if (name === 'Inovação') {
      color = handles.cor3
    }
    return color;
  }

  return (
    <div>
      {productContextValue?.product?.clusterHighlights.map(hightlight => (
        <div className={`${colorClass(hightlight.name)}`}>{hightlight.name}</div>
      ))}
    </div>
  );
};

export default Teste;
