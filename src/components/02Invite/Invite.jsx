import style from '../02Invite/Invite.module.css'
import img1 from '../img/img1.jpg'
import flash from '../img/flash.png'
import icon from '../img/on.png'

import { BiWifiOff } from 'react-icons/bi'

import { Link } from 'react-router-dom'
export default function Invite() {
    return (
        <div className={style.container}>
            <div className={style.div}>
                <div className={style.left}>
                    <img src={flash} className={style.flash} />
                    <p>Você foi convidado(a) para entrar</p>
                    <h2>Flash Code | PT-BR</h2>
                    {/* */}
                    <div className={style.parag}>
                        <img src={icon} className={style.icon} />
                        <p>42 online</p>
                        <p><BiWifiOff />181 Membros</p>
                    </div>
                    {/* */}
                    <div className={style.way}>
                        <Link to='/Id' className={style.link}><button className={style.btn}>
                            Entrar em <span>Flash Code | PT-BR</span>
                        </button>
                        </Link>
                        <Link to='/' className={style.link}><a href="" className={style.href}>Hoje não</a></Link>
                    </div>

                </div>
                <div className={style.right}>
                    <img src={img1} className={style.img} />
                </div>

            </div>
        </div>
    )
}