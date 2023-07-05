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

export default function Level() {

    const [botaoAtivo, setBotaoAtivo] = useState(null);
    const [info, setInfo] = useState('');

    const handleClick = (botao) => {
        setBotaoAtivo(botao);
        setInfo(botao);
    };

    const [buttonClicked, setButtonClicked] = useState(false);


    const handleButtonClick = () => {
        setButtonClicked(true);
    };
    return (
        <div className={style.container}>
            <div className={style.div}>
                <div className={style.header}>
                    <p>Etapa 4 de 4</p>
                    <h2>Qual seu nível na programação?</h2>
                </div>
                <div className={style.select} >
                    <button className={botaoAtivo === ' Iniciante ' ? style.ativo : ''} onClick={() => handleClick(' Iniciante ')}>
                        <div className={style.opt} onClick={handleButtonClick}>
                            <div className={style.show}>
                                <p className={style.pshow}>+23 pessoas em comum</p>
                                <img src={yes} className={style.icon} />
                            </div>
                            <img src={iniciante} className={style.img} />
                            <p>Iniciante</p>
                        </div>
                    </button>
                    {/* */}
                    <button className={botaoAtivo === ' Junior ' ? style.ativo2 : ''} onClick={() => handleClick(' Junior ')}>
                        <div className={style.opt} onClick={handleButtonClick} >
                            <div className={style.show2}>
                                <p className={style.pshow}>+67 pessoas em comum</p>
                                <img src={yes} className={style.icon} />
                            </div>
                            <img src={junior} className={style.img} />
                            <p>Junior</p>
                        </div>
                    </button>
                    {/* */}
                    <button className={botaoAtivo === ' Pleno ' ? style.ativo3 : ''} onClick={() => handleClick(' Pleno ')}>
                        <div className={style.opt} onClick={handleButtonClick} >
                            <div className={style.show3}>
                                <p className={style.pshow}>+32 pessoas em comum</p>
                                <img src={yes} className={style.icon} />
                            </div>
                            <img src={pleno} className={style.img} />
                            <p>Pleno</p>
                        </div>
                    </button>
                    {/* */}
                    <button className={botaoAtivo === ' Sênior ' ? style.ativo4 : ''} onClick={() => handleClick(' Sênior ')}>
                        <div className={style.opt} onClick={handleButtonClick}>
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
                    <Link to='/Area' className={style.link}>
                        <button className={style.btn2}><AiOutlineArrowLeft />Voltar</button>
                    </Link>
                </div>
                <div className={style.next}>
                    <p>Você recebeu o cargo <span className={style.bold}>{info}</span></p>
                    {buttonClicked ? (
                        <Link to="/Accept" className={style.link}>
                            <button className={style.btn}>Avançar <AiOutlineArrowRight /></button>
                        </Link>
                    ) : (
                        <button disabled className={style.btnOff}>Avançar <AiOutlineArrowRight /></button>
                    )}
                </div>
            </div>

        </div>
    )
}