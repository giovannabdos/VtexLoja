import React, { useState } from "react";
import Modal from './components/Modal';
import { useCssHandles } from 'vtex.css-handles';

const CSS_HANDLES = ['App', 'title', 'imageDesktop','imageMobile','containerImage', 'conteudo', 'descricao'] as const

interface Formulario {
  children: React.ReactNode,
  title: string
}
function Greeting({children,title}: Formulario) {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(true);
  const handles = useCssHandles(CSS_HANDLES)

 return(
   <>
   <div className={`${handles.App}`}>
     {/* <button onClick={() => setIsModalVisible(true)} >Open</button> */}
     {isModalVisible ?
      <Modal onClose={(value) => setIsModalVisible(value)}  title={title}>
     <div className={`${handles.containerImage}`}>
       <img className={`${handles.imageDesktop}`} src="https://avantivtexio.vteximg.com.br/arquivos/banner-desktop-ic3.png" />
       <img className={`${handles.imageMobile}`} src="https://avantivtexio.vteximg.com.br/arquivos/agora-foi-banner-mobile-ic3.png" />
      <div className={`${handles.conteudo}`}>
       {children}
      </div>
      </div>
    </Modal>
     : null}
   </div>
   </>
 )
}
Greeting.schema = {
  title: 'Meu titulo de componente',
  type: 'object',
  properties: {
    title: {
      title: 'Título',
      type: 'string',
      default: "um valor qualque",
    },
    subtitle: {
      title: 'Subtítulo',
      type: 'string',
       default: "um valor qualque",
    },
  },
}
export default Greeting;















































































