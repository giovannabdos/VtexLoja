import React, {useState} from "react";
import { useCssHandles } from 'vtex.css-handles';
import Colecao from './components/Colecao' ;

const CSS_HANDLES = ['post','digite','colecao','apiBody','pesquisa','containerApiTitle','postContainer','desconto','original','apiTitle','postButton','apiContatos', 'postgif','input','errorMessage','imageProduct'] as const

interface Product {
  productName: string;
}

function ApiProduto() {
  const [Products, setProducts] = useState<any>([]);
  const handles = useCssHandles(CSS_HANDLES)
  const [loading, setLoading] = useState(false)
  const [id, setId] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)


  const fetchId = () => {
    setLoading(true);
    setErrorMessage(null)
    fetch(`api/catalog_system/pub/products/search?fq=productId:${id}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/vnd.vtex.ds.v10+json',
        'REST-Range': 'resources=0-10'
      }
    })
    .then(response => response.json())
      .then(result => {
        if (Array.isArray(result)) {
          setProducts(result);
          setLoading(false);
        } else {
          throw new Error("Falha da Api")
        }
      })
      .catch(error => {
        setErrorMessage(error.message);
        setLoading(false);
      });
  }

  const onKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key == "Enter") {
      fetchId()
    }
  }
 return(
 <>
  <div className={`${handles.post}`}>
  <div className={`${handles.pesquisa}`}>
    <div className={`${handles.digite}`}>Digite o Numero do ID:</div>
  <input className={`${handles.input}`} type="text" name="Email" value={id} onChange={(event) => setId(event.target.value)} onKeyUp={(event) => onKeyUp(event)} />
    <button className={`${handles.postButton}`} onClick={() => fetchId()}>
      Buscar
    </button>
    </div>
    <div className={`${handles.postgif}`}>
        {loading? (<img  src="https://icon-library.com/images/loading-gif-icon/loading-gif-icon-9.jpg"/>) : null}
        </div>
        {Products.length > 0 && Products.map((productTeste: Product) => (
      <div className={`${handles.postContainer}`}>
        <div className={`${handles.colecao}`}>
          <Colecao categories={Products[0]?.categories} highlights={Products[0]?.productClusters} />
          </div>
          <img src={Products[0]?.items[0]?.images[0].imageUrl} className={`${handles.imageProduct}`}/>
        <div className={`${handles.containerApiTitle}`}>
        <div className={`${handles.apiTitle}`}>
         {productTeste.productName}
        </div>
        <div className={`${handles.desconto}`}>$ {Products[0]?.items[0]?.sellers[0].commertialOffer.ListPrice},00</div>
        <div className={`${handles.original}`}>$ {Products[0]?.items[0]?.sellers[0].commertialOffer.Price},00</div>
      </div>
      </div>
    ))}
     {errorMessage ? <p className={`${handles.errorMessage}`}>{errorMessage}</p> : null}
    </div>
  </>
 )
}
export default ApiProduto;


















