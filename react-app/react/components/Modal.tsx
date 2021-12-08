import React, {useState, useEffect} from 'react';
import { useCssHandles } from 'vtex.css-handles';


const CSS_HANDLES = ['modal', 'container', 'close', 'content'] as const
interface IModal {
  onClose(value: boolean): void;
  title:string
}
const Modal: React.FC<IModal> = ({ children, onClose, title }) => {
  const handles = useCssHandles(CSS_HANDLES)
  const [ModalVisible, setModalVisible] = useState(false)

  useEffect(() => {
    const lastSeenModal = localStorage.getItem('last_seen_modal')
    const expiricao = 240000
    if (!lastSeenModal || +new Date() - +new Date(lastSeenModal) >= expiricao) {
      setModalVisible(true)
      localStorage.setItem('last_seen_modal', new Date().toString())
      localStorage.setItem('modal_expiring_date', new Date((+new Date() + expiricao)).toString())
    }
  }, [])

  if (ModalVisible == false) {
    return null
  }

  return(

  <div  onClick={() => {setModalVisible(false)}} className={`${handles.modal}`}>
    <div  onClick={(e) => e.stopPropagation()} className={`${handles.container}`}>
      <img src="https://avantivtexio.vteximg.com.br/arquivos/x.svg?v=01" onClick={() => onClose(false)} className={`${handles.close}`} />
      <div className={`${handles.content}`}>
        {children}
        {title}</div>
    </div>
  </div>
  );
};

export default Modal;
