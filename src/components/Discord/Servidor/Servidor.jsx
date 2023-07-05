
import LoadingScreen from './LoadingScreen';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { MdOutlineDoneOutline } from 'react-icons/md'
import style from './Servidor.module.css'

import dis from '../img/dis.png'
import dis2 from '../img/dis2.png'
import dis3 from '../img/dis3.png'
import dis4 from '../img/dis4.png'
import dis5 from '../img/dis5.png'
import dis6 from '../img/dis6.png'
import micro from '../img/micro.png'
import sound from '../img/sound.png'
import sett from '../img/sett.png'
import logo from '../img/flash.png'
import home from '../img/home.png'
import recep from '../img/recep.png'
import talk from '../img/talk.png'
import um from '../img/um.png'
import dois from '../img/dois.png'
import tres from '../img/tres.png'
import hashtag from '../img/hashtag.png'
import linkedin from '../img/linkedin.png'
import a from '../img/a.png'
import eng from '../img/eng.png'
import lupa from '../img/lupa.png'
import hashtag2 from '../img/hashtag2.png'
import not from '../img/not.png'
import pin from '../img/pin.png'
import gp from '../img/gp.png'
import box from '../img/box.png'
import help from '../img/help.png'
import cat from '../img/cat cry.png'
import mais from '../img/mais.png'
import explorar from '../img/explorar.png'
import cs from '../img/cs.png'
import me from '../img/me.jpeg'
import minimize from '../img/minus.png'
import maxmize from '../img/maximize.png'
import closed from '../img/close.png'
import aten from '../img/aten.png'
import FF from '../img/FF.png'
import suport from '../img/suport.png'
import ajuda from '../img/ajuda.png'
import load from '../img/load.png'



import BatePapo from "./BatePapo/BatePapo";

