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
    
    const [botaoAtivo, setBotaoAtivo] = useState(null);
    const [info, setInfo] = useState('');

    const handleClick = (botao) => {
        setBotaoAtivo(botao);
        setInfo(botao);
    };
    // =====================

    return (

        <div className={style.container}>
            <div className={style.div}>
                <div className={style.header}>
                    <p>Etapa 1 de 4</p>
                    <h2>Como você se identifica?</h2>
                </div>
                <div className={style.select} >
                    <button className={botaoAtivo === ' | Masculino | ' ? style.ativo : ''} onClick={() => handleClick(' | Masculino | ')}>
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
                    <button className={botaoAtivo === ' | Feminino | ' ? style.ativo2 : ''} onClick={() => handleClick(' | Feminino | ')}>
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
                    <button className={botaoAtivo === ' | Outro | ' ? style.ativo3 : ''} onClick={() => handleClick(' | Outro | ')}>
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
                    <button className={botaoAtivo === ' | Prefiro não responder | ' ? style.ativo4 : ''} onClick={() => handleClick(' | Prefiro não responder | ')}>
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
                    <p>Você recebeu o cargo<span className={style.bold}>{info}</span></p>
                    <Link to='/Doing' className={style.link}><button className={style.btn}>Proximo
                        <AiOutlineArrowRight />
                    </button></Link>
                </div>

            </div>
        </div>
    )
}