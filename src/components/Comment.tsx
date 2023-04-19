import { ThumbsUp, Trash } from 'phosphor-react';

import { Avatar } from './Avatar';
import styles from './Comment.module.css';
import { useState } from 'react';

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);
  
  function onClickDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount((state) => { // utiliza a versão mais atual do estado do LikeCount
      return state + 1;
    });
  }
  
  return (
    <div className={styles.comment} >
      <Avatar hasBorder={false} src="https://github.com/0svaldojunior.png" />

      <div className={styles.commentBox} >
        <div className={styles.commentContent} >
        <header>
          <div className={styles.authorAndTime} >
            <strong>Osvaldo Junior</strong>
            <time title="11 de Maio às 08:13hrs" dateTime="2022-05-11 08:53:01" >Cerca de 1h atrás</time>
          </div>

          <button onClick={onClickDeleteComment} title='Deletar comentário' >
            <Trash size={24} />
          </button>
        </header>

        <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment} >
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}