import style from '../06Level/Level.module.css'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

//= ARROW's =//
import { AiOutlineArrowRight } from 'react-icons/ai'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useState } from 'react'

import pleno from '../img/pleno.png'
import junior from '../img/junior.png'
import senior from '../img/senior.png'
import iniciante from '../img/iniciante.png'
import yes from '../img/yes.png'

export default function Level({ data }) {

    const [state, setState] = useState(false);
    const [state2, setState2] = useState(false);
    const [state3, setState3] = useState(false);
    const [state4, setState4] = useState(false);

    const toggle = () => {
        state ? setState(false) : setState(true);
    }
    const toggle2 = () => {
        state2 ? setState2(false) : setState2(true);
    }
    const toggle3 = () => {
        state3 ? setState3(false) : setState3(true);
    }
    const toggle4 = () => {
        state4 ? setState4(false) : setState4(true);
    }
    // =============================================

    return (
        <div className={style.container}>
            <div className={style.div}>
                <div className={style.header}>
                    <p>Etapa 4 de 4</p>
                    <h2>Qual seu nível na programação?</h2>
                </div>
                <div className={style.select} >
                    <button className={state ? style.toggle : style.notoggle} onClick={toggle}>
                        <div className={style.opt}>
                            <div className={style.show}>
                                <p className={style.pshow}>+23 pessoas em comum</p>
                                <img src={yes} className={style.icon} />
                            </div>
                            <img src={iniciante} className={style.img} />
                            <p>Iniciante</p>
                        </div>
                    </button>
                    {/* */}
                    <button className={state2 ? style.toggle2 : style.notoggle} onClick={toggle2}>
                        <div className={style.opt}>
                            <div className={style.show2}>
                                <p className={style.pshow}>+67 pessoas em comum</p>
                                <img src={yes} className={style.icon} />
                            </div>
                            <img src={junior} className={style.img} />
                            <p>Junior</p>
                        </div>
                    </button>
                    {/* */}
                    <button className={state3 ? style.toggle3 : style.notoggle} onClick={toggle3}>
                        <div className={style.opt}>
                            <div className={style.show3}>
                                <p className={style.pshow}>+32 pessoas em comum</p>
                                <img src={yes} className={style.icon} />
                            </div>
                            <img src={pleno} className={style.img} />
                            <p>Pleno</p>
                        </div>
                    </button>
                    {/* */}
                    <button className={state4 ? style.toggle4 : style.notoggle} onClick={toggle4}>
                        <div className={style.opt}>
                            <div className={style.show4}>
                                <p className={style.pshow}>+38 pessoas em comum</p>
                                <img src={yes} className={style.icon} />
                            </div>
                            <img src={senior} className={style.img} />
                            <p>Sênior</p>
                        </div>
                    </button>
                </div>
            </div>
            <div className={style.footer}>
                <div className={style.back}>
                    <Link to='/Area' className={style.link}><button className={style.btn2}><AiOutlineArrowLeft />Voltar</button> </Link>
                </div>
                <div className={style.next}>
                    <p>Você recebeu o cargo <span></span></p>
                    <Link to='/Accept' className={style.link}><button className={style.btn}>Proximo
                        <AiOutlineArrowRight />
                    </button></Link>
                </div>
            </div>

        </div>
    )
}