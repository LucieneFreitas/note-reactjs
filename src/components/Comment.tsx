import { useState } from "react";
import styles from './Comment.module.css';

// Importa os ícones ThumbsUp (aplaudir) e Trash (lixeira) do pacote 'phosphor-react'
import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';

// Define a interface CommentProps para tipar as propriedades recebidas pelo componente Comment
interface CommentProps {
  content: string; // O conteúdo do comentário
  onDeleteComment: (comment: string) => void; // Função para deletar o comentário
}

// Define o componente Comment como uma função que recebe as propriedades do comentário
export function Comment({ content, onDeleteComment }: CommentProps) {
  // Define o estado local para contar o número de likes (aplausos), iniciando com 0
  const [likeCount, setLikeCount] = useState(0);

  // Função para lidar com a exclusão do comentário
  function handleDeleteComment() {
    onDeleteComment(content);// Chama a função onDeleteComment passando o conteúdo do comentário
  }

  // Função para lidar com o aumento da contagem de likes
  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1 // Incrementa a contagem de likes em 1
    });
  }

  // Retorna o layout do componente Comment
  return (
    <div className={styles.comment}> {/* Aplica estilos específicos ao comentário */}     
      <Avatar
        hasBorder={false} //Define que o avatar não terá borda
        src="https://github.com/LucieneFreitas.png"
        alt=""
      />

      <div className={styles.commentBox}> {/* Caixa que contém o conteúdo e ações do comentário */}
        <div className={styles.commentContent}> {/* Seção para o conteúdo do comentário */}
          <header>
            <div className={styles.authorAndTime}>
              <strong>Luciene Freitas</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">Cerca de 1h atrás</time>
            </div>

            <button title="Deletar comentário" onClick={handleDeleteComment}>
              <Trash size={24} /> {/* Ícone de lixeira */}
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
        <button onClick={handleLikeComment}> {/* Botão para dar like (aplaudir) no comentário */}
            <ThumbsUp /> {/* Ícone de aplauso */}
            Aplaudir <span>{likeCount}</span> {/* Exibe a contagem de likes */}
          </button>
        </footer>
      </div>
    </div>
  )
}