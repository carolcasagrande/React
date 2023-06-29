import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.comment}>
           <Avatar hasBorder={false} src="https://img.freepik.com/vetores-gratis/ilustracao-do-conceito-de-teletrabalho_52683-36162.jpg?w=740&t=st=1687866183~exp=1687866783~hmac=d309381cb62352df3a14e578bbd39d23d91ca3d9db888762b63725df94644438"  />

           <div className={styles.commentBox}>
               <div className={styles.commentContent}>
                   <header>
                       <div className={styles.authorAndTime}>
                           <strong>Caroline Casagrande</strong>
                           <time title='11 de Maio às 08:13h' dateTime='2002-05-11 08:13:30'>Cerca de 1hr atrás</time>
                       </div>

                       <button title="Deletar comentário">
                           <Trash size={24}/>
                       </button>
                   </header>

                   <p>Muito bom Devon, parabéns!! 👏👏</p>
               </div>

               <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
               </footer>
           </div>
        </div>
    )
}