import styles from './Header.module.css';

import igniteLogo from '../assets/ignite-logo.svg';

// Define o componente Header como uma função que retorna o layout do cabeçalho
export function Header() {
  return (
    <header className={styles.header}> {/* Aplica estilos específicos ao elemento de cabeçalho */}
      
      <img src={igniteLogo} alt="Logotipo do Ignite" /> {/* Renderiza a imagem do logotipo com uma descrição alternativa */}
    </header>
  );
}