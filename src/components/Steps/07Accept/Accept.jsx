import style from '../07Accept/Accept.module.css'

//= ARROW's =//
import { AiOutlineArrowRight } from 'react-icons/ai'
import { AiOutlineArrowLeft } from 'react-icons/ai'

import { Link } from 'react-router-dom'

export default function Accept() {
    return (
        <div className={style.container}>
            <div className={style.div}>
                <div className={style.header}>
                    <p>Espere! preciso fazer alguns ajustes</p>
                    <h2>Ler e concordar com as regras do servidor</h2>
                </div>
                {/*= MIDDLE =*/}
                <div className={style.rules}>
                    <div className={style.r1}>1: <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                        enim dolore! Eaautem quo voluptas inventore neque voluptatum vel ullam recusandae laborum
                        aliquam id error sequi nihil aspernatur, at nisi.</p>
                    </div>
                    {/*==*/}
                    <div className={style.r1}>2: <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                        enim dolore! Eaautem quo voluptas inventore neque voluptatum vel ullam recusandae laborum
                        aliquam id error sequi nihil aspernatur, at nisi.</p>
                    </div>
                    {/*==*/}
                    <div className={style.r1}>3: <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                        enim dolore! Eaautem quo voluptas inventore neque voluptatum vel ullam recusandae laborum
                        aliquam id error sequi nihil aspernatur, at nisi.</p>
                    </div>
                    {/*==*/}
                    <div className={style.r1}>4: <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                        enim dolore! Eaautem quo voluptas inventore neque voluptatum vel ullam recusandae laborum
                        aliquam id error sequi nihil aspernatur, at nisi.</p>
                    </div>
                    {/*==*/}
                    <div className={style.r1}>5: <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                        enim dolore! Eaautem quo voluptas inventore neque voluptatum vel ullam recusandae laborum
                        aliquam id error sequi nihil aspernatur, at nisi.</p>
                    </div>
                </div>
            </div>
            {/*= FOOTER =*/}
            <div className={style.footer}>
                    <div className={style.back}>
                    <Link to='/Level' className={style.link}><button className={style.btn2}><AiOutlineArrowLeft />Voltar</button></Link>
                    </div>
                    <div className={style.next}>
                        <p>Ao clickar em "Finalizar" você concorda com as regras estabelecidas<span></span></p>
                        <Link to='/Servidor' className={style.link}><button className={style.btn}>Finalizar
                            <AiOutlineArrowRight />
                        </button></Link> 
                    </div>
                </div>
        </div>
    )
}