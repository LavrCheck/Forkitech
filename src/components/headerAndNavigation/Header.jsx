import './Header.sass'
import logo from '../../assets/logo.svg'
import location from '../../assets/location.svg'
import notificationBell from '../../assets/notificationBell.svg'
import {Link} from "react-router-dom";
import hamburger from '../../assets/hamburger.svg'
import close from '../../assets/close.svg'
import {AnimatedBell} from "../AnimatedBell.jsx";

export const Header = ({onMenuClick, isMenuOpen}) => {
    return <>
        <header className={"Header"}>
            <div className={'content'}>
                <Link to={'advantages'}>
                    <img src={logo} alt="logo"/>
                </Link>
                <div className={'right-information-container'}>
                    <div className={'location-container'}>
                        <img src={location} alt="location"/>
                        <span>Москва и область</span>
                    </div>
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