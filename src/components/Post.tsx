import { format, formatDistanceToNow } from 'date-fns';
import {ptBR} from 'date-fns/locale/pt-BR';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

// Define a interface Author para tipar o autor do post, incluindo nome, cargo e URL do avatar
interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  type: 'paragraph' | 'link';
  content: string;
}

export interface PostType {
  id: number;
  author: Author;
  publishedAt: Date;
  content: Content[];
}

// Define a interface PostProps para tipar as propriedades do componente Post
interface PostProps {
  post: PostType;
}

// Define o componente Post como uma função que recebe as propriedades do post
export function Post({ post }: PostProps) {
  // Define o estado local para os comentários, iniciando com um comentário padrão
  const [comments, setComments] = useState([
    'Post muito bacana, hein?!'
  ]);
  
  // Define o estado local para o texto do novo comentário
  const [newCommentText, setNewCommentText] = useState('');
  
  const publishedDateFormatted = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });
  
  // Calcula a distância relativa da data de publicação até o momento atual
  const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true
  });
  
   // Função para lidar com o envio do novo comentário
  function handleCrateNewComment(event: FormEvent) {
    event.preventDefault() // Previne o comportamento padrão do formulário
    
    setComments([...comments, newCommentText]); // Adiciona o novo comentário ao estado
    setNewCommentText(''); // Limpa o campo de texto do comentário
  }

  // Função para lidar com mudanças no campo de texto do novo comentário
  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity(''); //Remove qualquer mensagem de validade customizada
    setNewCommentText(event.target.value); // Atualiza o estado com o novo valor do comentário
  }

  // Função para lidar com o caso em que o campo de texto do comentário é inválido
  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!');
  }

  // Função para deletar um comentário específico
  function deleteComment(commentToDelete: string) {
    // Filtra os comentários para remover o comentário que deve ser excluído
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete;
    })
    
    setComments(commentsWithoutDeletedOne); // Atualiza o estado com a lista filtrada de comentários
  }

  // Verifica se o texto do novo comentário está vazio para desabilitar o botão de envio
  const isNewCommentEmpty = newCommentText.length === 0;

  // Retorna o layout do componente Post
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
        <Avatar src={post.author.avatarUrl} />
          <div className={styles.authorInfo}>
          <strong>{post.author.name}</strong>
          <span>{post.author.role}</span>
          </div>
        </div>
        
        <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>
      
      <div className={styles.content}>
      {post.content.map(line => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === 'link') {
            return <p key={line.content}><a href="#">{line.content}</a></p>
          }
        })}
      </div>
      
      <form onSubmit={handleCrateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        
        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

      <footer>
      <button type="submit" disabled={isNewCommentEmpty}>
      Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}> {/* Seção para listar os comentários existentes */}
        {comments.map(comment => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment} //* Passa a função de deletar comentário para o componente Comment */
            />
          )
        })}
      </div>
    </article>
  )
}