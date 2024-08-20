import { Header } from './components/Header';
import { Post, PostType } from './components/Post'
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

// Define um array de posts com informações sobre cada post, incluindo autor, conteúdo e data de publicação
const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/LucieneFreitas.png',
      name: 'Luciene',
      role: 'Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/LucieneFreitas.png',
      name: 'Luciene Freitas',
      role: 'Developer frontend',
    },
    content: [// Conteúdo do post, que pode incluir parágrafos e links
      { type: 'paragraph', content: 'Hello 👋' },
      { type: 'paragraph', content: 'Novo Projeto na área 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-05-10 20:00:00'),
  },
];

// Função principal do componente App que renderiza o layout da aplicação
export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}> 
        <Sidebar />
        <main>
          {/* Mapeia o array de posts e renderiza um componente Post para cada item */}
        {posts.map(post => {
            return (
              <Post
                key={post.id} //Define a chave única para cada componente Post
                post={post} // Passa o objeto post como prop para o componente Post
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
  
 