import React from 'react';
import { useCssHandles } from 'vtex.css-handles';
import { useProduct } from 'vtex.product-context'

const CSS_HANDLES = ['content'] as const

interface IHighlights {
  [key: number]: string
}

interface IColecao {
  categories: Array<string>
  highlights: IHighlights
}

const Colecao: React.FC<IColecao> = ({ categories, highlights }) => {
  const handles = useCssHandles(CSS_HANDLES)
  const productContextValue = useProduct()
  console.log('Teste produto', productContextValue)

  return (
    categories.includes('/Teste KG/') ? <div className={`${handles.content}`}>
      {Object.values(highlights).map(highlight => (
        <div>
          {highlight}
        </div>
      ))}
    </div> : null
  );
};

export default Colecao;
