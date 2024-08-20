// Importa o ícone PencilLine do pacote 'phosphor-react'
import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';

import styles from './Sidebar.module.css';

// Define o componente Sidebar como uma função que retorna o layout da barra lateral
export function Sidebar() {
  return (
    <aside className={styles.sidebar}> {/* Cria uma seção lateral com estilos aplicados do arquivo CSS */}
      <img
        className={styles.cover} // Aplica estilos específicos para a imagem de capa
        src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />

      <div className={styles.profile}>      
      <Avatar src="https://github.com/LucieneFreitas.png" />
      
        <strong>Luciene Freitas</strong>
        <span>ServiceNow and Front-end Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}