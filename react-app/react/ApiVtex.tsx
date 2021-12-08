import React, {useState} from "react";
import { useCssHandles } from 'vtex.css-handles';


const CSS_HANDLES = ['post','apiBody','postContatos','postContainer','apiTitle','postButton','apiContatos','errorMessage', 'postgif','containerInput','select','input','title','coletaDados'] as const

interface User {
  name: string;
  email: string
}
function ApiVtex() {
  const [users, setUsers] = useState<Array<User>>([]);
  const handles = useCssHandles(CSS_HANDLES)
  const [loading, setLoading] = useState(false)
  const [Email, setEmail] = useState('')
  const [select, setSelect] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)


  const fetchUsers = () => {
    setLoading(true);
    console.log(Email);
    setErrorMessage(null)
    fetch(`/api/dataentities/inovationentity/search?_schema=schemainovation&_fields=email,name&_where=${select}=${Email}`)
      .then(response => response.json())
      .then(result => {
        if (Array.isArray(result)) {
        setUsers(result);
        setLoading(false);
        }else{
          throw new Error("Não existe na Api")
        }
      })
      .catch(error => {
        setErrorMessage(error.message);
        setLoading(false);
      });
  }
  const onKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key == "Enter") {
      fetchUsers()
    }
  }
 return(
  <div>

    <div className={`${handles.containerInput}`}>
    <p className={`${handles.title}`}>Master Data</p>
    <div className={`${handles.coletaDados}`}>
      <select className={`${handles.select}`}
    value={select}
    onChange={(e) => setSelect(e.target.value)}>
      <option value="name">Nome</option>
      <option value="email">E-mail</option>
    </select>
    <input className={`${handles.input}`} type="text" name="Email" value={Email} onChange={(event) => setEmail(event.target.value)} onKeyUp={(event) => onKeyUp(event)} />

    <button className={`${handles.postButton}`} onClick={() => fetchUsers()}>
      Buscar
    </button>
    </div>
    </div>
    <div className={`${handles.postgif}`}>
        {loading? (<img  src="https://icon-library.com/images/loading-gif-icon/loading-gif-icon-9.jpg"/>) : null}
        </div>
    <div className={`${handles.postContatos}`}>
      {users.length > 0 && users.map(user => (
      <div >
      <div className={`${handles.postContainer}`}>
        <div className={`${handles.apiContatos}`}>
          Contatos
        </div>
        <div className={`${handles.apiTitle}`}>
          Nome: {user.name}
        </div>
        <div className={`${handles.apiBody}`}>
          E-mail: {user.email}
        </div>
      </div>
      </div>
    ))}
    {errorMessage ? <p className={`${handles.errorMessage}`}>{errorMessage}</p> : null}
    </div>

  </div>
 )
}
export default ApiVtex;











