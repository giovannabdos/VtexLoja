import React, {useState} from "react";
import { useCssHandles } from 'vtex.css-handles';


const CSS_HANDLES = ['post','apiBody','postContainer','apiTitle','postButton','apiContatos', 'postgif','apiVtexCompleta'] as const

interface User {
  name: string;
  email: string
}
function Api() {
  const [users, setUsers] = useState<Array<User>>([]);
  const handles = useCssHandles(CSS_HANDLES)
  const [loading, setLoading] = useState(false)

  const fetchUsers = () => {
    setLoading(true);
    fetch("/api/dataentities/inovationentity/search?_schema=schemainovation&_fields=email,name",
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
        setUsers(result);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed retrieving information', err);
        setLoading(false);
      });
  }

 return(
  <>
  <div className={`${handles.post}`}>
    <p className={`${handles.apiVtexCompleta}`}>Api Completa da Vtex</p>
    <button className={`${handles.postButton}`} onClick={() => fetchUsers()}>
      Buscar
    </button>
    <div className={`${handles.postgif}`}>
        {loading? (<img  src="https://icon-library.com/images/loading-gif-icon/loading-gif-icon-9.jpg"/>) : null}
        </div>
    {users.length > 0 && users.map(user => (
      <div className={`${handles.postContainer}`}>
        <div className={`${handles.apiContatos}`}>
          <p>Contatos</p>
        </div>
        <div className={`${handles.apiTitle}`}>
          Nome: {user.name}
        </div>
        <div className={`${handles.apiBody}`}>
          E-mail: {user.email}
        </div>
      </div>
    ))}
    </div>
  </>
 )
}
export default Api;

