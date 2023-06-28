import style from '../05Area/Area.module.css'

//= ARROW's =//
import { AiOutlineArrowRight } from 'react-icons/ai'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import full from '../img/full.png'
import back from '../img/back.png'
import mobileIos from '../img/mobileIos.png'
import mobileAnd from '../img/mobileAnd.png'
import front from '../img/front.png'
import data from '../img/data.png'
import game from '../img/game.png'
import banco from '../img/banco.png'
import yes from '../img/yes.png'

export default function Area() {

    const [state, setState] = useState(false);
    const [state2, setState2] = useState(false);
    const [state3, setState3] = useState(false);
    const [state4, setState4] = useState(false);
    const [state5, setState5] = useState(false);
    const [state6, setState6] = useState(false);
    const [state7, setState7] = useState(false);
    const [state8, setState8] = useState(false);

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
    const toggle5 = () => {
        state5 ? setState5(false) : setState5(true);
    }
    const toggle6 = () => {
        state6 ? setState6(false) : setState6(true);
    }
    const toggle7 = () => {
        state7 ? setState7(false) : setState7(true);
    }
    const toggle8 = () => {
        state8 ? setState8(false) : setState8(true);
    }

    // =============================================

    return (
        <div className={style.container}>
            <div className={style.div}>
                <div className={style.header}>
                    <p>Etapa 3 de 4</p>
                    <h2>Sua área de atuação</h2>
                </div>
                <div className={style.select} >
                    <button className={state ? style.toggle : style.notoggle} onClick={toggle}>
                        <div className={style.opt}>
                            <div className={style.show}>
                                <p className={style.pshow}>+45 pessoas em comum</p>
                                <img src={yes} className={style.icon} />
                            </div>
                            <img src={front} className={style.img} />
                            <p>Front-End</p>
                        </div>
                    </button>

                    {/* */}
                    <button className={state2 ? style.toggle2 : style.notoggle} onClick={toggle2}>
                        <div className={style.opt}>
                            <div className={style.show2}>
                                <p className={style.pshow}>+51 pessoas em comum</p>
                                <img src={yes} className={style.icon} />
                            </div>
                            <img src={back} className={style.img} />
                            <p>Back-End</p>
                        </div>
                    </button>

                    {/* */}
                    <button className={state3 ? style.toggle3 : style.notoggle} onClick={toggle3}>
                        <div className={style.opt}>
                            <div className={style.show3}>
                                <p className={style.pshow}>+38 pessoas em comum</p>
                                <img src={yes} className={style.icon} />
                            </div>
                            <img src={full} className={style.img} />
                            <p>Full-Stack</p>
                        </div>
                    </button>

                    {/* */}
                    <button className={state4 ? style.toggle4 : style.notoggle} onClick={toggle4}>
                        <div className={style.opt}>
                            <div className={style.show4}>
                                <p className={style.pshow}>+24 pessoas em comum</p>
                                <img src={yes} className={style.icon} />
                            </div>
                            <img src={mobileIos} className={style.img} />
                            <p>Mobile IOS</p>
                        </div>
                    </button>

                    {/* */}
                    <button className={state5 ? style.toggle5 : style.notoggle} onClick={toggle5}>
                        <div className={style.opt}>
                            <div className={style.show5}>
                                <p className={style.pshow}>+19 pessoas em comum</p>
                                <img src={yes} className={style.icon} />
                            </div>
                            <img src={mobileAnd} className={style.img} />
                            <p>Mobile Android</p>
                        </div>
                    </button>

                    {/* */}
                    <button className={state6 ? style.toggle6 : style.notoggle} onClick={toggle6}>
                        <div className={style.opt}>
                            <div className={style.show6}>
                                <p className={style.pshow}>+27 pessoas em comum</p>
                                <img src={yes} className={style.icon} />
                            </div>
                            <img src={data} className={style.img} />
                            <p>Data Science</p>
                        </div>
                    </button>

                    {/* */}
                    <button className={state7 ? style.toggle7 : style.notoggle} onClick={toggle7}>
                        <div className={style.opt}>
                            <div className={style.show7}>
                                <p className={style.pshow}>+32 pessoas em comum</p>
                                <img src={yes} className={style.icon} />
                            </div>
                            <img src={banco} className={style.img} />
                            <p>Banco de Dados</p>
                        </div>
                    </button>

                    {/* */}
                    <button className={state8 ? style.toggle8 : style.notoggle} onClick={toggle8}>
                        <div className={style.opt}>
                            <div className={style.show8}>
                                <p className={style.pshow}>+23 pessoas em comum</p>
                                <img src={yes} className={style.icon} />
                            </div>
                            <img src={game} className={style.img} />
                            <p>GameDev</p>
                        </div>
                    </button>

                </div>

            </div>
            <div className={style.footer}>
                <div className={style.back}>
                    <Link to='/Doing' className={style.link}><button className={style.btn2}><AiOutlineArrowLeft />Voltar</button></Link>
                </div>
                <div className={style.next}>
                    <p>Você recebeu o cargo <span></span></p>
                    <Link to='/Level' className={style.link}><button className={style.btn}>Proximo
                        <AiOutlineArrowRight />
                    </button></Link>
                </div>

            </div>
        </div>
    )
}