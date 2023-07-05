
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import style from '../01Enter/Enter.module.css'
// import Backg from '../img/img1.jpg'



export default function Enter() {
    return (
        <div className={style.container}>
            <div className={style.div}>
                <h1 className={style.h1}>Servidor Discord</h1>
                <p className={style.parag}>Clickando no botão você passará por um processo para entrar no servidor</p>
                <Link to="/Invite" className={style.link}>
                    <button className={style.btn}>Ir para o Discord</button>
                </Link>
            </div>
        </div>
    )
}