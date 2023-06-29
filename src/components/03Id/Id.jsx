import masculino from '../img/masculino.png'
import feminino from '../img/feminino.png'
import genero from '../img/genero.png'
import dont from '../img/dont.png'
import yes from '../img/yes.png'

import style from '../03Id/Id.module.css'

import { AiOutlineArrowRight } from 'react-icons/ai'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Id() {

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

    const troca = () => {
        setState(!state);
    }

    return (

        <div className={style.container}>
            <div className={style.div}>
                <div className={style.header}>
                    <p>Etapa 1 de 4</p>
                    <h2>Como você se identifica?</h2>
                </div>
                <div className={style.select} >
                    <button className={state ? style.toggle : style.notoggle} onClick={troca}>
                        <div className={style.opt}>
                            <div className={style.show}>
                                <p className={style.pshow}>+61 pessoas em comum</p>
                                <img src={yes} className={style.icon} />
                            </div>
                            <img src={masculino} className={style.img} />
                            <p>Masculino</p>
                        </div>
                    </button>
                    {/* */}
                    <button className={state2 ? style.toggle2 : style.notoggle} onClick={toggle2}>
                        <div className={style.opt}>
                            <div className={style.show2}>
                                <p className={style.pshow}>+100 pessoas em comum</p>
                                <img src={yes} className={style.icon} />
                            </div>
                            <img src={feminino} className={style.img} />
                            <p>Feminino</p>
                        </div>
                    </button>
                    {/* */}
                    <button className={state3 ? style.toggle3 : style.notoggle} onClick={toggle3}>
                        <div className={style.opt}>
                            <div className={style.show3}>
                                <p className={style.pshow}>+08 pessoas em comum</p>
                                <img src={yes} className={style.icon} />
                            </div>
                            <img src={genero} className={style.img} />
                            <p>Outro</p>
                        </div>
                    </button>
                    {/* */}
                    <button className={state4 ? style.toggle4 : style.notoggle} onClick={toggle4}>
                        <div className={style.opt}>
                            <div className={style.show4} >
                                <p className={style.pshow}>+12 pessoas em comum</p>
                                <img src={yes} className={style.icon} />
                            </div>
                            <img src={dont} className={style.img} />
                            <p>Prefiro não responder</p>
                        </div>
                    </button>
                </div>

            </div>
            <div className={style.footer}>
                <div className={style.back}>
                    <Link to='/Invite' className={style.link}><button className={style.btn2}><AiOutlineArrowLeft />Voltar</button></Link>
                </div>
                <div className={style.next}>
                    <p>Você recebeu o cargo <span></span></p>
                    <Link to='/Doing' className={style.link}><button className={style.btn}>Proximo
                        <AiOutlineArrowRight />
                    </button></Link>
                </div>

            </div>
        </div>
    )
}