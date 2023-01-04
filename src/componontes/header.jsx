import styles from './Header.module.css'
import Logo from './Logo.png';

export function Header(){
  return(
    <header className={styles.header}>
       <img src={Logo} alt="" className={styles.imagem} />
    </header>
   
  )
}