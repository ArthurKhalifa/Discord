import style from '../08Done/Done.module.css'

import { Link } from 'react-router-dom'

export default function Done() {
    return (
        <div className={style.container}>
            <div className={style.div}>
                <h1>Obrigado<span className={style.color}>!</span></h1>
                <p className={style.parag}>Parte 2 em andamento.. <br /> (Persistência de dados/Responsividade/Primeira interface do Discord)</p>
                <Link to="/" className={style.link}><button className={style.btn}>Início</button></Link>
            </div>
        </div>
    )
}