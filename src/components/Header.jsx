import styles from './Header.module.css'
import doctorLogo from '../assets/doctors-logo.svg'

export function Header(){
    return (
        <header className={styles.header}>
            <img src={doctorLogo} alt="logo do Doctors" />
        </header>
    )
}