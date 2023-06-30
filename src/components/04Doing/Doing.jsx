import style from '../04Doing/Doing.module.css';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import degree from '../img/degree.png';
import work from '../img/work.png';
import self from '../img/self.png';
import thinking from '../img/thinking.png';
import yes from '../img/yes.png';
import freelance from '../img/freelance.png';

export default function Doing() {
    const [state, setState] = useState(false);
    const [state2, setState2] = useState(false);
    const [state3, setState3] = useState(false);
    const [state4, setState4] = useState(false);
    const [state5, setState5] = useState(false);

    const toggle = () => {
        setState(!state);
    };
    const toggle2 = () => {
        setState2(!state2);
    };
    const toggle3 = () => {
        setState3(!state3);
    };
    const toggle4 = () => {
        setState4(!state4);
    };
    const toggle5 = () => {
        setState5(!state5);
    };

    const [textos, setTextos] = useState([]);

    const handleClick = (botao) => {
        if (textos.includes(botao)) {
            setTextos(textos.filter((texto) => texto !== botao));
        } else {
            setTextos([...textos, botao]);
        }
    };

    const isButtonEnabled = textos.length > 0;
    
    return (
        <div className={style.container}>
            <div className={style.div}>
                <div className={style.header}>
                    <p>Etapa 2 de 4</p>
                    <h2>Sua ocupação no momento</h2>
                </div>
                <div className={style.select}>
                    <button className={state ? style.toggle : style.notoggle} onClick={toggle}>
                        <span>
                            <div className={style.opt} onClick={() => handleClick(' Curioso')}>
                                <div className={style.show}>
                                    <p className={style.pshow}>+13 pessoas em comum</p>
                                    <img src={yes} className={style.icon} alt="Icon" />
                                </div>
                                <img src={thinking} className={style.img} alt="Icon" />
                                <p>Curioso</p>
                            </div>
                        </span>
                    </button>
                    {/* */}
                    <button className={state2 ? style.toggle2 : style.notoggle} onClick={toggle2}>
                        <span>
                            <div className={style.opt} onClick={() => handleClick(' Trabalhando na área')}>
                                <div className={style.show2}>
                                    <p className={style.pshow}>+56 pessoas em comum</p>
                                    <img src={yes} className={style.icon} alt="Icon" />
                                </div>
                                <img src={work} className={style.img} alt="Icon" />
                                <p>Trabalhando na área</p>
                            </div>
                        </span>
                    </button>
                    {/* */}
                    <button className={state3 ? style.toggle3 : style.notoggle} onClick={toggle3}>
                        <span>
                            <div className={style.opt} onClick={() => handleClick(' Faculdade')}>
                                <div className={style.show3}>
                                    <p className={style.pshow}>+43 pessoas em comum</p>
                                    <img src={yes} className={style.icon} alt="Icon" />
                                </div>
                                <img src={degree} className={style.img} alt="Icon" />
                                <p>Faculdade</p>
                            </div>
                        </span>
                    </button>
                    {/* */}
                    <button className={state4 ? style.toggle4 : style.notoggle} onClick={toggle4}>
                        <span>
                            <div className={style.opt} onClick={() => handleClick(' Freelance')}>
                                <div className={style.show4}>
                                    <p className={style.pshow}>+21 pessoas em comum</p>
                                    <img src={yes} className={style.icon} alt="Icon" />
                                </div>
                                <img src={freelance} className={style.img} alt="Icon" />
                                <p>Freelance</p>
                            </div>
                        </span>
                    </button>
                    {/* */}
                    <button className={state5 ? style.toggle5 : style.notoggle} onClick={toggle5}>
                        <span>
                            <div className={style.opt} onClick={() => handleClick(' Estudando por conta própria')}>
                                <div className={style.show5}>
                                    <p className={style.pshow}>+48 pessoas em comum</p>
                                    <img src={yes} className={style.icon} alt="Icon" />
                                </div>
                                <img src={self} className={style.img} alt="Icon" />
                                <p>Estudando por conta própria</p>
                            </div>
                        </span>
                    </button>
                </div>
            </div>
            <div className={style.footer}>
                <div className={style.back}>
                    <Link to="/Id" className={style.link}>
                        <button className={style.btn2}>
                            <AiOutlineArrowLeft />
                            Voltar
                        </button>
                    </Link>
                </div>
                <div className={style.next}>
                    <p>
                        Você recebeu o cargo<span className={style.bold}>{textos.join(' + ')}</span>
                    </p>
                    <Link to={isButtonEnabled ? '/Area' : '#'} className={style.link}>
                        <button className={isButtonEnabled ? style.btn : style.btnOff} disabled={!isButtonEnabled}>
                            Avançar <AiOutlineArrowRight />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
