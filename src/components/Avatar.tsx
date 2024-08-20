import { ImgHTMLAttributes } from "react";
import styles from './Avatar.module.css'

// Define a interface AvatarProps, que estende os atributos de uma imagem HTML e adiciona a propriedade opcional hasBorder
interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean; // Propriedade opcional para indicar se o avatar deve ter borda ou não 
}

// Define o componente Avatar como uma função que recebe as propriedades do avatar
export function Avatar({ hasBorder = true, ...props}: AvatarProps) {
  return (
    <img
    // Define a classe CSS condicionalmente, com ou sem borda, com base no valor de hasBorder
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}

      // Passa todas as outras propriedades (como src, alt, etc.) para o elemento <img>
      {...props}
    />
  );
}