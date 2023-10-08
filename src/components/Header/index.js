import { AiOutlineSearch, AiFillHome } from 'react-icons/ai'
import { RiMessengerLine } from 'react-icons/ri'
import { BsPlusSquare } from 'react-icons/bs'
import {MdOutlineExplore} from 'react-icons/md'
import {FiHeart} from 'react-icons/fi'

import { IconContext } from 'react-icons'

import './style.css'

export function Header() {

    return (
        <header className="header" >

            <div className="container" >

                <div className="menu-icons" >
                    <IconContext.Provider value={{ size: '26px' }}>
                        <div>
                            <AiFillHome />
                        </div>

                    </IconContext.Provider>
                    <img className="img-user" src="https://github.com/gabrieldiasss.png" />
                </div>

            </div>

        </header>
    )

}