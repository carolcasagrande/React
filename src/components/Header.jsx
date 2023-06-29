import styles from './Header.module.css'
import laptopLogo from '../assets/laptop.svg'

export function Header(){
    return (
        <header className={styles.header}>
            <img src={laptopLogo} alt="logo" />
        </header>
    )
}