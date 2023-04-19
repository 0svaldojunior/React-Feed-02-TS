import './global.css';

import { Post, PostType } from './components/Post';

import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import styles from './App.module.css';

// author: {avatarURL: "", name: "", role: ""}
// publishedAt: Date
// content: String

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarURL: "https://github.com/0svaldojunior.png",
      name: "Osvaldo Junior",
      role: "CTO @ Buyee.me",
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mai,s um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-04-19 10:35:00'),
  },
  {
    id: 2,
    author: {
      avatarURL: "https://github.com/giselek.png",
      name: "Gisele Knack",
      role: "CEO @ Buyee.me",
    },
    content: [
      {type: 'paragraph', content: 'Fala pessoal 👋'},
      {type: 'paragraph', content: 'Subir um projeto novo em meu portifa. 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-04-03 21:43:00'),
  }
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map(post => {
              return (
                <Post 
                  key={post.id}
                  post={post}
                />
              );
            })
          }
        </main>
      </div>
    </div>
  )
}

