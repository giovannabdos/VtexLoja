import React, {useState} from "react";
import { useCssHandles } from 'vtex.css-handles';


const CSS_HANDLES = ['aleatorio','apiAleatorio','aleatorioBody','containercontatos','aleatorioContainer','aleatorioTitle','aleatorioButton','contatos','contatosname','contatosusername','contatosemail','postgif'] as const

interface Post {
  body: string;
  id: number;
  title: string;
  userId: number
}
interface User {
  id: number;
  name: string;
  username: string;
  email: string
}
function ApiAleatoria() {
  const [posts, setPosts] = useState<Array<Post>>([]);
  const [users, setUsers] = useState<Array<User>>([]);
  const handles = useCssHandles(CSS_HANDLES);
  const [loading, setLoading] = useState(false)


  const fetchPosts = () => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(result => {
        setPosts(result);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed retrieving information', err);
        setLoading(false);
      });
  }

  const fetchUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(result => {
        setUsers(result);
      })
      .catch(err => {
        console.error('Failed retrieving information', err);
      });
  }

  const fetchAll = () => {
    fetchUsers()
    fetchPosts()
  }

 return(
  <>
  <div className={`${handles.aleatorio}`}>
    <p className={`${handles.apiAleatorio}`}>Api Aleatória</p>
    <button className={`${handles.aleatorioButton}`} onClick={() => fetchAll()}>
      Buscar
    </button>
    <div className={`${handles.postgif}`}>
        {loading? (<img  src="https://icon-library.com/images/loading-gif-icon/loading-gif-icon-9.jpg"/>) : null}
        </div>
    {users.length > 0 && posts.map(post => (
      <div className={`${handles.aleatorioContainer}`}>
        <div className={`${handles.aleatorioTitle}`}>
          {post.title}
        </div>
        <div className={`${handles.aleatorioBody}`}>
          {post.body}
        </div>
        <div className={`${handles.containercontatos}`}>
        <p className={`${handles.contatos}`}>
          Contatos:
        </p>
        <p className={`${handles.contatosname}`}>nome:{users.find(user => user.id == post.userId)?.name}</p>
         <p className={`${handles.contatosusername}`}> user-name:{users.find(user => user.id == post.userId)?.username}</p>
        <p className={`${handles.contatosemail}`}>e-mail: {users.find(user => user.id == post.userId)?.email}</p>
        </div>
      </div>
    ))}
    </div>
  </>
 )
}
export default ApiAleatoria;


