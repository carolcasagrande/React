import { PencilLine } from 'phosphor-react';
import sidebar from '../assets/cover-green.png'
import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';

export function Sidebar(){
    return (
        <aside className={styles.sidebar}>
            <img 
            className={styles.cover} 
            src={sidebar} 
            />

            <div className={styles.profile}>
                <Avatar src="https://img.freepik.com/vetores-gratis/ilustracao-do-conceito-de-teletrabalho_52683-36162.jpg?w=740&t=st=1687866183~exp=1687866783~hmac=d309381cb62352df3a14e578bbd39d23d91ca3d9db888762b63725df94644438" />

                <strong>Caroline Casagrande</strong>
                <span>Desenvolvedora Front-end e UX</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil</a>
            </footer>
        </aside>
    )
}