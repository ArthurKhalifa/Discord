import style from '../04Doing/Doing.module.css'
//= ARROW's =//
import { AiOutlineArrowRight } from 'react-icons/ai'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import degree from '../img/degree.png'
import work from '../img/work.png'
import self from '../img/self.png'
import thinking from '../img/thinking.png'
import yes from '../img/yes.png'
import freelance from '../img/freelance.png'

export default function Doing() {

    const [state, setState] = useState(false);
    const [state2, setState2] = useState(false);
    const [state3, setState3] = useState(false);
    const [state4, setState4] = useState(false);
    const [state5, setState5] = useState(false);

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
    // =============================================
    const [info, setInfo] = useState('');

    const handleClick = (botao) => {
        setInfo(botao);
    };

    return (
        <div className={style.container}>
            <div className={style.div}>
                <div className={style.header}>
                    <p>Etapa 2 de 4</p>
                    <h2>Sua ocupação no momento</h2>
                </div>
                <div className={style.select} >
                    <button className={state ? style.toggle : style.notoggle} onClick={toggle}>
                        <div className={style.opt} onClick={() => handleClick(' | Curioso | ')}>
                            <div className={style.show}>
                                <p className={style.pshow}>+13 pessoas em comum</p>
                                <img src={yes} className={style.icon} />
                            </div>
                            <img src={thinking} className={style.img} />
                            <p>Curioso</p>
                        </div>
                    </button>
                    {/* */}
                    <button className={state2 ? style.toggle2 : style.notoggle} onClick={toggle2}>
                        <div className={style.opt} onClick={() => handleClick(' | Trabalhando na área | ')}>
                            <div className={style.show2}>
                                <p className={style.pshow}>+56 pessoas em comum</p>
                                <img src={yes} className={style.icon} />
                            </div>
                            <img src={work} className={style.img} />
                            <p>Trabalhando na área</p>
                        </div>
                    </button>
                    {/* */}
                    <button className={state3 ? style.toggle3 : style.notoggle} onClick={toggle3}>
                        <div className={style.opt} onClick={() => handleClick(' | Faculdade | ')}>
                            <div className={style.show3}>
                                <p className={style.pshow}>+43 pessoas em comum</p>
                                <img src={yes} className={style.icon} />
                            </div>
                            <img src={degree} className={style.img} />
                            <p>Faculdade</p>
                        </div>
                    </button>
                    {/* */}
                    <button className={state4 ? style.toggle4 : style.notoggle} onClick={toggle4}>
                        <div className={style.opt} onClick={() => handleClick(' | Freelance | ')}>
                            <div className={style.show4}>
                                <p className={style.pshow}>+21 pessoas em comum</p>
                                <img src={yes} className={style.icon} />
                            </div>
                            <img src={freelance} className={style.img} />
                            <p>Freelance</p>
                        </div>
                    </button>
                    {/* */}
                    <button className={state5 ? style.toggle5 : style.notoggle} onClick={toggle5}>
                        <div className={style.opt} onClick={() => handleClick(' | Estudando por conta própria | ')}>
                            <div className={style.show5}>
                                <p className={style.pshow}>+48 pessoas em comum</p>
                                <img src={yes} className={style.icon} />
                            </div>
                            <img src={self} className={style.img} />
                            <p>Estudando por conta própria</p>
                        </div>
                    </button>
                </div>
            </div>
            <div className={style.footer}>
                <div className={style.back}>
                    <Link to='/Id' className={style.link}>
                        <button className={style.btn2}><AiOutlineArrowLeft />Voltar</button>
                    </Link>
                </div>
                <div className={style.next}>
                    <p>Você recebeu o cargo<span className={style.bold}>{info}</span></p>
                    <Link to='/Area' className={style.link}>
                        <button className={style.btn}>Proximo
                            <AiOutlineArrowRight />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}