import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post(){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://img.freepik.com/vetores-gratis/mulher-que-trabalha-a-partir-de-seu-conceito-de-teletrabalho-em-casa_23-2148626639.jpg?w=740&t=st=1687874781~exp=1687875381~hmac=8ffcca9193ab2cad309d814eb5e750de4d927db0037fd07f9e7e9526a568e37d" />
                    <div className={styles.authorInfo}>
                        <strong>Caroline Casagrande</strong>
                        <span>Desenvolvedora Front-end e UX</span>
                    </div>
                </div>

                <time title='11 de Maio às 08:13h' dateTime='2002-05-11 08:13:30'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraaa ✌️</p>
                <p>Acabei de subir mais um projeto no meu portfolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare </p>
                <p>🤩 {' '}
                    <a href="">jane.design/doctorcare</a>    
                </p>
                <p>
                    <a href="">#novoprojeto  </a> {' '}
                    <a href="">#nlw</a> {' '}
                    <a href="">#rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                    placeholder="Deixe um comentário"                
                />
                <button type="submit">Publicar</button>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}