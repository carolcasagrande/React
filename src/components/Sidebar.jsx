import { PencilLine } from 'phosphor-react';
import sidebar from '../assets/cover-green.png'
import styles from './Sidebar.module.css';

export function Sidebar(){
    return (
        <aside className={styles.sidebar}>
            <img 
            className={styles.cover} 
            src={sidebar} 
            />

            <div className={styles.profile}>
                <img 
                className={styles.avatar} 
                src="https://img.freepik.com/vetores-gratis/ilustracao-do-conceito-de-medico_114360-1072.jpg?w=740&t=st=1687792231~exp=1687792831~hmac=47cdfd35036a11e820935471dafb975b3ccce82bafa2740eec4fb98bcc1726c4" 
                />

                <strong>Caroline Casagrande</strong>
                <span>Dermatologista</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil</a>
            </footer>
        </aside>
    )
}