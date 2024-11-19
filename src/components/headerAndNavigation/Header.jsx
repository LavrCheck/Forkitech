import './Header.sass'
import logo from '../../assets/logo.svg'
import {Link} from "react-router-dom";
import hamburger from '../../assets/hamburger.svg'
import close from '../../assets/close.svg'
import {AnimatedBell} from "../AnimatedBell.jsx";
import {LocationContainer} from "../LocationContainer.jsx";

export const Header = ({onMenuClick, isMenuOpen}) => {
    return <>
        <header className={"Header"}>
            <div className={'content'}>
                <Link to={'advantages'}>
                    <img src={logo} alt="logo"/>
                </Link>
                <div className={'right-information-container'}>
                    <LocationContainer isDesktop={true}/>
                    <div className={'active-icons-container'}>
                        {isMenuOpen ?
                            <img
                                onClick={onMenuClick}
                                src={close}
                                className={'close-icon'}
                                alt="close"
                            />
                            :
                            <>
                                <AnimatedBell/>
                                <img
                                    onClick={onMenuClick}
                                    className={'hamburger-icon'}
                                    src={hamburger}
                                    alt="hamburger"
                                />
                            </>
                        }
                    </div>
                </div>
            </div>
        </header>
    </>
}