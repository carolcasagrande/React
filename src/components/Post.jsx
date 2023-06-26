import styles from './Post.module.css'

export function Post(){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://img.freepik.com/vetores-gratis/ilustracao-do-conceito-de-medico_114360-1072.jpg?w=740&t=st=1687792231~exp=1687792831~hmac=47cdfd35036a11e820935471dafb975b3ccce82bafa2740eec4fb98bcc1726c4" />
                    <div className={styles.authorInfo}>
                        <strong>Caroline Casagrande</strong>
                        <span>Dermatologista</span>
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
        </article>
    )
}