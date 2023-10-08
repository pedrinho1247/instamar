
import './style.css'
import { FiMoreHorizontal, FiSend } from 'react-icons/fi'
import {IoMdHeartEmpty} from 'react-icons/io'
import {BsChat, BsEmojiSmile, BsBookmark} from 'react-icons/bs'
import { IconContext } from 'react-icons/lib'

export function Post() {
    return (
        <>
            <header className="header-post" >

                <div className="infos-post" >
                    <img className="img-header-post" src="https://s1.static.brasilescola.uol.com.br/be/conteudo/images/o-plancton-formado-por-diversos-organismos-pode-ser-classificado-em-fitoplancton-zooplancton-5857f0221e1c3.jpg" />
                    <a href='#'><p>Teste 1</p></a>
                </div>

            </header>

            <div className="img-post" >
                <img src="https://s1.static.brasilescola.uol.com.br/be/conteudo/images/o-plancton-formado-por-diversos-organismos-pode-ser-classificado-em-fitoplancton-zooplancton-5857f0221e1c3.jpg"/>
            </div>

            <div className="footer-post" >
                <IconContext.Provider value={{size: "30px"}} >

                    <section className="engagement-post" >
                        <div className="icons-1" >
                            <div className="icon"><FiSend /></div>
                        </div>
                    </section>
                </IconContext.Provider>
            </div>
        
        </>

    )
}
