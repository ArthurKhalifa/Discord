import style from '../08Done/Done.module.css'

import { Link } from 'react-router-dom'

export default function Done() {
    return (
        <div className={style.container}>
            <div className={style.div}>
                <h1><span className={style.color}>O</span>brigado<span className={style.color}>!</span></h1>
                <h3>Parte 2 em andamento..(validação/interface do Discord)</h3>
                <Link to="/" className={style.link}><button className={style.btn}>Início</button></Link>
            </div>
        </div>
    )
}