export default function Servidor() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <div className={style.loading}>
                <h1><img src={load} className={style.load} /></h1>
            </div>
        );
    }
    return (
        <div>
            {isLoading ? (
                <LoadingScreen />
            ) : (
                <div className={style.container}>
                    <div className={style.header}>
                        <h4>Discord</h4>
                        <div className={style.headerIcon}>
                            <img src={minimize} className={style.headerIconIcon} />
                            <img src={maxmize} className={style.headerIconIcon} />
                            <img src={closed} className={style.headerIconIcon} />
                        </div>
                    </div>
                    <div className={style.mainMain}>
                        <div className={style.mainLeft}>
                            <div className={style.left}>
                                <div className={style.msg}>
                                    <img src={dis} className={style.serverIcon} />
                                </div>
                                <div className={style.server}>
                                    <img src={logo} className={style.serverIconF} />
                                    <a href="https://arthurkhalifa.github.io/Portfolio/" target="to_blank">
                                        <img src={a} className={style.serverIconA} />
                                    </a>
                                    <a href="https://www.linkedin.com/in/arthursantos00/" target="to_blank">
                                        <img src={linkedin} className={style.serverIconL} />
                                    </a>
                                    <img src={eng} className={style.serverIconE} />
                                    <img src={cs} className={style.serverIconC} />
                                </div>
                                <div className={style.two}>
                                    <div className={style.act}>
                                        <img src={mais} className={style.mais} />
                                    </div>
                                    <div className={style.act}>
                                        <img src={explorar} className={style.explorar} />
                                    </div>
                                </div>
                            </div>

                            {/* LEFT 2 */}
                            <div className={style.left2}>
                                <div className={style.opt}>
                                    <div className={style.title}>
                                        <h1>Lightning Code <img src={logo} className={style.logo} /></h1>
                                    </div>
                                    <div className={style.recepcao}>
                                        <h2>
                                            <img src={recep} className={style.recep} />Recepção
                                        </h2>
                                        <Link to="/Servidor" className={style.link2}><h3>&nbsp;<img src={hashtag} className={style.hashtagS} />  Bem Vindo</h3></Link>
                                        <h3>&nbsp;<img src={hashtag} className={style.hashtagS} />  Regras</h3>
                                    </div>

                                    <div className={style.areaP}>
                                        <h2>
                                            <img src={home} className={style.home} />Area Principal
                                        </h2>
                                        <Link to="/BatePapo" className={style.link}><h3>&nbsp;<img src={hashtag} className={style.hashtagS} /> Bate Papo</h3></Link>
                                        <h3>&nbsp;<img src={hashtag} className={style.hashtagS} /> Dúvidas no Código</h3>
                                        <h3>&nbsp;<img src={hashtag} className={style.hashtagS} /> Desafios</h3>
                                        <h3>&nbsp;<img src={hashtag} className={style.hashtagS} /> Eventos</h3>
                                    </div>

                                    <div className={style.chatV}>
                                        <h2>
                                            <img src={talk} className={style.talk} /> Chat de Voz
                                        </h2>
                                        <h3>&nbsp;<img src={sound} className={style.um} /> Chat1</h3>
                                        <h3>&nbsp;<img src={sound} className={style.um} /> Chat2</h3>
                                        <h3>&nbsp;<img src={sound} className={style.um} /> Chat3</h3>
                                    </div>
                                </div>
                                <div className={style.config}>
                                    <div className={style.configLeft0}>
                                        <img src={me} className={style.configProf} />
                                        <div className={style.words}>
                                            <h5>Arthur</h5>
                                            <p>Não perturbar</p>
                                        </div>
                                    </div>
                                    <div className={style.configIcon}>
                                        <img src={micro} className={style.configIconIcon} />
                                        <img src={sound} className={style.configIconIcon} />
                                        <img src={sett} className={style.configIconIcon} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.mainRight}>
                            <div className={style.headerRight}>
                                <div className={style.Lheader}>
                                    <img src={hashtag} className={style.hashtag} />
                                    <h2>Bem Vindo</h2>
                                </div>
                                <div className={style.Rheader}>
                                    <img src={hashtag2} className={style.hashtag2} />
                                    <img src={not} className={style.hashtag2} />
                                    <img src={pin} className={style.hashtag2} />
                                    <img src={gp} className={style.hashtag2} />
                                    <input type="text" name="buscar" className={style.input} placeholder="Buscar" />
                                    <img src={box} className={style.hashtag2} />
                                    <img src={help} className={style.hashtag2} />
                                </div>
                            </div>
                            <div className={style.contentRight}>
                                <div className={style.content1}>
                                    <div className={style.welcome}>
                                        <h1>Bem Vindo(a) ao Servidor <br />
                                            <span className={style.red}> Lighting Code</span>!
                                        </h1>
                                        <p>Este é o começo deste servidor.</p>
                                        <br />
                                        <div className={style.line}>
                                            <p className={style.middle}>04 de Julho de 2023</p>
                                            <p className={style.lineAct}></p>
                                        </div>
                                        <br />
                                    </div>
                                    <div className={style.messenge}>
                                        <div className={style.m11}>
                                            <p className={style.hour}>17:45</p>
                                            <p className={style.bot2}> <MdOutlineDoneOutline /> BOT</p>
                                            <h4 className={style.name2}>Teco</h4>
                                            <p className={style.msgL}>@Arthur</p>
                                        </div>
                                        <div className={style.details}>
                                            <div className={style.LeftD}>
                                                <h4>Arthur | Bem vindo(a)</h4>
                                                <p className={style.ola}>Olá, seja bem vindo(a) a <span className={style.lc}> LIGHTING CODE</span> <img src={logo} className={style.bvIcon} />!</p>
                                                <div className={style.check}>
                                                    <div className={style.info1}>
                                                        <h4><img src={suport} className={style.bvIcon} />Sabia que...</h4>
                                                        <p>Você é o 182º<br /> membro do servidor?</p>
                                                    </div>
                                                    <div className={style.info2}>
                                                        <h4><img src={FF} className={style.bvIcon} />Tag do usuário</h4>
                                                        <p>@FrontEnd <br />@FullStack </p>
                                                    </div>
                                                    <div className={style.info3}>
                                                        <h4><img src={ajuda} className={style.bvIcon} />Precisando de ajuda?</h4>
                                                        <p>Se precisar, chame nossa <br />equipe a qualquer momento!</p>
                                                    </div>
                                                </div>
                                                <h4><img src={aten} className={style.bvIcon} />Evite punições</h4>
                                                <p className={style.white}>Leia as regras</p>
                                                <p>Não faça para o outro o que <br />não queres que façam de você</p>
                                            </div>
                                            <div className={style.RightD}>
                                                <img src={me} className={style.eu} />
                                            </div>
                                        </div>
                                        <div className={style.marg}></div>
                                    </div>
                                </div>
                                <div className={style.content2}>
                                    <div className={style.barT}>
                                        <input type="text" className={style.type} placeholder="Conversar em #Bem vindo" />
                                    </div>
                                </div>

                            </div>
                            <div className={style.barRight}></div>
                            {/* LAST RIGHT */}
                            <div className={style.lastRight}>
                                <div className={style.cargo1}>
                                    <h4 className={style.tag1}>Dono</h4>
                                    <div className={style.configLeft}>
                                        <img src={me} className={style.configProf} />
                                        <div className={style.words}>
                                            <h5 className={style.red}>Arthur</h5>
                                            <p>Não perturbar</p>
                                        </div>
                                    </div>
                                    <br />
                                </div>
                                <div className={style.cargo2}>
                                    <h4 className={style.tag2}>Moderador</h4>
                                    <div className={style.configLeft}>
                                        <img src={dis6} className={style.configProf} />
                                        <div className={style.words}>
                                            <h5 className={style.mod}>Arthur</h5>
                                            <p>Não perturbar</p>
                                        </div>
                                    </div>
                                    {/* MOD */}
                                    <div className={style.configLeft}>
                                        <img src={dis6} className={style.configProf} />
                                        <div className={style.words}>
                                            <h5 className={style.mod}>Arthur</h5>
                                            <p>Não perturbar</p>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div className={style.cargo3}>
                                    <h4 className={style.tag3}>Administrador</h4>
                                    {/* ADM */}
                                    <div className={style.configLeft}>
                                        <img src={dis6} className={style.configProf} />
                                        <div className={style.words}>
                                            <h5 className={style.adm}>Ruan</h5>
                                            <p>Não perturbar</p>
                                        </div>
                                    </div>
                                    {/* ADM */}
                                    <div className={style.configLeft}>
                                        <img src={dis6} className={style.configProf} />
                                        <div className={style.words}>
                                            <h5 className={style.adm}>Arthur</h5>
                                            <p>Não perturbar</p>
                                        </div>
                                    </div>
                                    {/* ADM */}
                                    <div className={style.configLeft}>
                                        <img src={dis6} className={style.configProf} />
                                        <div className={style.words}>
                                            <h5 className={style.adm}>Arthur</h5>
                                            <p>Não perturbar</p>
                                        </div>
                                    </div>
                                    {/* ADM */}
                                    <div className={style.configLeft}>
                                        <img src={dis6} className={style.configProf} />
                                        <div className={style.words}>
                                            <h5 className={style.adm}>Arthur</h5>
                                            <p>Não perturbar</p>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div className={style.cargo9}>
                                    <h4 className={style.tag4}>BOT's</h4>
                                    {/* ADM */}
                                    <div className={style.configLeft}>
                                        <img src={dis6} className={style.configProf} />
                                        <div className={style.words}>
                                            <h5 className={style.bot}>Tico</h5>
                                            <p>Não perturbar</p>
                                        </div>
                                    </div>
                                    {/* bot */}
                                    <div className={style.configLeft}>
                                        <img src={dis6} className={style.configProf} />
                                        <div className={style.words}>
                                            <h5 className={style.bot}>Teco</h5>
                                            <p>Não perturbar</p>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div className={style.cargo4}>
                                    <h4 className={style.tag5}>Online</h4>
                                    <div className={style.configLeft}>
                                        <img src={dis6} className={style.configProf} />
                                        <div className={style.words}>
                                            <h5 className={style.OnL}>Arthur</h5>
                                            <p>Não perturbar</p>
                                        </div>
                                    </div>
                                    {/* ONLINE */}
                                    <div className={style.configLeft}>
                                        <img src={dis6} className={style.configProf} />
                                        <div className={style.words}>
                                            <h5 className={style.OnL}>Arthur</h5>
                                            <p>Não perturbar</p>
                                        </div>
                                    </div>
                                    {/* ONLINE */}
                                    <div className={style.configLeft}>
                                        <img src={dis6} className={style.configProf} />
                                        <div className={style.words}>
                                            <h5 className={style.OnL}>Arthur</h5>
                                            <p>Não perturbar</p>
                                        </div>
                                    </div>
                                    {/* ONLINE */}
                                    <div className={style.configLeft}>
                                        <img src={dis6} className={style.configProf} />
                                        <div className={style.words}>
                                            <h5 className={style.OnL}>Arthur</h5>
                                            <p>Não perturbar</p>
                                        </div>
                                    </div>
                                    {/* ONLINE */}
                                    <div className={style.configLeft}>
                                        <img src={dis6} className={style.configProf} />
                                        <div className={style.words}>
                                            <h5 className={style.OnL}>Arthur</h5>
                                            <p>Não perturbar</p>
                                        </div>
                                    </div>
                                    {/* ONLINE */}
                                    <div className={style.configLeft}>
                                        <img src={dis6} className={style.configProf} />
                                        <div className={style.words}>
                                            <h5 className={style.OnL}>Arthur</h5>
                                            <p>Não perturbar</p>
                                        </div>
                                    </div>
                                    {/* ONLINE */}
                                    <div className={style.configLeft}>
                                        <img src={dis6} className={style.configProf} />
                                        <div className={style.words}>
                                            <h5 className={style.OnL}>Arthur</h5>
                                            <p>Não perturbar</p>
                                        </div>
                                    </div>
                                    {/* ONLINE */}
                                    <div className={style.configLeft}>
                                        <img src={dis6} className={style.configProf} />
                                        <div className={style.words}>
                                            <h5 className={style.OnL}>Arthur</h5>
                                            <p>Não perturbar</p>
                                        </div>
                                    </div>
                                    {/* ONLINE */}
                                    <div className={style.configLeft}>
                                        <img src={dis6} className={style.configProf} />
                                        <div className={style.words}>
                                            <h5 className={style.OnL}>Arthur</h5>
                                            <p>Não perturbar</p>
                                        </div>
                                    </div>
                                    {/* ONLINE */}
                                    <div className={style.configLeft}>
                                        <img src={dis6} className={style.configProf} />
                                        <div className={style.words}>
                                            <h5 className={style.OnL}>Arthur</h5>
                                            <p>Não perturbar</p>
                                        </div>
                                    </div>
                                    {/* ONLINE */}
                                    <div className={style.configLeft}>
                                        <img src={dis6} className={style.configProf} />
                                        <div className={style.words}>
                                            <h5 className={style.OnL}>Arthur</h5>
                                            <p>Não perturbar</p>
                                        </div>
                                    </div>
                                    {/* ONLINE */}
                                    <div className={style.configLeft}>
                                        <img src={dis6} className={style.configProf} />
                                        <div className={style.words}>
                                            <h5 className={style.OnL}>Arthur</h5>
                                            <p>Não perturbar</p>
                                        </div>
                                    </div>
                                    {/* ONLINE */}
                                    <div className={style.configLeft}>
                                        <img src={dis6} className={style.configProf} />
                                        <div className={style.words}>
                                            <h5 className={style.OnL}>Arthur</h5>
                                            <p>Não perturbar</p>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div className={style.cargo5}>
                                    <h4 className={style.tag6}>Offline</h4>
                                    {/* OFFLINE */}
                                    <div className={style.configLeftOFF}>
                                        <img src={dis6} className={style.configProf} />
                                        <div className={style.words}>
                                            <h5>Arthur</h5>
                                            <p>Não perturbar</p>
                                        </div>
                                    </div>
                                    {/* OFFLINE */}
                                    <div className={style.configLeftOFF}>
                                        <img src={dis6} className={style.configProf} />
                                        <div className={style.words}>
                                            <h5>Arthur</h5>
                                            <p>Não perturbar</p>
                                        </div>
                                    </div>
                                    {/* OFFLINE */}
                                    <div className={style.configLeftOFF}>
                                        <img src={dis6} className={style.configProf} />
                                        <div className={style.words}>
                                            <h5>Arthur</h5>
                                            <p>Não perturbar</p>
                                        </div>
                                    </div>
                                    {/* OFFLINE */}
                                    <div className={style.configLeftOFF}>
                                        <img src={dis6} className={style.configProf} />
                                        <div className={style.words}>
                                            <h5>Arthur</h5>
                                            <p>Não perturbar</p>
                                        </div>
                                    </div>
                                    {/* OFFLINE */}
                                    <div className={style.configLeftOFF}>
                                        <img src={dis6} className={style.configProf} />
                                        <div className={style.words}>
                                            <h5>Arthur</h5>
                                            <p>Não perturbar</p>
                                        </div>
                                    </div>
                                    {/* OFFLINE */}
                                    <div className={style.configLeftOFF}>
                                        <img src={dis6} className={style.configProf} />
                                        <div className={style.words}>
                                            <h5>Arthur</h5>
                                            <p>Não perturbar</p>
                                        </div>
                                    </div>
                                    {/* OFFLINE */}
                                    <div className={style.configLeftOFF}>
                                        <img src={dis6} className={style.configProf} />
                                        <div className={style.words}>
                                            <h5>Arthur</h5>
                                            <p>Não perturbar</p>
                                        </div>
                                    </div>
                                </div>
                                <br />
                            </div>
                        </div>
                    </div>
                </div >
            )}
        </div>

    )
}